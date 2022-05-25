import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Regestration.module.css";

const Regestration = () => {
    function createUser(event){
        const email = event.target.parentElement.children[1].value;
        const name = event.target.parentElement.childre
    }
    return (
        <div className={s.reg}>
            <a>Регистрация</a>
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="@mail"></input>
            <input type="text" placeholder="Имя"></input>
            <input type="password" placeholder="Пароль"></input>
            <input type="password" placeholder="Повторите пароль"></input>
            <input type="button" placeholder="Зарегестрироваться" onClick></input>
            </form>
            <NavLink to='/'>У меня уже есть аккаунт</NavLink>
            
        </div>
    )

}
export default Regestration;