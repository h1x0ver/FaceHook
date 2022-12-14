import React from 'react';

const UserMessage = ({message}) => {
    return (
        <li className="clearfix">
            <div className="message-data text-right">
                <span className="message-data-time">10:10 AM, Today</span>
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"/>
            </div>
            <div className="message other-message float-right">
                <p>{message}</p>
            </div>
        </li>
    );
};

export default UserMessage;