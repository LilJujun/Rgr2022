import axios from 'axios';
import React, { Component, useState } from 'react';
import s from './Profile.module.css';
import authHeader from '../../auth';


    // const handleSubmit = (event) => {
    //   event.preventDefault()
    //   const formData = new FormData();
    //   formData.append("selectedFile", selectedFile);
    //   try {
    //     const response =axios.post({
    //       url: "/api/upload/file",
    //       data: formData,
    //       headers: { "Content-Type": "multipart/form-data" },
    //     });
    //   } catch(error) {
    //     console.log(error)
    //   }
    // }
  
    // const handleFileSelect = (event) => {
    //   setSelectedFile(event.target.files[0])
    // }

const user = JSON.parse(localStorage.getItem("user"))
const Profile = () => {
  const formData = new FormData();
    const [avatar, setAvatar] = useState(null);
    let [adder, setAdder] = useState(false);

    let addPhoto = (e) => {
      //console.log(e.target.files[0])
      setAvatar(
          e.target.files[0]
      )
      formData.append('mainimage', e.target.files[0]);

      console.log(avatar)
      
    
      console.log(formData.get('mainimage'))
      axios({
          method: "post",
          url: `http://localhost:8080/${user.id}/image`,
          data: formData,
          withCredentials: true,
          headers: {"Content-Type": "multipart/form-data"},
      })
          .then(function (response) {
              //handle success
              setAdder(true);
          })
          .catch(function (response) {
              setAdder(false);
              console.log(response);
          });
  }

  function send() {
   
     let resp = axios({
        method: "post",
        url: `http://localhost:8080/${user.id}/image`,
        data: formData,
        withCredentials: true,
        headers: {"Content-Type": "multipart/form-data"},
    })
        .then( (response) =>{
            //handle success
           if (response.status === 200){setAdder(true)}
            console.log("Success")
            return response.data
        });

}
    return (

        <div className={s.content}>
            <div className={s.profile}>
                <label>Профиль</label>

            </div>

            <div>
                

                    <div >
                          Фото
                          <input id="filer" type='file' onChange={e => { addPhoto(e)}}/>

                    </div>


                    <div className={s.textField}>
                        <label className={s.textField__label} for="username">Имя</label>
                        <input className={s.textField__input} type="text" name="username" id="username" value={user.username} disabled></input>
                        
                    </div>
                    <div className={s.textField}>
                        <label className={s.textField__label}>@mail</label>
                        <input className={s.textField__input} type="text" name="email" id="email" value={user.email} disabled></input>

                    </div>

                    <div className={s.textField}>
                        <label className={s.textField__label}>Статус</label>
                        <input className={s.textField__input} type="text" name="status" id="status" value={user.status}></input>
                    </div>
                

            </div>


        </div>

    );

}
export default Profile;