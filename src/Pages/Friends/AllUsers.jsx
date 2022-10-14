import React, {useEffect, useState} from 'react';
import '../../Assets/Style/Friend.css'
import Sidebar from "../../Components/SiderBars/Sidebar";
import UserCard from "../../Components/Cards/UserCard";
import axios from "axios";


const AllUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Utoken"))
        axios.get(`https://localhost:44347/api/User`,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            .then(resp => setUsers(resp.data))
    }, [])
    console.log(users)

    return (
        <div className="container-fluid bg__home">
            <div className="row">
                <div className="col-lg-3 leftSideBarWrapper">
                    <Sidebar/>
                </div>
                <div className="col-lg-9 user-friends">
                    <div className="row">
                        {users && users.map(u => <div className="col-lg-4 col-md-6">
                            <UserCard
                                userimagesrc={`https://localhost:44347/img/${u.profileImage}`}
                                firstname={u.firstname}
                                lastname={u.lastname}

                            />
                        </div>)}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AllUsers;