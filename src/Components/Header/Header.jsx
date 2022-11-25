import React, {useEffect, useState} from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import Group from '@material-ui/icons/Group';
import Message from '@material-ui/icons/Message';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import {Avatar} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {useDispatch} from "react-redux";
import axios from "axios";
import {decodeToken} from "react-jwt";
import logo from '../../images/logo.png'
import {Link, useNavigate} from "react-router-dom";
import Logout from "@mui/icons-material/Logout";

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
    const route = useNavigate()
    const [serachUser, setSearchUser] = useState([])
    const [inp, setInp] = useState("")
    let tokenByCurrent = JSON.parse(localStorage.getItem("Utoken"))
    const myDecodedToken = decodeToken(tokenByCurrent);
    const handleLogOut = () => {
        localStorage.removeItem("Utoken")
        route("/login")
    }
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
                    onClick={()=> route('/')}
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
                    <HomeIcon onClick={() => route('/')} fontSize="large"/>
                </div>
                <div className="header__option">
                    <Group fontSize="large" onClick={() => route('/friends')}/>
                </div>
                <div className="header__option">
                    <Message fontSize="large" onClick={() => route('/messenger')}/>
                </div>
            </div>

            {/*header right*/}
            <div className="header__right">

                <IconButton>
                       <AddIcon onClick={()=> route('/add-friends')}/>
                </IconButton>

                <IconButton>
                    <ForumIcon onClick={()=>route('/messenger')}/>
                </IconButton>

                <IconButton>
                    <Logout onClick={(handleLogOut)}/>
                </IconButton>

            </div>
            <div className="header__hamburger">
                <div className="header__hamburger__wrapper" onClick={hamburgerVisibleHandler}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="header__hamburger__body">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/savedPost'>Saved Post </Link></li>
                        <li><Link to='/messanger'>Messanger</Link></li>
                        <li><Link to='/add-friends'>Add Friends </Link></li>
                        <li><Link to='requests'>Friend Request </Link></li>
                        <li><Link to='/friends'>Friends </Link></li>
                        <li><Link to={'/profile'}>Profile</Link></li>
                        <li><Link to={'/'}>Profile</Link></li>
                        <li><Link to={'/profile'}>Profile</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;