import React from 'react';
import "./UserCard.css";
const UserCard = ({firstname, lastname, userimagesrc, id}) => {
    //delete friend
    const deleteFriend = (e) => {
        const  token = JSON.parse(localStorage.getItem('Utoken'))
        fetch(`https://localhost:44347/api/Friend/deleteFriend/${e}`,{
            method: "PUT",
            headers:{
                Authorization:"Bearer "+token
            },
        })


    }

    return (
        <div className="card">
            <div className="card-image">
                {userimagesrc!=="https://localhost:44347/img/null"?(
                    <img src={userimagesrc} className="card-img-top" alt="gg"/>

                ):(<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt=""/>)}
            </div>
            <div className="card-body d-flex justify-content-center">
                <h5 className="card-title">{firstname} {lastname}</h5>
            </div>
            <div className="card-button d-flex">
                <button type="button" className="btn ml-5 " onClick={()=>deleteFriend(id)}>Delete Friend</button>
            </div>
        </div>
    );
};

export default UserCard;