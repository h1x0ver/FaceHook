import React from 'react';
import Sidebar from "../../Components/SiderBars/Sidebar";
import '../../Assets/Style/Friend.css'

const Friends = () => {
    return (
        <div  className="container-fluid bg__home">
            <div  className="row">
                <div className="col-lg-4 leftSideBarWrapper">
                    <Sidebar/>
                </div>
                <div className="col-lg-4 feed__wrapper">
                    <div className="container">
                        <ul className="responsive-table">

                            <li className="table-row">
                                <div className="col col-1">
                                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" width='50px'  alt=""/>
                                </div>
                                <div className="col col-2">Huseyn</div>
                                <div className="col col-3">Aliyev</div>
                                <div className="col col-4">Pending</div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 rightSideBar d-flex justify-content-end">

                </div>
            </div>
        </div>
    );
};

export default Friends;