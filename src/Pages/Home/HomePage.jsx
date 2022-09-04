import React from 'react';
import Feed from "../../Components/Feed/Feed";
import Sidebar from "../../Components/SiderBars/Sidebar";

const HomePage = () => {
    return (
        <div className={'app__body'}>
            <div className="home__sidebar">
                <Sidebar/>
            </div>
            <div className="feed__body">
                <Feed/>
            </div>
            <div className="rightbar">

            </div>
        </div>
    );
};

export default HomePage;