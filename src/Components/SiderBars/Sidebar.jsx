import React from 'react';
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import Group from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat';
import Save from "@material-ui/icons/Bookmark";
import {useNavigate} from "react-router-dom";
import {SettingsApplicationsOutlined} from "@material-ui/icons";

const Sidebar = () => {
    const route = useNavigate()

    return (
        <div className={'sidebar'}>
            <ul>
                <li onClick={() => route('/')}>
                    <SidebarRow
                        src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                        title='Huseyn Quliyev'
                    />
                </li>

                <li onClick={() => route('/chat')}>
                    <SidebarRow
                        Icon={ChatIcon}
                        title='Messanger'
                    />

                </li>
                <li onClick={() => route('/savedpost')}>
                    <SidebarRow
                        Icon={Save}
                        title='Saved Post'
                    />

                </li>
                <hr/>
                <div style={{marginTop: "50px"}}>

                </div>
                <li onClick={() => route('/add-friends')}>
                    <SidebarRow
                        Icon={Group}
                        title='Add friends'
                    />
                </li>
                <li onClick={() => route('/requests')}>
                    <SidebarRow
                        Icon={Group}
                        title='Friend Request'
                    />
                </li>
                <li onClick={() => route('/friends')}>
                    <SidebarRow
                        Icon={Group}
                        title='All Friends'
                    />
                </li>
                <hr className='mt-5'/>
                <div style={{marginTop: "70px"}}>

                </div>
                <li onClick={() => route('/profile')}>
                    <SidebarRow
                        Icon={SettingsApplicationsOutlined}
                        title='settings'
                    />
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;