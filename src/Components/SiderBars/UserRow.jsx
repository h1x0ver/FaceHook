import React from 'react';
import './UserRow.css'
import {Avatar} from "@material-ui/core";

const UserRow = ({src, username}) => {
    return (
        <div className='userRow'>
            {src && <Avatar src={src}/>}
            <h4>{username}</h4>
        </div>
    );
};

export default UserRow;