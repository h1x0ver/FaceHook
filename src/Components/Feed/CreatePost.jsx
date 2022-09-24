import React, {useState} from 'react';
import './CreatePost.css'
import {Avatar} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import {InsertEmoticon, PhotoLibrary} from "@material-ui/icons";
import MyModal from "../UI/Modal/MyModal";


const CreatePost = () => {


    const [modal, setModal] = useState(false)

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        //delete input onsubmit
        setInput('');
        setImageUrl('');
    }



    return (
        <div className='createPost col-12'>

            <div className="createPost__top">
                <Avatar/>
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='createPost__input'
                        placeholder='Whats on your mind ?'
                        onClick={() => setModal(true)}
                    />

                    <MyModal visible={modal} setVisible={setModal}>
                        <h3>Create Post</h3>
                    </MyModal>
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

            </div>
        </div>);
};

export default CreatePost;