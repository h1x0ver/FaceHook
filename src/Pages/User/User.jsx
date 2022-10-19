import React from 'react';
import Sidebar from "../../Components/SiderBars/Sidebar";
import Rightbar from "../../Components/SiderBars/Rightbar";
import '../../Assets/Style/User.css'

const User = () => {
    return (
        <div  className="container-fluid bg__home">
            <div  className="row">
                <div className="col-lg-4 leftSideBarWrapper">
                    <Sidebar/>
                </div>
                <div className="col-lg-4 feed__wrapper">
                    <div className="image__container">
                        <img src="https://i.pinimg.com/236x/3a/41/d0/3a41d08b65374fef8019ef903eb2db94--black-eye-makeup-dark-makeup.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 rightSideBar d-flex justify-content-end">
                    <Rightbar/>
                </div>
            </div>
        </div>
    );
};

export default User;