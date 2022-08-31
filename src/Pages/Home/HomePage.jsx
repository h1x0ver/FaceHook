import React from 'react';
import LSideBar from "../../Components/NavigationBar/SideBar";
import Feed from "../../Components/Feed/Feed";
import RightBar from "../../Components/NavigationBar/RightBar";

const HomePage = () => {
    return (
        <div className={'container-fluid'}>
            <div className="row justify-content-between">
                <div className="col-lg-2 col-sm-4">
                    <LSideBar/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <Feed/>
                </div>
                <div className="col-lg-2 text-end ">
                    <RightBar/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;