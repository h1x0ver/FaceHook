import React from 'react';
import './Card.css'

const Card = ({userimage,username,position,posts,followers,following,}) => {
    return (
        <div className='custom__card'>
            <div className="img__box">
                <img src={userimage} alt=""/>
            </div>
            <div className="content">
                <div className="details">
                    <h2>{username}</h2>
                    <span>{position}</span>
                    <div className='data'>
                        <h3>{posts}<br/><span>Posts</span></h3>
                        <h3>{followers}<br/><span>Followers</span></h3>
                        <h3>{following}<br/><span>Following</span></h3>
                    </div>
                    <div className="action__btn">
                        <button>Follow</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;