import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <div className='nav__left'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png'/>
                    <div className='nav__search'>
                        <i className="material-icons">search</i>
                        <input className="search__input" type='text' placeholder="Search Facebook"/>
                    </div>
                </div>

                <div className='nav__mid'>
                    <Link to='/'>
                        <a className='icon'>
                            <i className='material-icons'>home</i>
                        </a>
                    </Link>

                    <a className='icon'>
                        <i className='material-icons'>people</i>
                    </a>
                    <a className='icon'>
                        <i className='material-icons'>groups</i>
                    </a>
                </div>

                <div className="nav__right">
                    <a className="avatar">
                        add friend
                    </a>
                    <div className="buttons">
                        <a><i className='material-icons add'>add</i></a>
                        <a><i className='material-icons'>messenger</i></a>
                        <a><i className='material-icons'>notifications</i></a>
                        <a><i className='material-icons'>arrow_drop_down</i></a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;