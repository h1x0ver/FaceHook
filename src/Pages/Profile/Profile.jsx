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
import Footer from "../../Components/Footer/Footer";

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
                                                    imageSrc={user.profileImage ?
                                                        `https://localhost:44347/img/${user.profileImage}`

                                                :
                                                `data:image/jpeg;base64,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`
                                                }
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


                </div>
                </div>
                <Footer/>

            </div>
        </div>
    );
};

export default Profile;