import React, {useState} from 'react';
import './Post.css'
import {Avatar} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import {SaveOutlined} from "@material-ui/icons";
import axios from "axios";


const Post = ({profilePic, image, username, message,like,id}) => {

    // const [save,setSave] = useState(true)
    // const [postId, setPostId] = useState(id)

    const savePost = () => {
        // console.log('ay blet')
        // const formdata = new FormData()
        // formdata.append('postId', postId)
        // formdata.append('isSave', save)
        // for (var pair of formdata.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]);
        // }
        const token = JSON.parse(localStorage.getItem("Utoken"))
        fetch(`https://localhost:44347/api/Post/Save/${id}`,{
          method:"POST",
          headers:{
              "Content-Type":"application/json",
              Authorization:"Bearer "+token
          },
        }).then(resp=> {
            if (resp.status === 204) {
                const token = JSON.parse(localStorage.getItem('Utoken'))
                axios.get('https://localhost:44347/api/Post', {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                    }).then(n=>alert('salam'))

            }
        })
    }

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
                    <p>Like {like}</p>
                </div>


                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <SaveOutlined/>
                    <p onClick={()=>savePost()}>save</p>
                </div>
            </div>

        </div>


    );
};

export default Post;