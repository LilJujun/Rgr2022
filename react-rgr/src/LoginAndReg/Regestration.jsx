import React from "react";
import s from "./Regestration.module.css";

const Regestration = ({ Regestration }) => {
    return (
        <div className={s.Regestration}>
            <input type="text" value="eMail"></input>
            <input type="text" value="Имя"></input>
            <input type="password" value="Пароль"></input>
            <input type="password" value="Повторите пароль"></input>
            <input type="button" onClick={Regestration} value="Зарегестрироваться"></input>

        </div>
    )

}
export default Regestration;