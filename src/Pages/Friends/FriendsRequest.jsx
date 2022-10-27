import React, {useEffect, useState} from 'react';
import Sidebar from "../../Components/SiderBars/Sidebar";
import '../../Assets/Style/Friend.css'
import FriendRequest from "../../Components/Friends/FriendRequest";
import axios from "axios";
import Load from '../../Components/Loader/Loader'

const FriendsRequest = () => {
    const [request, setRequest] = useState([])
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Utoken"))
        axios.get(`https://localhost:44347/api/Friend/friendRequests`,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            .then(resp => setRequest(resp.data))
    }, [])

    return (
        <div className="container-fluid bg__home">
            <div className="row">
                <div className="col-lg-3 leftSideBarWrapper">
                    <Sidebar/>
                </div>
                {
                    request.length>0 ? request.map(e => {
                        return (
                            <div className="col-lg-9 user-friends">
                                <FriendRequest
                                    imgSrc={`https://localhost:44347/img/${e.profileImage}`}
                                    username={e.firstname}
                                    id={e.id}

                                />
                            </div>
                        )
                    }):<div className='laod'><Load/></div>
                }
            </div>
        </div>
    );
};

export default FriendsRequest;