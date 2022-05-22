import React from "react";
import s from "./Login.module.css";

const Login = ({ Login},{Regestr}) => {
    return (
        <div className={s.login}>
            <a className={s.nadpis}>Login</a>

            <input type="text" placeholder="Логин"></input>
            <input type="password" placeholder="Пароль"></input>
            <input type="button" onClick={Login} value="Войти" className={s.inLogin}></input>
            <input type="button" onClick={Regestr} value="Зарегестрироваться" className={s.inLogin}></input>

        </div>

    )

}
export default Login;