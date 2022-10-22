import React from 'react';
import './UserInfo.css'
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import ProfileDataInfo from "./ProfileDataInfo";
const AccountInfo = () => {
    return (
        <div>
            <div className="main-body">
                <div className="row gutters-sm">
                   <ProfileImage
                       imageSrc='https://yt3.ggpht.com/ytc/AMLnZu9K44a6ao-Tv-6ib3oY_-1RIen0nlNE_NwlsdL3=s900-c-k-c0x00ffffff-no-rj'
                   />
                    <ProfileInfo
                        firstname='Huseyn'
                        lastname='Quliyev'
                        username='h1x0ver'
                        email='huseynmg@code.edu.az'
                    />
                    <ProfileDataInfo
                        friendCount='10'
                        postCount='3'
                    />
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;