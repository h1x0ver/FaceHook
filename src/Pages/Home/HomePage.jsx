import React from 'react';
import LSideBar from "../../Components/SideBar/LSideBar";
import Feed from "../../Components/Feed/Feed";
import RSideBar from "../../Components/SideBar/RSideBar";

const HomePage = () => {
    return (
        <div className={'container-fluid'}>
            <div className="row justify-content-between">
                <div className="col-lg-3">
                    <LSideBar/>
                </div>
                <div className="col-lg-6">
                    <Feed/>
                </div>
                <div className="col-lg-3 text-end ">
                    <RSideBar/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;