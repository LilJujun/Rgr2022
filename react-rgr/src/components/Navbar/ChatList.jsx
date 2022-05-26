import axios from "axios";
import React, { useState, useEffect } from "react";
import authHeader from "../../auth";
import ChatForm from "./ChatForm";





const ChatList = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [chat, setChat] = useState([])




    useEffect(() => {
        console.log(user.id)
    	axios.get("http://localhost:8080/ms/test",{headers: authHeader()}).then((resp) => {
            
                
    			const chat = resp.data;
    			setChat(chat)

    		}).catch(function(error) {
                alert(error)
            })
    }, [setChat]);


    // useEffect(() => {
    //     alert(authHeader())
    //     axios.get("http://localhost:8080/ms/test", { headers: authHeader() }).then((resp) =>
    //         alert(resp.data)
    //     ).catch(function (error) {
    //         alert(error)
    //     })

    // }
    // )




    return (
        <div>
            <a>Chats</a>
            {chat.map(ch =>
                <ChatForm props={ch}  />

            )}
            <button>Rerol</button>

        </div>
    )

}
export default ChatList;