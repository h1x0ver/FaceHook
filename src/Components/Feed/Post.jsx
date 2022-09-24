import React from 'react';
import './Post.css'
import {Avatar} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const Post = ({profilePic, image, username, message}) => {

    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic} className='post__avatar'/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                </div>
            </div>

            <div className="post__bottom">

                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>

                <div className="post__option">
                    <ThumbDownIcon/>
                    <p>DisLike</p>
                </div>

                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
            </div>

        </div>


    );
};

export default Post;