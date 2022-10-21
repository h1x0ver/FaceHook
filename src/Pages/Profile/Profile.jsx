import React, {useState} from 'react';
import ProfileSidebar from "../../Components/SiderBars/ProfileSidebar";
import '../../Assets/Style/Profile.css'
import UserSlider from "../../Components/Profile/UserSlider";
import UserInfo from "../../Components/Profile/UserInfo";
import Post from "../../Components/Feed/Post";


const Profile = () => {
    return (
        <div className="container-fluid bg__home">
            <div className="row">
                <div className="col-lg-2 leftSideBarWrapper">
                    <ProfileSidebar/>
                </div>
                <div className="col-lg-10 feed__wrapper">
                    <div className="user__info">
                      <UserInfo/>
                        <h3>Add Friends</h3>
                        <hr/>
                        <UserSlider/>
                        <hr/>
                        <div className='createe'>
                            <h3>My Posts</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <Post
                                    image='https://wallpaperaccess.com/full/12313.jpg'
                                    message='Eltac, Huseyn Ureydi AYE'
                                    username='Huseyn'
                                />

                            </div>
                            <div className="col-lg-6 col-md-12">
                                <Post
                                    image='https://wallpaperaccess.com/full/12311.jpg'
                                    message='Eltac, Huseyn Ureydi AYE'
                                    username='Huseyn'
                                />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;