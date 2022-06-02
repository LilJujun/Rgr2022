import React from "react";
import { NavLink } from "react-router-dom";


const Error =()=>{


    return(
        <div>
            <p>Произошли технические шоколадки</p>
            <p>Котики работают над исправлением</p>
            <NavLink to='/'>Вернуться на главную</NavLink>

        </div>
    )
}
export default Error;