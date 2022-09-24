import React from 'react';
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import Group from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat';
import Save from "@material-ui/icons/Bookmark";
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
    const route = useNavigate()

    return (
        <div className={'sidebar'}>
            <ul>
                <li onClick={()=> route('/')}>
                    <SidebarRow
                        src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                        title='Huseyn Quliyev'
                    />
                </li>
                <li  onClick={()=> route('/friends')}>
                    <SidebarRow
                        Icon={Group}
                        title='Add friends'
                    />
                </li>
                <li  onClick={()=> route('/chat')}>
                    <SidebarRow
                        Icon={ChatIcon}
                        title='Messanger'
                    />
                </li>
                <li  onClick={()=> route('/savedpost')}>
                    <SidebarRow
                        Icon={Save}
                        title='Saved Post'
                    />
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;