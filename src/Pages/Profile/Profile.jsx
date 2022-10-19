import React, {useState} from 'react';
import ProfileSidebar from "../../Components/SiderBars/ProfileSidebar";
import '../../Assets/Style/Profile.css'
import UserSlider from "../../Components/Profile/UserSlider";
import CreatePost from "../../Components/Feed/CreatePost";
import Modal from "../../Components/UI/Modal/Modal";
import ProfileSettings from "./ProfileSettings";


const Profile = () => {
    const [post, setPost] = useState([])
    const [open, setOpen] = useState(false);
    return (
        <div className="container-fluid bg__home">
            <div className="row">
                <div className="col-lg-2 leftSideBarWrapper">
                    <ProfileSidebar/>
                </div>
                <div className="col-lg-10 feed__wrapper">
                    <div className="user__info">
                        <div className="image-container">
                            <img
                                src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                                alt="Farid-Junior"/>
                        </div>
                       <div className="usr-inf">
                           <div className="f-l">
                               <h4 className='f-l'>Huseyn Quliyev</h4>
                           </div>
                           <div className="e-m">
                               <p className='f-l'>huseynmg@code.edu.az</p>
                           </div>
                           <div className="f-l">
                               <div className="f-l btn" onClick={()=> setOpen(true)}>Create History</div>
                           </div>
                       </div>

                        <h3>Add Friends</h3>
                        <hr/>
                        <UserSlider/>
                        <hr/>
                        <div className='createe'>
                            <h3>Create Post</h3>
                        </div>
                        <div className='create__post'>
                            <CreatePost setOpen={setOpen}/>
                        </div>
                        <Modal
                            open={open}
                            setOpen={setOpen}
                            setPost={setPost}
                        />



                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;