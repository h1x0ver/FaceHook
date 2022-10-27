import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import '../../Components/Profile/UserInfo.css'
import ChangePhoto from "../UI/Modal/ChangePhoto";

const ProfileImage = ({imageSrc,setFaster,faster}) => {
    const [post, setPost] = useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <div className="col-md-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src={imageSrc} alt="Admin"
                             className="rounded-circle" width="150"/>
                        <div className="mt-3">
                            <button  className="edit-btn" onClick={()=>handleOpen(setOpen)}>
                                Change Photo
                            </button>
                            <ChangePhoto
                                open={open}
                                setOpen={setOpen}
                                setPost={setPost}
                                setFaster={setFaster}
                                faster={faster}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileImage;