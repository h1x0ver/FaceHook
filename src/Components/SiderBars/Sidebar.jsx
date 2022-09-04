import React from 'react';
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import Group from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat';
import Save from "@material-ui/icons/Bookmark";

const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <SidebarRow
                src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                title='Huseyn Quliyev'
            />
            <SidebarRow
                Icon={Group}
                title='Add friends'
            />
            <SidebarRow
                Icon={ChatIcon}
                title='Messanger'
            />
            <SidebarRow
                Icon={Save}
                title='Saved Post'
            />

        </div>
    );
};

export default Sidebar;