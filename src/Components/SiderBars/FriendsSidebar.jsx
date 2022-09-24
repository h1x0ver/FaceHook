import React from 'react';
import './FriendsSidebar.css'
import RightbarRow from "./RightbarRow";
import Group from "@material-ui/icons/Group";
import {useNavigate} from "react-router-dom";



const FriendsSidebar = () => {
    const navigate = useNavigate()
    return (
        <div className='friendsSidebar mt-3'>
            <ul>
                <li onClick={() => navigate('/friends')}>
                    <RightbarRow src={Group} title='Main'/>
                </li>
                <li onClick={() => navigate('/friendrequest')}>
                    <RightbarRow src={Group} title='Friend Reques'/>
                </li>
                <li>
                    <RightbarRow src={Group} title='All Friends'/>
                </li>
            </ul>


        </div>
    );
};

export default FriendsSidebar;