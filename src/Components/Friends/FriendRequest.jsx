import React from 'react';
import '../../Assets/Style/Friend.css'
import axios from "axios";

const FriendRequest = ({imgSrc, username,id}) => {

    const acceptFriend = (x) => {
        const token = JSON.parse(localStorage.getItem('Utoken'))
        fetch(`https://localhost:44347/api/Friend/acceptFriend/${x}`, {
            method: "POST",
            headers:{
                Authorization:"Bearer "+token
            },
        })
    }
    return (
        <div className='friend-req'>
            <div className="card">
                <div className='card-image'>
                    {imgSrc!==null?(
                        <img src={imgSrc} className="card-img-top" alt="gg"/>

                    ):(<h1>salam</h1>)}
                </div>
                <div className='card__b'>
                    <h3>{username}</h3>
                </div>
                <div className='card-footer acceps'>
                    <button type='button' onClick={()=>acceptFriend(id)}>Accept friends</button>
                </div>
            </div>
        </div>
    );
};

export default FriendRequest;