import axios from "axios";
import React, { useState, useEffect } from "react";
import authHeader from "../../auth";
import { NavLink } from "react-router-dom";
import { render } from "@testing-library/react";

    const ChatList = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        const [chat, setChat] = useState([])

        useEffect(() => {

            axios.get(`http://localhost:8080/ms/${user.id}/chats`, { headers: authHeader() }).then((resp) => {


                const chat = resp.data;
                setChat(chat)

            }).catch(function (error) {
                alert(error)
            })
        }, [setChat]);


        function ChatsList(props) {
            const chats = props.chat;
            
            const listChats = chats.sort((a, b) => a.id > b.id ? 1 : -1).map((ch) =>
            
            
                
                <li key={ch.id}><NavLink to={`/ms`} state={ch}       > {ch.name} </NavLink>
                </li>
            
            );
            
            return (
                <ul>{listChats}</ul>
            )
        }

        return (

            <div >
                <a>Chats</a>
                <div>
                    <ChatsList chat={chat} />

                </div>
                <div>

                </div>


            </div>
        )


    }
export default ChatList;