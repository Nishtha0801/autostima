import React, { useState } from 'react';
import style from './Login.module.scss'
import girl from '../Assets/girl.png'
import login from '../Assets/Login.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios.js';
function Login() {
    const history = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeHandler = (e, type) => {
        if (type == 'email') {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }
    const onSubmitHandler = async () => {
        try {
            console.log({email,password});
            let data = await axios.post("/user/login", {email,password})
            localStorage.setItem("token", data.data.token)
            history("/")
        } catch (e) {
            console.log(e)
        }
    }



    return <div className={style.wrapper}>
        <div className={style.left} >
            <div className={style.head}><img src={login} /></div>
            <input type='text' className={style.email} placeholder='Enter Email' onChange={(e)=>onChangeHandler(e,'email')} />
            <input type='password' className={style.password} placeholder='Enter Password' onChange={(e)=>onChangeHandler(e,'password')}/>
            <div className={style.btn} onClick={onSubmitHandler}>Login</div>
            <div className={style.signup}> Don't have an account?
                <Link to="/signup">
                    <span> Signup </span>
                </Link>
            </div>
        </div>
        <div className={style.right} >
            <img src={girl} />
        </div>
    </div>;
}

export default Login;
