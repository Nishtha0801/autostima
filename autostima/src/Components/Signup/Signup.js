import React, { useState } from 'react';
import style from './Signup.module.scss'
import rocket from '../Assets/rocket.png'
import signup from '../Assets/signup.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios.js'
function Signup() {
    const [details, setDetails] = useState("");
    const history = useNavigate();
    const onChangeHandler = (e, type) => {
        let obj = { ...details }
        obj[type] = e.target.value;
        console.log(obj);
        setDetails(obj)
    }
    const onSubmitHandler = async () => {
        try {
            console.log({...details, phone:"000"});
            let data = await axios.post("/user/signup", {...details, phone:"000"})
            localStorage.setItem("token", data.data.token)
            history("/")
        } catch (e) {
            console.log(e)
        }
    }

    return <div className={style.wrapper}>
        <div className={style.left} >
            <div className={style.head}><img src={signup} /></div>
            <input type='text' className={style.name} placeholder='Enter Name' onChange={(e) => onChangeHandler(e, 'name')} />
            <input type='text' className={style.email} placeholder='Enter Email' onChange={(e) => onChangeHandler(e, 'email')} />
            <input type='password' className={style.password} placeholder='Enter Password' onChange={(e) => onChangeHandler(e, 'password')} />
            <div className={style.btn} onClick={onSubmitHandler}>Signup</div>
            <div className={style.signup}> Already have an account?
                <Link to="/login">
                    <span> Login </span>
                </Link>
            </div>
        </div>
        <div className={style.right} >
            <img src={rocket} />
        </div>
    </div>;
}

export default Signup;
