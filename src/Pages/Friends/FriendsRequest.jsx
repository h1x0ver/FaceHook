import React from 'react';
import '../../Components/SiderBars/FriendsSidebar.css'
import '../../Assets/Style/Friend.css'

import FriendsSidebar from "../../Components/SiderBars/FriendsSidebar";
import AccessFriendCard from "../../Components/Friends/AccessFriendCard";


const FriendsRequest = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div style={{marginTop: '20px'}} className="friend__sidbar col-2">
                    <FriendsSidebar/>
                </div>
                <div className="row col-10">
                    <div className='access__friend__card'>
                        <AccessFriendCard/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FriendsRequest;