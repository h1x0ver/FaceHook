import React from 'react';
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import Group from '@material-ui/icons/Group';
import {useNavigate} from "react-router-dom";
import {ChangeHistory, ChangeHistorySharp, Home, SettingsApplicationsOutlined} from "@material-ui/icons";

const Sidebar = () => {
    const route = useNavigate()

    return (
        <div className={'sidebar'} style={{height:"100vh", backgroundColor:"white"}}>
            <ul>
                <li onClick={() => route('/profile')}>
                    <SidebarRow
                        src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                        title='Profile'
                    />
                </li>

                <li onClick={() => route('/chat')}>
                    <SidebarRow
                        Icon={ChangeHistory}
                        title='Change-Password'
                    />

                </li>
                <li onClick={() => route('/savedpost')}>
                    <SidebarRow
                        Icon={ChangeHistorySharp}
                        title='Change-Profile-Data'
                    />

                </li>
                <hr/>
                <div style={{marginTop: "50px"}}>

                </div>
                <li onClick={() => route('/')}>
                    <SidebarRow
                        Icon={Home}
                        title='Home-Page'
                    />
                </li>


            </ul>
        </div>
    );
};

export default Sidebar;