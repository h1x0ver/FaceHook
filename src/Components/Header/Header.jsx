import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import Group from '@material-ui/icons/Group';
import Message from '@material-ui/icons/Message';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {Avatar} from "@material-ui/core";
import { IconButton} from "@material-ui/core";



const Header = () => {
    return (
        <div className={'header'}>
            {/*header left*/}
            <div className="header__left">
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png'
                    alt="gg"/>
                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder={'Search Facebook'} type="text"/>

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

                <div className="header__info">
                    <Avatar/>
                </div>

            </div>
        </div>
    );
};

export default Header;