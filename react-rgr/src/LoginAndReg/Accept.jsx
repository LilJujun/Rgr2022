import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Accept.module.css";
import axios from "axios";


export default function Accept() {
    const [accept, setCode] = useState(() => {
        return {
            code: ""
            
        }
    })
    const [count, setCount] = useState(0)
    const changeInputAccept = event => {
        event.persist()
        setCode(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }
    function chekingCode() {
       
        axios.get("http://localhost:8080/auth/accept/").then((res) => {
            setCount(res.data)
        }).catch(function (error) {
            alert(error);
        })
    }
    const submitChecking = event => {
        event.preventDefault();
        if (count === accept.code) {
            axios.post("http://localhost:8080/auth/accept/")
                .then((res) => {
                    window.location.href = "http://localhost:3000"
                }).catch(function (error) {
                    alert(error);
                });
        }else{
            alert("Неправильный код")
        }
    }
    
    useEffect(() =>{
        let ignore = false
        if(!ignore) {
            chekingCode()
            ignore=true;
        }
    },[])
    return (
        <div className={s.back}>
            <div className={s.acceptPage} >
            <p className={s.logo}>Kotogramm</p>
                <form className={s.onCentre} onSubmit={submitChecking} >
                    <p>Код подтверждения</p>
                    <input
                        type="text"
                        placeholder="Введите код,отправленный на email"
                        id="code"
                        name="code"
                        value={accept.code}
                        onChange={changeInputAccept}
                    />
                    <p><input className={s.btn} type="submit" value="Отправить"  onclick="this.style.display='none"/> </p>
                </form>

            </div>


        </div>
    )

}
