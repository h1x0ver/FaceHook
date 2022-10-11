import React,{useEffect,useState} from 'react';
import './Feed.css'
import StoryReel from "./StoryReel";
import CreatePost from "./CreatePost";
import Post from "./Post";
import Modal from '../UI/Modal/Modal'

import axios from 'axios'

const  Feed = () => {
    const [post,setPost] = useState([])
    useEffect(()=>
    {
        let token = JSON.parse(localStorage.getItem("Utoken"))
        axios.get(`https://localhost:44347/api/Post`,
            {
                headers:{
                    Authorization:"Bearer "+token
                }
            })

            .then(resp=> setPost(resp.data))
    },[])
    console.log(post)



    return (
        <div className='feed'>
            <StoryReel/>
            <CreatePost/>
            <Modal
                setPost={setPost}
            />
            {
                post&&post.map(e=>
                {
                    return(
                        <Post
                            profilePic={`https://localhost:44347/img/${e.user.profileImage}`}
                            message={`${e.title}`}
                            timestamp='This is a timestamp'
                            username={e.user.username}
                            image={`https://localhost:44347/img/${e.imageName}`}
                            like={e.likeCount}
                        />
                    )
                })
            }

        </div>
    );
};

export default Feed;


