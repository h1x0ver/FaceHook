import React, {useState} from 'react';
import './CreatePost.css'
import {Avatar} from "@material-ui/core";
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


                </form>
            </div>
            <div className="createPost__bottom">
                <div className="createPost__option">
                    <input type='file'/>
                </div>


            </div>
        </div>);
};

export default CreatePost;