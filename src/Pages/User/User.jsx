import React, {useEffect, useState} from 'react';
import Sidebar from "../../Components/SiderBars/Sidebar";
import '../../Assets/Style/User.css'
import ProfileImage from "../../Components/Profile/ProfileImage";
import ProfileInfo from "../../Components/Profile/ProfileInfo";
import ProfileDataInfo from "../../Components/Profile/ProfileDataInfo";
import {useParams} from "react-router-dom";
import axios from "axios";
import '../../Assets/Style/Profile.css'
import Post from "../../Components/Feed/Post";

const User = () => {
    const [user, setUser] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        let token = JSON.parse(localStorage.getItem('Utoken'))
        axios.get(`https://localhost:44347/api/User/userProfile/${id}`,{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                Authorization: "Bearer " + token
            }
        }).then(resp => setUser(resp.data))
    },[])
    console.log(user)

    return (
        <div className="container-fluid bg__home">
            <div className="row">
                <div className="col-lg-2 leftSideBarWrapper">
                    <Sidebar/>
                </div>
                <div className="col-lg-10 feed__wrapper">
                    <div className="user__info">
                        <div>
                            <div className="main-body">
                                <div className="row gutters-sm">
                                    {
                                        user&&(
                                            <div className='d-flex justify-content-center'>
                                                <ProfileImage
                                                    imageSrc={`https://localhost:44347/img/${user.profileImage}`}
                                                />
                                                <ProfileInfo
                                                    firstname={user.firstname}
                                                    lastname={user.lastname}
                                                    username={user.userName}
                                                    email={user.email}
                                                />
                                                <ProfileDataInfo
                                                    friendCount={user.friendCount}
                                                    postCount={user.postCount}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                                <h2 className='d-flex justify-content-center'>User Posts</h2>
                                <hr/>
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
            </div>
        </div>
    );
};

export default User;