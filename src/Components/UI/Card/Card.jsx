import React from 'react';
import './Card.css'
import {Avatar} from "@material-ui/core";

const Card = ({userImage, username, firstanme, lastname}) => {


    return (
        <div className="card">
            <div className="card-border-top">
            </div>
            <div className="img">
                {userImage && <Avatar src={userImage}/>}
            </div>
            <span>{username}</span>
            <p className="job">{firstanme} {lastname}</p>
            <button> Click
            </button>
        </div>

    );
};

export default Card;