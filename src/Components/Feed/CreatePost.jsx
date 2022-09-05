import React, {useState} from 'react';
import './CreatePost.css'
import {Avatar} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import {InsertEmoticon, PhotoLibrary} from "@material-ui/icons";


const CreatePost = () => {

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        //delete input onsubmit
        setInput('');
        setImageUrl('');
    }



    return (
        <div className='createPost'>
            <div className="createPost__top">
                <Avatar/>
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='createPost__input'
                        placeholder='Whats on your mind ?'
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder='image URL'
                    />

                    <button type='submit' onClick={handleSubmit}>
                        hidden submit
                    </button>
                </form>
            </div>
            <div className="createPost__bottom">
                <div className="createPost__option">
                    <VideocamIcon style={{color: 'red'}}/>
                    <h3>Video</h3>
                </div>

                <div className="createPost__option">
                    <PhotoLibrary style={{color: 'green'}}/>
                    <h3>Photo</h3>
                </div>

                <div className="createPost__option">
                    <InsertEmoticon style={{color: 'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>);
};

export default CreatePost;