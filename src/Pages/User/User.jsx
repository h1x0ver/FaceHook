import React, {useEffect, useState} from 'react';
import Sidebar from "../../Components/SiderBars/Sidebar";
import '../../Assets/Style/User.css'
import ProfileInfo from "../../Components/Profile/ProfileInfo";
import ProfileDataInfo from "../../Components/Profile/ProfileDataInfo";
import {useParams} from "react-router-dom";
import axios from "axios";
import '../../Assets/Style/Profile.css'

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
                                            <div className='d-flex align-items-center justify-content-center mt-5'>
                                               <div className='img__container'>
                                                   <img src={`https://localhost:44347/img/${user.profileImage}`} alt=""/>
                                               </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;