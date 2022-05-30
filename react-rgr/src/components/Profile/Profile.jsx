import axios from 'axios';
import React, { Component } from 'react';
import s from './Profile.module.css';
import authHeader from '../../auth';

const user = JSON.parse(localStorage.getItem("user"))
class Profile extends Component {
       
    state ={
        nickname:user.username,
        email: user.email,
        status:user.status
    }


    render() {
        return (
            
            <div className={s.content}>
                <div className={s.profile}>
                    <label>Профиль</label>

                </div>

                <div>
                    <form>
                    <div className={s.textField}>
                        <label className={s.textField__label} for="username">Имя</label>
                        <input className={s.textField__input} type="text" name="username" id="username"  placeholder={this.state.nickname} ></input>
                        <button type="button"  onClick={()=> {
                            <input type="text" name="username" id="username"></input>

                        }}> Изменить</button>
                    </div>
                    <div className={s.textField}>
                        <label className={s.textField__label}>@mail</label>
                        <input className={s.textField__input} type="text" name="email" id="email"  value={this.state.email} disabled></input>
                        
                    </div>

                    <div className={s.textField}>
                        <label className={s.textField__label}>Статус</label>
                        <input className={s.textField__input} type="text" name="status" id="status" value={this.state.status}></input>
                    </div>
                    </form>

                </div>


            </div>

        );
    }
}
export default Profile;