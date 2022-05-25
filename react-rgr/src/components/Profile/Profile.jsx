import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Profile.module.css';

const Profile = () => {

    return (
        <div className={s.content}>
            <div>
                <label>Профиль</label>
                </div>
            <div className={s.textField}>
            <img />
            <div>
                <label>Имя</label>
            </div>
            <div>
                <label>@mail</label>
            </div>

            <div>
                <label>Статус</label>
            </div>

            </div>


        </div>

    );
}
export default Profile;