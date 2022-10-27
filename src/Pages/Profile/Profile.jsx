import React, {useEffect, useState} from 'react';
import ProfileSidebar from "../../Components/SiderBars/ProfileSidebar";
import '../../Assets/Style/Profile.css'
import UserSlider from "../../Components/Profile/UserSlider";
import Post from "../../Components/Feed/Post";
import ProfileImage from "../../Components/Profile/ProfileImage";
import ProfileInfo from "../../Components/Profile/ProfileInfo";
import ProfileDataInfo from "../../Components/Profile/ProfileDataInfo";
import axios from "axios";
import {useParams} from "react-router-dom";

const Profile = () => {

    const [user, setUser] = useState({})
    const {id} = useParams()
    const [faster, setFaster] = useState(0)

    useEffect(()=>{
        let token = JSON.parse(localStorage.getItem('Utoken'))
        axios.get(`https://localhost:44347/api/User/userProfile/${id}`,{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                Authorization: "Bearer " + token
            }
        }).then(resp => setUser(resp.data))
    },[faster])
    console.log(user)

    return (
        <div className="container-fluid bg__home">
            <div className="row">
                <div className="col-lg-2 leftSideBarWrapper">
                    <ProfileSidebar/>
                </div>
                <div className="col-lg-10 feed__wrapper">
                    <div className="user__info">
                        <div>
                            <div className="main-body">
                                <div className="row gutters-sm">
                                    {
                                        user&&(
                                            <div className='d-flex'>
                                                <ProfileImage
                                                    setUser={setUser}
                                                    setFaster={setFaster}
                                                    faster={faster}
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
                            </div>
                        </div>
                        <h3>Add Friends</h3>
                        <hr/>
                        <UserSlider/>
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