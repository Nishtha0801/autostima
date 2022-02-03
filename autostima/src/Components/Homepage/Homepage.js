import React from 'react';
import { useEffect} from "react";
import style from './Homepage.module.scss'
import tree from '../Assets/tree.png'
import landing from '../Assets/landing.png'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function Homepage() {
    useEffect(() => {
        fetch(
            `https://type.fit/api/quotes`
          )
          .then((res) => res.json())
          .then((res) =>{
            const apiData = res;
            // console.log(apiData + "");
            if(apiData.length>0){
                // console.log(apiData[parseInt(Math.random()*apiData.length)])
                toast(apiData[parseInt(Math.random()*apiData.length)].text);
            }
          });

    },[]);

    return <div className={style.wrapper}>
        <div className={style.left}>
            <img src={landing} />
            <Link to='/dashboard'>
                <div className={style.btn}>Start Here</div>
            </Link>

        </div>
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <div className={style.right}>
            <img src={tree} />
        </div>
    </div>;
}

export default Homepage;

