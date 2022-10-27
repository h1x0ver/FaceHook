import React, {useEffect, useState} from 'react';
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import SidebarSearch from "./SidebarSearch";
import {setChatUser} from '../../Redux/chatSlice'
import {useDispatch, useSelector} from "react-redux";
import {decodeToken} from "react-jwt";

const MessangerSidebar = () => {
    const route = useNavigate();
    const { username } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [users, setUsers] = useState([]);
    const { activeUser }  = useSelector(state => state.chat);

    let token = JSON.parse(localStorage.getItem('Utoken'))
    const decodettoken = decodeToken(token);

    useEffect(() => {
        axios.get(`https://localhost:44347/api/User`, {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + token
            },
        }).then(resp => {
            setUsers(resp.data.filter(user => decodettoken.Id != user.id));
            if (!username) return;
            dispatch(setChatUser(resp.data.find(user => user.username == username)));
        });
    }, [])

    const handleActiveChatUser = (user) => {
        dispatch(setChatUser(user));
        route(`/messenger/${user.username}`);
    }

    return (
       <div>
           <div className={'msidebar col-2'}>
               <ul>
                   {
                       users && users.map(e => {
                           return(
                               <li className={`${activeUser.id == e.id ? 'active-chat-user' : null}`} onClick={() => handleActiveChatUser(e)}>
                                   <SidebarRow
                                       src={`https://localhost:44347/img/${e.profileImage}`}
                                       title={`${e.firstname} ${e.lastname}`}
                                   />
                               </li>
                           )
                       })
                   }
               </ul>
           </div>
       </div>
    );
};

export default MessangerSidebar;