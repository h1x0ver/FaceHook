import React from 'react';
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import CodeOffIcon from '@mui/icons-material/CodeOff';
import {useNavigate} from "react-router-dom";
import {ChangeHistorySharp, Home} from "@material-ui/icons";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Sidebar = () => {
    const route = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem("Utoken")
        route("/login")
    }

    return (
        <div className={'sidebar'} style={{height:"100vh", backgroundColor:"white"}}>
            <ul>
                <li onClick={() => route('/profile')}>
                    <SidebarRow
                        src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                        title='Profile'
                    />
                </li>

                <li onClick={() => route('/reset')}>
                    <SidebarRow
                        Icon={ManageAccountsIcon}
                        title='Change-Password'
                    />

                </li>
                <li onClick={() => route('/profilesettings')}>
                    <SidebarRow
                        Icon={ManageAccountsIcon}
                        title='Change-Profile-Data'
                    />

                </li>
                <hr/>


                <li onClick={() => route('/')}>
                    <SidebarRow
                        Icon={Home}
                        title='Home-Page'
                    />
                </li>
                <hr/>

                <li onClick={handleLogOut}>
                    <SidebarRow
                        Icon={CodeOffIcon}
                        title='Logout'
                    />

                </li>


            </ul>
        </div>
    );
};

export default Sidebar;