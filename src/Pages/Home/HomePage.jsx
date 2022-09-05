import React from 'react';
import Feed from "../../Components/Feed/Feed";
import Sidebar from "../../Components/SiderBars/Sidebar";
import RightSideBar from "../../Components/SiderBars/RightSideBar";
import "../../Assets/Style/Home.css"
const HomePage = () => {
    return (
        <div className={'app__body row'}>
            <div className="home__sidebar col-3">
                <Sidebar/>
            </div>
            <div className="feed__body col-6">
                <Feed/>
            </div>
            <div className="rightbar col-3">
                <RightSideBar/>
            </div>
        </div>
    );
};

export default HomePage;