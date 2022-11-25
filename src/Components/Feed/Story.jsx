import React from 'react';
import "./Story.css";
import {Avatar} from "@material-ui/core";

const Story = ({image, profileSrc, title, setOpen, id}) => {
    return (
        <div  onClick={() => setOpen(true,id)} style={{backgroundImage: `url(${image})`}} className='story'>
            <Avatar className='story__avatar' src={profileSrc}/>
        </div>

    );
};

export default Story;