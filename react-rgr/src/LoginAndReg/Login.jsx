import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Login.module.css";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className={s.back} >

        <div className={s.loginPage}>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Логин" id="log"  onChange={this.handleChange}></input>
            <input type="password" placeholder="Пароль" id="par" value={this.state.value} onChange={this.handleChange}></input>
          <input type="submit" value="Отправить" />
          </form>
          <NavLink to='/ms' > Войти</NavLink>
          <NavLink to='/reg'>Зарегистрироваться</NavLink>

        </div>

      </div>
    )
  }



}
export default Login;