import React from 'react';
import Sidebar from "../../Components/SiderBars/Sidebar";
import Rightbar from "../../Components/SiderBars/Rightbar";
import '../../Assets/Style/User.css'
import UserInfo from "../../Components/Profile/UserInfo";
import Post from "../../Components/Feed/Post";

const User = () => {
    return (
        <div className="container-fluid bg__home">
            <div className="row">
                <div className="col-lg-2 leftSideBarWrapper">
                    <Sidebar/>
                </div>
                <div className="col-lg-8 feed__wrapper">
                    <div className="user__info">
                        <UserInfo/>
                        <hr/>
                        <div className='createe'>
                            <h3>Posts</h3>
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

export default User;