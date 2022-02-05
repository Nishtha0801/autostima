import style from './Dashboard.module.scss'
import React, { useEffect, useRef, useState } from 'react';
import Webcam from "react-webcam";
import Dropzone from 'react-dropzone'
import head from '../Assets/dashboard.png'
import * as tf from '@tensorflow/tfjs';
import * as tmPose from '@teachablemachine/pose';
import { useNavigate } from 'react-router-dom';
import useSpeechToText from 'react-hook-speech-to-text';
import Popup from '../Popup/popup';
function Practice() {
    const history = useNavigate()
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });
    const [models, setModels] = useState();
    const [maxPredictions, setMaxPredictions] = useState();
    const [score, setScore] = useState([]);
    const [start, setStart] = useState(false);
    const [filePopup, setFilePopup] = useState(false)
    const [file, setFile] = useState(null)
    const camera = useRef();
    const player = useRef();
    const [cnt, setCnt] = useState({})
    const arr = [
        'I can do it',
        'If you think you can do it, you can',
        'Sewing Bee is making people realize that you can do it yourself.',
        'You just have to have the guidance to lead you in the direction until you can do it yourself.'
    ]
    const [idx, setIdx] = useState(0);
    const [popup, setPopup] = useState(true)
    const URL = "https://teachablemachine.withgoogle.com/models/hZpnR1hwj/";
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    }

    const onEndHandler = () => {
        let trans = results.map(data => data.transcript)
        trans = trans.join("")
        localStorage.setItem("trans", trans);
        localStorage.setItem("cnt", JSON.stringify(cnt));
        stopSpeechToText()
        setStart(false)
        history("/")
    }


    async function predict(img) {
        let prevModels = null
        setModels(models => {
            prevModels = models;
            return models
        })
        if (!prevModels) return
        const { pose, posenetOutput } = await prevModels.estimatePose(img);
        const prediction = await prevModels.predict(posenetOutput);
        let maxPrediction = 0;
        setMaxPredictions(maxPredictions => {
            maxPrediction = maxPredictions;
            return maxPredictions
        })
        let currstart = false;
        setStart(start => {
            currstart = start;
            return start;
        })
        for (let i = 0; currstart == true && i < maxPrediction; i++) {
            setScore([prediction[1].probability.toFixed(2), prediction[0].probability.toFixed(2)])
            if (prediction[1].probability.toFixed(2) > 0.90) {
                setCnt(cnt => {
                    let obj = cnt;
                    obj.bad = (obj.bad ? obj.bad : 0) + 1;
                    return { ...obj }
                })
            }
            if (prediction[0].probability.toFixed(2) > 0.80) {
                setCnt(cnt => {
                    let obj = cnt;
                    obj["good"] = (obj?.good ? obj?.good : 0) + 1;
                    return { ...obj }
                })
            }
        }
    }


    const capture = () => {
        if (!camera.current) return
        const imageSrc = camera.current.getScreenshot();
        if (!camera.current.ctx) return
        var img = new Image();
        img.src = imageSrc;
        camera.current.ctx.drawImage(img, 0, 0)
        predict(camera.current.canvas)
    }



    useEffect(async () => {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        let models = await tmPose.load(modelURL, metadataURL);
        setModels(models)
        let maxPredictions = models.getTotalClasses();
        setMaxPredictions(maxPredictions)
        let intervel = setInterval(capture, 1000);


        return () => {
            clearInterval(intervel)

        }
    }, [])

    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            localStorage.setItem("text", text)
        };
        reader.readAsText(e.target.files[0])
        setFilePopup(false)
    }

    const dragFile = async (e) => {
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            localStorage.setItem("text", text)
        };
        reader.readAsText(e[0])
        setFilePopup(false)
    }





    return <div className={style.wrapper}>
        {popup ?
            <Popup closePopup={setPopup} />
            : null}
        <div className={style.head} >
            <img src={head} />
        </div>

        <div className={style.camera}>
            <Webcam audio={false} ref={camera} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} width="600px" />
        </div>

        <div className={style.details}>
            <div className={style.Dwrapper}>
                {score.length > 0 ? <>
                    <div className={style.speech}>{arr[idx]}</div>
                    {(score[1] > score[0]) ?
                        <div className={style.Cposture}>Good Posture </div>
                        :
                        <div className={style.Bposture}>Bad Posture < br /> <span style={{fontSize:"small", color:"white"}}>Be confident and back straight </span></div>
                    }
                </>
                    : null}

                {start ?
                    <div style={{ display: "flex" }}>
                        <div className={style.end} style={{ marginRight: "15px" }} onClick={() => {
                            onEndHandler();
                        }}>Stop</div>
                        <div className={style.start} onClick={() => {
                            setIdx(idx == 3 ? 0 : idx + 1);
                        }}>Next</div>
                    </div>
                    :
                    <div style={{ display: "flex" }}>
                        <div className={style.start} style={{ marginRight: "15px" }} onClick={() => {
                            setStart(true)
                            startSpeechToText();
                        }}>Start</div>

                    </div>
                }
            </div>

        </div>



    </div >;
}

export default Practice;