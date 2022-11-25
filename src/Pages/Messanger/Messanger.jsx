import React, {useEffect, useState} from 'react';
import '../../Assets/Style/Chat.css'
import Sidebar from "../../Components/SiderBars/MessangerSidebar";
import MyMessage from "../../Components/Messanger/MyMessage";
import UserMessage from "../../Components/Messanger/UserMessage";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setMessages} from '../../Redux/chatSlice';
import {decodeToken} from "react-jwt";

const Messanger = () => {
    const [userMessage, setUserMessage] = useState("")
    const {activeUser, messages} = useSelector(state => state.chat);
    const dispatch = useDispatch();
    let token = JSON.parse(localStorage.getItem('Utoken'))
    const decodettoken = decodeToken(token);


    useEffect(() => {
        axios.get(`https://localhost:44347/api/Chat/${activeUser.username}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(({data}) => dispatch(setMessages(data.reverse())))


    }, [activeUser])

    const sendMessage = () => {
        const messageData = {
            "content": userMessage,
            "sendUserId": activeUser.id,
        };

        axios.post(`https://localhost:44347/api/Chat`, messageData, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(({data}) => {
            dispatch(setMessages([...messages, data]))
            setUserMessage(" ")
        })
    };
    return (
        <div className="container-fluid bg__home">
            <div className="row">
                <div className="col-lg-2 leftSideBarWrapper">
                    <Sidebar/>
                </div>
                <div className="col-lg-10 feed__wrapper">
                    {
                        activeUser &&
                        <>
                            <div className='chat'>
                                <div className="chat-history">
                                    <ul className="m-b-0">
                                        {
                                            messages.map(message => {
                                                return (
                                                    <div>
                                                        {
                                                            message.sendUser.id == decodettoken.Id
                                                                ? <MyMessage
                                                                    message={message.content}
                                                                />
                                                                : <UserMessage
                                                                    message={message.content}
                                                                />
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="chat__input">
                                <input type="text" onChange={(e) => setUserMessage(e.target.value)}/>
                                <button className='send__btn' onClick={() => sendMessage()}>Send</button>
                            </div>
                        </>
                    }
                    {!activeUser && (
                        <div className={'col-10 d-flex w-100 justify-content-center'}>
                            <img style={{width: "100%"}}
                                 src="https://cdn.dribbble.com/users/99954/screenshots/6669081/no_messages_blank_state.png"
                                 alt=""
/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Messanger;