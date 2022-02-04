import React from 'react';
import style from './popup.module.scss'
import h1 from '../Assets/Pgood.png'
import h2 from '../Assets/pop.png'
function Popup({closePopup}) {
    return <div className={style.wrapper}>
        <div className={style.box}>
            <img src={h1} />
            <p>When you slouch, you compress the space for your lungs, reducing their capacity by up to 30 percent. That means less oxygen can get to your brain. So sitting up straight may actually help your brain function better, as well as help you think more clearly because you feel calmer and more confident</p>
            <img src={h2} />
            <ul>
                <li>
                    Keep your shoulders back.
                </li>
                <li>
                    Keep your head level.
                </li>
                <li>
                    Pull your stomach in.
                </li>
                <li>
                    Prevent your shoulders from slouching.
                </li>
            </ul>

            <div className={style.btn} onClick={()=>closePopup(false)}> Understood</div>

        </div>
    </div>;
}

export default Popup;
