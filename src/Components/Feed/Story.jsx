import React from 'react';
import "./Story.css";
import {Avatar} from "@material-ui/core";

const Story = ({image, profileSrc, title, setOpen}) => {
    return (
        <div  onClick={() => setOpen(true)} style={{backgroundImage: `url(${image})`}} className='story'>
            <Avatar className='story__avatar' src={profileSrc}/>
            <h4>{title}</h4>
        </div>

    );
};

export default Story;