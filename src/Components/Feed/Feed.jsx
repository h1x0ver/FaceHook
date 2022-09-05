import React from 'react';
import './Feed.css'
import StoryReel from "./StoryReel";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel/>
            <CreatePost/>
            <Post
            profilePic='https://yt3.ggpht.com/ytc/AMLnZu9K44a6ao-Tv-6ib3oY_-1RIen0nlNE_NwlsdL3=s900-c-k-c0x00ffffff-no-rj'
            message='Programming Language Java'
            timestamp='This is a timestamp'
            username='Huseyn'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5rMh7sWQl0x3NmtYfLiuiUmu88RtjbOEcg&usqp=CAU'

            />
            <Post
                profilePic='https://yt3.ggpht.com/ytc/AMLnZu9K44a6ao-Tv-6ib3oY_-1RIen0nlNE_NwlsdL3=s900-c-k-c0x00ffffff-no-rj'
                message='Programming Language Java'
                timestamp='This is a timestamp'
                username='Huseyn'
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5rMh7sWQl0x3NmtYfLiuiUmu88RtjbOEcg&usqp=CAU'

            />
            <Post
                profilePic='https://yt3.ggpht.com/ytc/AMLnZu9K44a6ao-Tv-6ib3oY_-1RIen0nlNE_NwlsdL3=s900-c-k-c0x00ffffff-no-rj'
                message='Programming Language Java'
                timestamp='This is a timestamp'
                username='Huseyn'
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5rMh7sWQl0x3NmtYfLiuiUmu88RtjbOEcg&usqp=CAU'

            />
        </div>
    );
};

export default Feed;


