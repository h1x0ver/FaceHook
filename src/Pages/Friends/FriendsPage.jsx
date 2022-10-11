import React from 'react';
import FriendsSidebar from "../../Components/SiderBars/FriendsSidebar";
import '../../Assets/Style/Friend.css'
import Card from "../../Components/UI/Card/Card";

const FriendsPage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div style={{marginTop: '30px'}} className="friend__sidbar col-2">
                    <FriendsSidebar/>
                </div>
                <div className="row">
                    <div className="d-flex col-lg-10">
                        <Card
                            userimage="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                            firstname='Huseyn'
                            lastname='Guliyev'


                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsPage;