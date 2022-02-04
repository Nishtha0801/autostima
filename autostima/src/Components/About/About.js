import React from 'react';
import style from './About.module.scss'
import about from '../Assets/about.png'
import features from '../Assets/features.png'
import saly from '../Assets/aboutsaly.png'

function About(){
    return <>
    <div className={style.container}>
    <div className={style.page}>
        <div className={style.part1}>
            <div className={style.about}>
                <div className={style.ab_head}>
                <img src={about} />
                </div>
                <div className={style.ab_text}>Our team built autostima to help people tackle the issue of lack in self-esteem faced by many around the world.</div>
           
            </div>
            <div className={style.features}>
                <div className={style.feature_head}>
                    <img src ={features} />
                </div>
                <div className={style.one}>
                    <div className={style.one_head}>Affirmation Camera</div>
                    <div className={style.one_content}>
                        Allows you to analyse yourself while speaking out affirmations or the speech in order to check how confident you look. 
                    </div>
                </div>
                <div className={style.two}>
                    <div className={style.two_head}>Posture Detector</div>
                    <div className={style.two_content}>
                        Checks the posture in the Affirmation Camera and instantly notifies your if your posture is not appropriate.           
                       </div>
                </div>
                <div className={style.three}>
                    <div className={style.three_head}>Speech rehearsal</div>
                    <div className={style.three_content}>You can input your speech or any written material through .txt or .doc files and analyse your performance in the camera along with the posture. The lines appear one by one which you repeat to practice.</div>
                </div>
                <div className={style.four}>
                    <div className={style.four_head}> Anyalitcs</div>
                    <div className={style.four_content}>Highlights the part of speech where the you have a bad posture along with a pie chart that analyses the ratio of good posture to bad posture.</div>
                </div>
                <div className={style.five}>
                    <div className={style.five_head}> Blogs and videos</div>
                    <div className={style.five_content}> You can also read and watch various blogs and videos that would help you to boost their confidence and grow in the field of verbal communication.</div>
                </div>
            </div>
        </div>
        <div className={style.part2}>
        <img src ={saly} />
        </div>
    </div>
</div>
</>
}

export default About;