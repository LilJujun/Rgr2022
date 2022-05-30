import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Regestration.module.css";
import axios from "axios";
import validator from "validator";


export default function Registration() {
    const [registration, setRegistration] = useState(() => {
        return {
            nickname: "",
            email: "",
            password: "",
            password2: "",
            birthday: ""
        }
    })

    const changeInputRegister = event => {
        event.persist()
        setRegistration(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }


    const submitChecking = event => {
        event.preventDefault();
        if (!validator.isEmail(registration.email)) {
            alert("Вы не ввели адрес электронной почты")
        } else if (registration.password !== registration.password2) {
            alert("Неверно введен повторный пароль")
        } else if (!validator.isStrongPassword(registration.password, { minSymbols: 0 })) {
            alert("Пароль должен состоять из одной строчной, прописной буквы,цифры, не менее 8 символов")
        } else {
            axios.post("http://localhost:8080/auth/registration", {
                nickname: registration.nickname,
                email: registration.email,
                password: registration.password,
                birthDate: registration.birthday
            }).then((res) => {
                    window.location.href = "http://localhost:3000/accept"
            }).catch(function (error){
                alert(error);});
        }
    }
    return (
        <div className={s.back} >
            <div className={s.regPage}>
            <p className={s.logo}>Kotogramm</p>
                <form onSubmit={submitChecking}>
                    <p>Name: <input
                        className={s.regInput}
                        type="nickname"
                        id="nickname"
                        name="nickname"
                        value={registration.nickname}
                        onChange={changeInputRegister}
                    /></p>
                    <p>Email: <input
                        className={s.regInput}
                        type="email"
                        id="email"
                        name="email"
                        value={registration.email}
                        onChange={changeInputRegister}
                        formnovalidate
                    /></p>
                    <p>Password: <input
                        className={s.regInput}
                        type="password"
                        id="password"
                        name="password"
                        value={registration.password}
                        onChange={changeInputRegister}
                    /></p>
                    <p>Repeat password: <input
                        className={s.regInput}
                        type="password"
                        id="password2"
                        name="password2"
                        value={registration.password2}
                        onChange={changeInputRegister}
                    /></p>
                    <p>Date birthday: <input
                        className={s.regInput}
                        type="date" id="birthday" name="birthday"

                        min="1900-01-01" max="2022-01-01"
                        value={registration.birthday}
                        onChange={changeInputRegister}
                    /></p>
                    <input className={s.btn} type="submit"  value="Зарегистрироваться"/>
                </form>
                <div className={s.link}>
                <NavLink to='/'>У меня уже есть аккаунт</NavLink>
                </div>
            </div>
        </div>
    )

}
