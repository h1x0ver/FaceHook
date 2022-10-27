import React, {useState} from 'react';
import './Post.css'
import {Avatar} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import {SaveOutlined} from "@material-ui/icons";
import axios from "axios";
import Comment from "../Comment/Comment";
import {useNavigate} from "react-router-dom";

const Post = ({profilePic, image, username, message, like, id}) => {
    const route = useNavigate()


    const savePost = () => {

        const token = JSON.parse(localStorage.getItem("Utoken"))
        fetch(`https://localhost:44347/api/Post/Save/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            },
        }).then(resp => {
            if (resp.status === 204) {
                const token = JSON.parse(localStorage.getItem('Utoken'))
                axios.get('https://localhost:44347/api/Post', {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }).then(n => alert('huhuhu'))
            }
        })
    }

    return (
        <div className='post'>
            <div className="post__top"  >
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
                    <i className="fa-solid fa-2x fa-thumbs-down"></i>
                    <p>Like {like}</p>
                </div>
                <div className="post__option">
                    <SaveOutlined/>
                    <p onClick={() => savePost(id)}>save</p>
                </div>
            </div>
            <Comment/>

        </div>


    );
};

export default Post;