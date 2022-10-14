import React from 'react';
import Sidebar from "../../Components/SiderBars/Sidebar";
import '../../Assets/Style/Friend.css'
import  image from '../../images/logo.png'

const FriendsRequest = () => {
    return (
        <div className="container-fluid bg__home">
            <div className="row">
                <div className="col-lg-3 leftSideBarWrapper">
                    <Sidebar/>
                </div>
                <div className="col-lg-9 user-friends">
                    <div className="row">

                        <div className='mytabel'>

                            <div className='profilimg tabs'>
                                <img src={image}/>
                            </div>

                            <div className='profilname tabs'>
                                <h1>salam</h1>
                                <p>sagol brat</p>
                            </div>

                            <div className='profilsurname tabs'>
                                <h1>salam</h1>
                                <p>sagol brat</p>

                            </div>

                            <div className='profilsurname tabs'>
                                <h1>salam</h1>
                                <p>sagol brat</p>

                            </div>

                            <div className='profilsurname tabs'>
                                <button>Salam</button>
                            </div>


                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default FriendsRequest;