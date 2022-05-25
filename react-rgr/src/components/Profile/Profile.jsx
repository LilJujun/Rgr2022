import React from 'react';
import s from './Profile.module.css';


const Profile = () => {

    return (
        <div className={s.content}>
            <div>
                <label>Профиль</label>
                </div>
            <div>
            <img src="sanya.jpg"/>
            <div className={s.textField}>
                <label className={s.textField__label}>Имя</label>
                <input className={s.textField__input} type="text" name="username" id="username" placeholder="Username"></input>
            </div>
            <div className={s.textField}>
                <label className={s.textField__label}>@mail</label>
                <input className={s.textField__input} type="text" name="email" id="email" placeholder="Email" readOnly></input>
            </div>

            <div className={s.textField}>
                <label className={s.textField__label}>Статус</label>
                <input className={s.textField__input} type="text" name="status" id="status" placeholder="status"></input>
            </div>

            </div>


        </div>

    );
}
export default Profile;