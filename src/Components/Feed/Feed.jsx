import React, {useEffect, useState} from 'react';
import './Feed.css'
import StoryReel from "./StoryReel";
import CreatePost from "./CreatePost";
import Post from "./Post";
import Modal from '../UI/Modal/Modal'

import axios from 'axios'

const Feed = () => {
    const [post, setPost] = useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("Utoken"))
        axios.get(`https://localhost:44347/api/Post`,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }).then(resp => setPost(resp.data))
    }, [])

    return (
        <div className='feed'>
            <StoryReel/>
            <CreatePost setOpen={setOpen}/>
            <Modal
                open={open}
                setOpen={setOpen}
                setPost={setPost}
            />
            {
                post && post.map(e => {
                    return (
                        <Post
                            key={e.id}
                            profilePic={`https://localhost:44347/img/${e.user.profileImage}`}
                            message={`${e.title}`}
                            username={e.user.username}
                            image={`https://localhost:44347/img/${e.imageName}`}
                            like={e.likeCount}
                            id={e.id}
                        />
                    )
                })
            }
        </div>
    );
};
export default Feed;