import React from 'react';
import Feed from "../../Components/Feed/Feed";
import Sidebar from "../../Components/SiderBars/Sidebar";
import "../../Assets/Style/Home.css"
import Rightbar from "../../Components/SiderBars/Rightbar";

const HomePage = () => {
    return (
        <div className="container-fluid bg__home">
            <div className="row">
                <div className="col-lg-4 leftSideBarWrapper">
                    <Sidebar/>
                </div>
                <div className="col-lg-4 feed__wrapper">
                    <Feed/>
                </div>
                <div className="col-lg-4 rightSideBar d-flex justify-content-end">
                    <Rightbar/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;