import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Regestration.module.css";

const Regestration = () => {
    return (
        <div className={s.reg}>
            <a>Регистрация</a>
            <input type="text" placeholder="@mail"></input>
            <input type="text" placeholder="Имя"></input>
            <input type="password" placeholder="Пароль"></input>
            <input type="password" placeholder="Повторите пароль"></input>
            <input type="button" placeholder="Зарегестрироваться"></input>
            <NavLink to='/'>У меня уже есть аккаунт</NavLink>
            
        </div>
    )

}
export default Regestration;