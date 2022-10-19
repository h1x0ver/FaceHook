import React from 'react';
import '../../Assets/Style/Friend.css'

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
        <div className="friend__reques">
            <img src={imgSrc} alt="gg"/>
            <h3>{username}</h3>
            <button type='button' onClick={()=>acceptFriend(id)}>accept friends</button>
            <button type='button'>reject friend</button>
        </div>
    );
};

export default FriendRequest;