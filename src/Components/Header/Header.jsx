import React, {useEffect, useState} from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import Group from '@material-ui/icons/Group';
import Message from '@material-ui/icons/Message';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {Avatar} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {useDispatch} from "react-redux";
import axios from "axios";
import {decodeToken} from "react-jwt";
import logo from '../../images/logo.png'
import {Link} from "react-router-dom";

const Header = () => {

    const inputVisibleHandler = (e) => {
        e.target.classList.toggle("active")
    }
    const hamburgerVisibleHandler = (e) => {
        if (e.target.parentElement.parentElement.lastElementChild.style.display == "flex") {
            e.target.parentElement.parentElement.lastElementChild.style.display = "none"
        } else {
            e.target.parentElement.parentElement.lastElementChild.style.display = "flex"
        }
    }
    const dispatch = useDispatch()

    const [serachUser, setSearchUser] = useState([])
    const [inp, setInp] = useState("")
    let tokenByCurrent = JSON.parse(localStorage.getItem("Utoken"))
    const myDecodedToken = decodeToken(tokenByCurrent);

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Utoken"))
        axios.get(`https://localhost:44347/api/User`,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            .then(resp => setSearchUser(resp.data))
    }, [])
    console.log(myDecodedToken.Firstname)

    return (
        <div className={'header'}>
            {/*header left*/}
            <div className="header__left">
                <img
                    src={logo}
                    alt="gg"/>
                <div className="header-input-search">
                    <div className="header__input">
                        <SearchIcon id="searchIcon" onClick={inputVisibleHandler}/>
                        <input placeholder={'Search Facebook'} onChange={(e) => {
                            setInp(e.target.value)
                        }} type="text"/>
                    </div>
                    {
                        inp !== "" ?

                            <div className="search-container">
                                {
                                    serachUser.filter(e => e.firstname !== myDecodedToken.Firstname).filter(e => {
                                        if (inp === '') {
                                            return e
                                        } else if (e.firstname.toLowerCase().includes(inp.toLowerCase())) {
                                            return e
                                        }
                                    }).map(e => <li><Avatar
                                        src={`https://localhost:44347/img/${e.profileImage}`}/>{`${e.firstname}  ${e.lastname}`}
                                    </li>)
                                }
                            </div>
                            : null
                    }
                </div>
            </div>
            {/*header middle*/}
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <Group fontSize="large"/>
                </div>
                <div className="header__option">
                    <Message fontSize="large"/>
                </div>
            </div>

            {/*header right*/}
            <div className="header__right">

                <IconButton>
                    <AddIcon/>
                </IconButton>

                <IconButton>
                    <ForumIcon/>
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <Avatar className='dropbtn'/>

            </div>
            <div className="header__hamburger">
                <div className="header__hamburger__wrapper" onClick={hamburgerVisibleHandler}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="header__hamburger__body">
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/savedPost'><li>Saved Post</li></Link>
                        <Link to='/add-friends'><li>Add Friends</li></Link>
                        <Link to='requests'><li>Friend Request</li></Link>
                        <Link to='/friends'><li>Friends</li></Link>
                        Li<li>Profile</li>
                        <li>Change Profile Data</li>
                        <li>Change Password</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;