import React from 'react';
import "./UserCard.css";

const UserCard = ({firstname, lastname, userimagesrc}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={userimagesrc} className="card-img-top" alt="gg"/>
            </div>
            <div className="card-body d-flex justify-content-center">
                <h5 className="card-title">{firstname} {lastname}</h5>
            </div>
            <div className="card-button">
                <button type="button" className="btn">Add Friends</button>
            </div>
        </div>
    );
};

export default UserCard;