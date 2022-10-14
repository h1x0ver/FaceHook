import React from 'react';
import Sidebar from "../../Components/SiderBars/Sidebar";

const ProfileSettings = () => {
    return (
        <div  className="container-fluid bg__home">
            <div  className="row">
                <div className="col-lg-4 leftSideBarWrapper">
                    <Sidebar/>
                </div>
                <div className="col-lg-4 feed__wrapper">
                    .

                </div>
                <div className="col-lg-4 rightSideBar d-flex justify-content-end">

                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;