import React, {useEffect} from 'react';
import "./UserCard.css";
import axios from "axios";

const UserCard = ({firstname, lastname, userimagesrc, id}) => {
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('Utoken'))
        axios.get('https://localhost:44347/api/Friend/friendSuggestion', {
            headers: {
                Authorization: "Bearer " + token
            }
        })
    },[])
    const addFriend = (x) => {

        const token = JSON.parse(localStorage.getItem('Utoken'))
        fetch(`https://localhost:44347/api/Friend/addFriend/${x}`, {
            method: "POST",
            headers:{
                Authorization:"Bearer "+token
            },
        }).then(resp => resp.data)
    }
    return (
        <div className="card">
            <div className="card-image">
                {userimagesrc!=="https://localhost:44347/img/null"?(
                    <img src={userimagesrc} className="card-img-top" alt="gg"/>

                ):(<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" className='w-100 d-flex justify-content-center' alt=""/>)}
            </div>
            <div className="card-body d-flex justify-content-center">
                <h5 className="card-title">{firstname} {lastname}</h5>
            </div>
            <div className="card-button d-flex">
                <button type="button" className="btn" onClick={()=>addFriend(id)}>Add Friends</button>
            </div>
        </div>
    );
};

export default UserCard;