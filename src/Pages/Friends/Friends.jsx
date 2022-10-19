import React, {useEffect, useState} from 'react';
import '../../Assets/Style/Friend.css'
import Sidebar from "../../Components/SiderBars/Sidebar";
import axios from "axios";
import FriendCard from "../../Components/Cards/FriendCard";


const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Utoken"))
        axios.get(`https://localhost:44347/api/Friend/getAllFriend`,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            .then(resp => setFriends(resp.data))
    }, [])
    console.log(friends)

    return (
        <div className="container-fluid bg__home">
            <div className="row">
                <div className="col-lg-3 leftSideBarWrapper">
                    <Sidebar/>
                </div>
                <div className="col-lg-9 user-friends">
                    <input type="text" className='friens__search' placeholder='serach'/>
                    <div className="row">
                        {friends && friends.map(u => <div className="col-lg-4 col-md-6">
                            <FriendCard
                                key={u.key}
                                userimagesrc={`https://localhost:44347/img/${u.profileImage}`}
                                firstname={u.firstname}
                                lastname={u.lastname}
                                id={u.id}

                            />
                        </div>)}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Friends;