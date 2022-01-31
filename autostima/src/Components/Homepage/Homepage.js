import React from 'react';
import style from './Homepage.module.scss'
import tree from '../Assets/tree.png'
import landing from '../Assets/landing.png'
import { Link } from 'react-router-dom';
function Homepage() {
    return <div className={style.wrapper}>
        <div className={style.left}>
            <img src={landing} />
            <Link to='/dashboard'>
                <div className={style.btn}>Start Here</div>
            </Link>

        </div>
        <div className={style.right}>
            <img src={tree} />
        </div>
    </div>;
}

export default Homepage;
