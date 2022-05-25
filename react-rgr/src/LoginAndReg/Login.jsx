import axios from "axios";
import React,{useState}  from "react";
import { NavLink } from "react-router-dom";
import s from "./Login.module.css";
import validator from "validator";

export default function Login() {

  const [login, setLogin] = useState(() => {
    return {
        email: "",
        password: ""
    }
})

const changeInputLogin = event => {
    event.persist()
    setLogin(prev => {
        return {
            ...prev,
            [event.target.name]: event.target.value,
        }
    })
}


const submitChecking = event => {
    event.preventDefault();
    if (!validator.isEmail(login.email)) {
        alert("Неправильная почта")
    }  else {
        axios.post("http://localhost:8080/login/", {
            email: login.email,
            password: login.password
        }).then(res => {
            if (res.data === true) {
                window.location.href = "http://localhost:8080/login/"
            } else {
                alert("There is already a user with this email")
            }
        }).catch(function (error){
            alert(error);});
    }
}
  
    return (
      <div className={s.back} >

        <div className={s.loginPage}>
        <form onSubmit={submitChecking}>
                <p>Email: <input
                    type="email"
                    id="email"
                    name="email"
                    value={login.email}
                    onChange={changeInputLogin}
                  
                /></p>
                <p>Password: <input
                    type="password"
                    id="password"
                    name="password"
                    value={login.password}
                    onChange={changeInputLogin}
                /></p>
                <input type="submit" />
            </form>
          <NavLink to='/ms' type="submit"> Войти</NavLink>
          <NavLink to='/user/registration'>Зарегистрироваться</NavLink>

        </div>

      </div>
    )
  }






