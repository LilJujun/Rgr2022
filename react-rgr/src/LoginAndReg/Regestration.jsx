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
            alert("You did not enter email")
        } else if (registration.password !== registration.password2) {
            alert("Repeated password incorrectly")
        } else if (!validator.isStrongPassword(registration.password, { minSymbols: 0 })) {
            alert("Password must consist of one lowercase, uppercase letter and number, at least 8 characters")
        } else {
            axios.post("http://localhost:8080/user/registration", {
                nickname: registration.nickname,
                password: registration.password,
                email: registration.email,
                birthDate: registration.birthday
            }).then((res) => {
                alert("asd");
                alert(res.data);
            }).catch(function (error){
                alert(error);});

        }
    }
    return (
        <div className={s.back} >
            <div className={s.regPage}>
                <form onSubmit={submitChecking}>
                    <p>Name: <input
                        type="nickname"
                        id="nickname"
                        name="nickname"
                        value={registration.nickname}
                        onChange={changeInputRegister}
                    /></p>
                    <p>Email: <input
                        type="email"
                        id="email"
                        name="email"
                        value={registration.email}
                        onChange={changeInputRegister}
                        formnovalidate
                    /></p>
                    <p>Password: <input
                        type="password"
                        id="password"
                        name="password"
                        value={registration.password}
                        onChange={changeInputRegister}
                    /></p>
                    <p>Repeat password: <input
                        type="password"
                        id="password2"
                        name="password2"
                        value={registration.password2}
                        onChange={changeInputRegister}
                    /></p>
                    <p>Date birthday: <input
                        type="date" id="birthday" name="birthday"

                        min="1900-01-01" max="2018-12-31"
                        value={registration.birthday}
                        onChange={changeInputRegister}
                    /></p>
                    <input type="submit" />
                </form>
                <NavLink to='/login'>У меня уже есть аккаунт</NavLink>

            </div>
        </div>
    )

}
