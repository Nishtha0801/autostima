import React from 'react';
import style from './Blog.module.scss'
import blog from '../Assets/blog.png'
import { Link } from 'react-router-dom';
function Blog() {
    return <div className={style.wrapper}>
        <img src={blog} />
        <div className={style.subHead}>Blogs and videos to help you with your autostima</div>
        <div className={style.b1}>
            <div className={style.left}>
                <div className={style.upper}>
                    <a href='https://youtu.be/CmSd_DLj70M' target="__blank">
                        <div className={style.head}>A Stunning Reply To Boost Your Self-Confidence </div>
                        <div className={style.subHead}>Video</div>
                    </a>
                </div>
                <div className={style.lower}>
                    <a href='https://youtu.be/savwVzZh5go' target="__blank">
                        <div className={style.head}>Public Speaking Skills | Boost your Confidence</div>
                        <div className={style.subHead}>Video</div>
                    </a>
                </div>
            </div>
            <div className={style.right}>
                <a href='https://medium.com/coffee-times/2-tips-to-become-a-fabulous-public-speaker-61635b0702bd' target="__blank">
                    <div className={style.head}>2 Tips To Become a Fabulous Public Speaker</div>
                    <div className={style.subHead}>BLog</div>
                </a>
            </div>
        </div>
        <div className={style.b2}>
            <div className={style.left}>
                <a href='https://medium.com/@speakingcpr/3-influential-speaking-insights-for-executives-f529422f438d' target="__blank">
                    <div className={style.head}>3 Influential Speaking Insights for Executives
                    </div>
                    <div className={style.subHead}>BLog</div>
                </a>
            </div>
            <div className={style.right}>
                <a href='https://youtu.be/-FOCpMAww28' target="__blank">
                    <div className={style.head}>TED's secret to great public speaking </div>
                    <div className={style.subHead}>Video</div>
                </a>
            </div>
        </div>
    </div>;
}

export default Blog;
