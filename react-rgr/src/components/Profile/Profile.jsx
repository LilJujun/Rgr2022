
import axios from 'axios';
import React, { Component } from 'react';
import s from './Profile.module.css';
import authHeader from '../../auth';

// state = {
//     selectedFile: null
// };

// onFileChange = event => {
//     this.setState({ selectedFile: event.target.files[0] });
// };
// onFileUpload = () => {

//     const formData = new FormData();

//     formData.append(
//         "myFile",
//         this.state.selectedFile,
//         this.state.selectedFile.name
//     );
//     // Details of the uploaded file
//     console.log(this.state.selectedFile);

//     axios.post("api/uploadfile", formData);
// };
// fileData = () => {
//     if (this.state.selectedFile) {
//         return (
//             <div>
//                 <h2>Детали:</h2>
//                 <p>Имя файла: {this.state.selectedFile.name}</p>
//                 <p>Тип файла: {this.state.selectedFile.type}</p>
//                 <p>
//                     Последнее изменение:{" "}
//                     {this.state.selectedFile.lastModifiedDate.toDateString()}
//                 </p>
//             </div>
//         );
//     } else {
//         return (
//             <div>
//                 <br />
//                 <h4>Выберите файл, прежде чем нажать кнопку загрузки</h4>
//             </div>
//         );
//     }
// };

// constructor(props) {
//     super(props);

//     this.state = {
//         photos: [],
//     };

//     this.uploadHandler = this.uploadHandler.bind(this);
// }

// uploadHandler(event) {
//     const data = new FormData();
//     data.append('file', event.target.files[0]);
//     axios.post('/upload', data)
//         .then((res) => {
//             this.setState({ photos: [res.data, ...this.state.photos] });
//         });
// }

class Profile extends Component {
    // constructor (){
    //     this.state ={
    //         nickname:"",
    //         email:"",
    //         status: ""
    //     };
    // }
    // axios.get("http://localhost:8080/ms/user/", {headers :authHeader()} ).then((response) =>{

    // })


    render() {
        return (
            <div className={s.content}>
                <div>
                    <label>Профиль</label>

                </div>

                <div>
                    <div>
                        {/* <input type="file" onChange={this.onFileChange} />
                        <button onClick={this.onFileUpload}>
                            Загрузить!
                        </button> */}
                        <div>
                            {/* <input type="file" name="file" onChange={this.uploadHandler} /> */}
                        </div>
                        {/* {this.state.photos.map(photos => (
                            <img src={`http://localhost:3000/profile/${photos.filename}`} />
                        ))} */}
                    </div>
                    {/* {this.fileData()} */}
                    <div className={s.textField}>
                        <label className={s.textField__label} for="username">Имя</label>
                        <input className={s.textField__input} type="text" name="username" id="username" placeholder="Nickname" value="itchief"></input>
                    </div>
                    <div className={s.textField}>
                        <label className={s.textField__label}>@mail</label>
                        <input className={s.textField__input} type="text" name="email" id="email" placeholder="Email" value="levrey8@mail.ru" readOnly></input>
                    </div>

                    <div className={s.textField}>
                        <label className={s.textField__label}>Статус</label>
                        <input className={s.textField__input} type="text" name="status" id="status" placeholder="status"></input>
                    </div>

                </div>


            </div>

        );
    }
}
export default Profile;