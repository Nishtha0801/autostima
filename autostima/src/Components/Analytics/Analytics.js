import React from 'react';
import style from './Analytics.module.scss'
import Chart from './graph';
import good from '../Assets/good.png'
import head from '../Assets/Speech.png'
function Analytics() {

    if (!localStorage.getItem("text")) return null
    let text = localStorage.getItem("text").split(" ")
    let trans = localStorage.getItem("trans").split(" ")

    let msg = trans.map((data, idx) => {
        return <span style={{ color: (data == text[idx]) ? 'black' : 'red' }}>{data} </span>
    })

    return <div className={style.wrapper} >
        <div className={style.left}>
            <div className={style.head}>
                <img src={head} />
            </div>
            <div className={style.data}>
                {msg}
            </div>
        </div>
        <div className={style.right}>
            <div>
                <div className={style.graph}>
                    <img src={good} />
                    <Chart />
                </div>
                <div className={style.img}></div>
            </div>
        </div>

    </div>;
}

export default Analytics;
