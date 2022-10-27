import React, {useEffect, useState} from 'react';
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import ChatIcon from '@material-ui/icons/Chat';
import Save from "@material-ui/icons/Bookmark";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {Help, SettingsApplicationsOutlined} from "@material-ui/icons";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import {decodeToken} from "react-jwt";

const Sidebar = () => {
    const route = useNavigate()


    let tokenByCurrent = JSON.parse(localStorage.getItem("Utoken"))
    const decodettoken = decodeToken(tokenByCurrent);

    return (
        <div className={'sidebar'}>
            <ul>
                <li onClick={() => route('/')}>
                    <SidebarRow
                        src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                        title='Huseyn Quliyev'
                    />
                </li>

                <li onClick={() => route('/messenger')}>
                    <SidebarRow
                        Icon={ChatIcon}
                        title='Messenger'
                    />

                </li>
                <li onClick={() => route('/savedpost')}>
                    <SidebarRow
                        Icon={Save}
                        title='Saved Post'
                    />

                </li>
                <li onClick={() => route('/add-friends')}>
                    <SidebarRow
                        Icon={PersonAddAltIcon}
                        title='Add friends'
                    />
                </li>
                <li onClick={() => route('/requests')}>
                    <SidebarRow
                        Icon={ContactMailIcon}
                        title='Friend Request'
                    />
                </li>
                <li onClick={() => route('/friends')}>
                    <SidebarRow
                        Icon={SupervisedUserCircleIcon}
                        title='All Friends'
                    />
                </li>
                <li onClick={()=> route(`/profile/${decodettoken.Id}`)}>
                    <SidebarRow
                        Icon={SettingsApplicationsOutlined}
                        title='Profile'
                    />
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;