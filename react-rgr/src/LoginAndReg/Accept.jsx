import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Accept.module.css";



const Accept = () => {


    return (
        <div className={s.back}>
            <div className={s.acceptPage}>
                <form  className={s.onCentre}>
                    <p>Код подтверждения</p>
                        <input type="text"/>
                    <p><NavLink to="/ms"><input type="submit" value="Отправить" /> </NavLink></p>
                </form>
            </div>


        </div>
    )

}
export default Accept;