import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import s from "./Login.module.css";

const Login = ({ Login, Regestr}) => {
    return (
        <>
        <div className={s.back}>
            <div className={s.loginPage}>

            <input type="text" placeholder="Логин"></input>
            <input type="password" placeholder="Пароль"></input>
            <NavLink  to='/ms' > Войти</NavLink>
            <NavLink to='/reg'>Зарегистрироваться</NavLink>
            
            </div>
        </div>
        <Outlet />
        </>
    )

}
export default Login;