import React from 'react';
import '../../Assets/Style/Profile.css'
import CreatePost from "../../Components/Feed/CreatePost";
import Post from "../../Components/Feed/Post";

const Profile = () => {
    return (
        <div className="header__wrapper">
            <header></header>
            <div className="cols__container">
                <div className="left__col">
                    <div className="img__container">
                        <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="Anna Smith"/>
                        <span></span>
                    </div>
                    <h2>Huseyn Quliyev</h2>
                    <p>Back End deweloper</p>
                    <p>huseynmg@code.edu.az</p>

                    <div className='uls'>
                        <ul className="about">
                            <li><span>4,073</span>Followers</li>
                            <li><span>322</span>Following</li>
                            <li><span>200,543</span>Attraction</li>
                        </ul>
                    </div>

                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
                            erat volutpat. Morbi imperdiet, mauris ac auctor dictum, nisl
                            ligula egestas nulla.
                        </p>
                        <button className='btn btn-success'>edit profile</button>

                        <ul>
                            <li><i className="fab fa-twitter"></i></li>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-dribbble"></i>
                        </ul>
                    </div>
                </div>
                <div className="right__col">

                   <CreatePost/>
                    <Post/>
                    <Post/>


                </div>
            </div>
        </div>
    );
};

export default Profile;