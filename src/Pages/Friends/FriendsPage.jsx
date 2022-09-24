import React from 'react';
import FriendsSidebar from "../../Components/SiderBars/FriendsSidebar";
import '../../Assets/Style/Friend.css'
import FriendsCard from "../../Components/Friends/FriendsCard";

const FriendsPage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div style={{marginTop: '30px'}} className="friend__sidbar col-2">
                    <FriendsSidebar/>
                </div>
                <FriendsCard/>
            </div>
        </div>
    );
};

export default FriendsPage;