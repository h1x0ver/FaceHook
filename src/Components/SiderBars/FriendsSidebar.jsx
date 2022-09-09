import React from 'react';
import './FriendsSidebar.css'
import RightbarRow from "./RightbarRow";
import Group from "@material-ui/icons/Group";
import {useNavigate} from "react-router-dom";



const FriendsSidebar = () => {
    const navigate = useNavigate()
    return (
        <div className='friendsSidebar mt-3'>
            <RightbarRow
                src={Group}
                title='Main'
            />
            <RightbarRow
                src={Group}
                title='Friend Reques'
            />
            <RightbarRow
                src={Group}
                title='All Friends'
            />

        </div>
    );
};

export default FriendsSidebar;