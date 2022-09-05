import React from 'react';
import UserRow from "./UserRow";
import "./RightSideBar.css"
const RightSideBar = () => {
    return (
        <div className='rightSideBar'>
            <p style={{marginTop: '20px'}}>active users list:</p>

            <UserRow
                src='data:image/jpeg;base64,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'
                username='BellGates'
            />
            <UserRow
                src='https://variety.com/wp-content/uploads/2021/06/Facebook-Mark-Zuckerberg.jpg'
                username='Mark'
            />
            <UserRow
                src='https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg'
                username='Jeff'
            />
        </div>
    );
};

export default RightSideBar;