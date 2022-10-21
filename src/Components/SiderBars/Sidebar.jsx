import React, {useState} from 'react';
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import ChatIcon from '@material-ui/icons/Chat';
import Save from "@material-ui/icons/Bookmark";
import {Navigate, useNavigate} from "react-router-dom";
import {Help, SettingsApplicationsOutlined} from "@material-ui/icons";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'

const Sidebar = ({redirect}) => {
    const route = useNavigate()
    const command = [
        {
            command:["Go to *", "Open *"],
            callback:(redirectPage) => setRedirectUrl(redirectPage),
        }
    ]
    const [redirectUrl, setRedirectUrl] = useState("")
    const {transcript} = useSpeechRecognition({command});
    const pages = ["profile","users","addfriends","friends","requests","savedPost","reset", "user","profileSettings"];
    const urls = {
        home:"/",
        profile:"/profile",
        "add friends":"/add-friends",
        "profile settings":"/profileSettings",
        reset:"/reset",
        friends:"/friends",
        "Saved post":"savedPost"
    }
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }
    let {redirect} = "";
    if (redirectUrl){
        if (pages.includes(redirectUrl)){
            redirect = <Navigate replace to={urls[redirectUrl]}/>
        }else {
            redirect = <p>Could not find page: {redirectUrl}</p>
        }
    }



    return (
        <div className={'sidebar'}>
            <ul>
                <li onClick={() => route('/')}>
                    <SidebarRow
                        src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                        title='Huseyn Quliyev'
                    />
                </li>

                <li onClick={() => route('/chat')}>
                    <SidebarRow
                        Icon={ChatIcon}
                        title='Messanger'
                    />

                </li>
                <li onClick={() => route('/savedpost')}>
                    <SidebarRow
                        Icon={Save}
                        title='Saved Post'
                    />

                </li>
                <hr/>
                <div style={{marginTop: "50px"}}>

                </div>
                <li onClick={() => route('/add-friends')}>
                    <SidebarRow
                        Icon={PersonAddAltIcon}
                        title='Add friends'
                    />
                </li>
                <li onClick={() => route('/requests')}>
                    <SidebarRow
                        Icon={ContactMailIcon}
                        title='Friend Request'
                    />
                </li>
                <li onClick={() => route('/friends')}>
                    <SidebarRow
                        Icon={SupervisedUserCircleIcon}
                        title='All Friends'
                    />
                </li>
                <hr className='mt-5'/>
                <div style={{marginTop: "70px"}}>

                </div>
                <li onClick={() => route('/profile')}>
                    <SidebarRow
                        Icon={SettingsApplicationsOutlined}
                        title='settings'
                    />
                </li>       <hr className='mt-5'/>
                <div style={{marginTop: "70px"}}>

                </div>
                <li onClick={SpeechRecognition.startListening}>
                    <SidebarRow
                        Icon={Help}
                        title='Help'
                    />
                    <p id='transcript'>saying:{transcript}</p>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;