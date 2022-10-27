import React from 'react';
import './Chat.css'

const ChatNav = () => {
    return (
        <div className="col-lg-12 nav">
            <a data-toggle="modal" data-target="#view_info">
                <img className='nav-img' src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
            </a>
            <div className="chat-about">
                <h6 className="m-b-0 username">Huseyn Aliyev</h6>
            </div>
        </div>
    );
};

export default ChatNav;