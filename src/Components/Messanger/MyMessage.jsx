import React from "react";

const MyMessage = ({message}) => {
    return (
        <li className="clearfix">
            <div className="message-data">
                <span className="message-data-time">10:15 AM, Today</span>
            </div>
            <div className="message my-message">
                <p>{message}</p>
            </div>
        </li>
    );
};

export default MyMessage;
