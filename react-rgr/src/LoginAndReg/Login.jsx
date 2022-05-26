import axios from "axios";
import React,{useState}  from "react";
import { NavLink } from "react-router-dom";
import s from "./Login.module.css";


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
        axios.post("http://localhost:8080/auth/login", {
            email: login.email,
            password: login.password
        }).then(res => {
            if (res.data.accessToken) {
                // window.location.href = "http://localhost:8080/login/"
                localStorage.setItem("user", JSON.stringify(res.data))
            }
            return res.data;
        })
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

                <NavLink to='/ms' ><input type="submit" value="Войти"/></NavLink>
            </form>
          <NavLink to='/ms' type="submit"> Войти</NavLink>
          <NavLink to='/registration'>Зарегистрироваться</NavLink>

        </div>

      </div>
    )
  }






