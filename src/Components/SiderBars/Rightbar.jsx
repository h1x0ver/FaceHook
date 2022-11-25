import React, {useEffect, useState} from 'react';
import './Rightsidebar.css'
import RightbarRow from "./RightbarRow";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Rightbar = () => {
    const navigate = useNavigate()
    const [users,setUsers] = useState([])
    useEffect(()=>
    {
        let token = JSON.parse(localStorage.getItem("Utoken"))
        axios.get(`https://localhost:44347/api/Friend/getAllFriend`,
            {
                headers:{
                    Authorization:"Bearer "+token
                }
            })

            .then(resp=> setUsers(resp.data))
    },[])

    const handleDetails = (x) => {
        navigate(`/user/${x}`)
    }

    return (
        <div className='rightsidebar mt-2'>

            {
                users&&users.map(e=>
                {
                    return(
                      <div onClick={() => handleDetails(e.id)}>
                          <RightbarRow
                              src={`https://localhost:44347/img/${e.profileImage}`}
                              title={`${e.firstname} ${e.lastname}`}
                          />
                      </div>
                    )
                })
            }

        </div>
    );
};

export default Rightbar;