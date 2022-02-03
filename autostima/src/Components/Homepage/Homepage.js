import React from 'react';
import { useEffect} from "react";
import style from './Homepage.module.scss'
import tree from '../Assets/tree.png'
import landing from '../Assets/landing.png'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const CustomToastWithMessage = (msg) => {
    if (typeof msg == "string") {
      return (
        <div>
          {msg}
        </div>
      );
    }
  };

function Homepage() {
    useEffect(() => {
        fetch(
            `https://type.fit/api/quotes`
          )
          .then((res) => res.json())
          .then((res) =>{
            const apiData = res;
            console.log(apiData + "");
            if(apiData.length>0){
                toast.info(
                    () =>
                      CustomToastWithMessage(
                        `Some rguvxjv hbkguftc ffuyyj abcd`
                      ),
                    {
                      theme: "colored",
                      hideProgressBar: false,
                      closeButton: true,
                    }
                  );
            }
          });
    });
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

