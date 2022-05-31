import axios from 'axios';
import React, { Component, useState } from 'react';
import s from './Profile.module.css';
import authHeader from '../../auth';

const user = JSON.parse(localStorage.getItem("user"))
const Profile = () => {
    const [avatar, setAvatar] = useState();

    // const avatarSelected = (e) => {
    //     let fileReader = new FileReader();
    //     fileReader.onload = () => {
    //         document.getElementById('img1').src = fileReader.result;
    //         console.log('updated');
    //     }

    //     fileReader.readAsDataURL(e.target.files[0]);
    //     const file = e.target.files[0];
    //     const formData = new FormData()
    //     formData.append('file', file)
    //     axios.put(`http://localhost:8080/users/${id}/avatar`, formData,
    //         {
    //             headers: 
    //                 authHeader()
                
    //         })
    // }

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/users/${id}/avatar`,
    //         {
    //             headers: 
    //                 authHeader()
                 
    //         }).then((resp) => {
    //             setAvatar(URL.createObjectURL(resp.data));
    //         });
    // }, [setAvatar]);


    return (

        <div className={s.content}>
            <div className={s.profile}>
                <label>Профиль</label>

            </div>

            <div>
                <form>

                    <div>
                        {/* <img className='userSize' id='img1' src={avatar}></img>
                        {
                            user.id == id ? (
                                <input type='file' className='AvatarLoad' onChange={avatarSelected}></input>
                            ) : (<></>)
                        } */}

                    </div>


                    <div className={s.textField}>
                        <label className={s.textField__label} for="username">Имя</label>
                        <input className={s.textField__input} type="text" name="username" id="username" placeholder={user.username} ></input>
                        <button type="button" onClick={() => {
                            <input type="text" name="username" id="username"></input>

                        }}> Изменить</button>
                    </div>
                    <div className={s.textField}>
                        <label className={s.textField__label}>@mail</label>
                        <input className={s.textField__input} type="text" name="email" id="email" value={user.email} disabled></input>

                    </div>

                    <div className={s.textField}>
                        <label className={s.textField__label}>Статус</label>
                        <input className={s.textField__input} type="text" name="status" id="status" value={user.status}></input>
                    </div>
                </form>

            </div>


        </div>

    );

}
export default Profile;