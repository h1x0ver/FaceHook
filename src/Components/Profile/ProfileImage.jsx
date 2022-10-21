import React from 'react';
import {useNavigate} from "react-router-dom";

const ProfileImage = ({imageSrc}) => {
    const route = useNavigate()
    return (
        <div className="col-md-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src={imageSrc} alt="Admin"
                             className="rounded-circle" width="150"/>
                        <div className="mt-3">
                            <button onClick={()=> route('/profileSettings')} className="edit-btn">Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileImage;