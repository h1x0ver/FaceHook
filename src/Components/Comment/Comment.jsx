import React, {useState} from 'react';
import './Comment.css'
import {Avatar} from "@material-ui/core";

const Comment = () => {
    const [comment, setComment] = useState('');
    const [addComment, setAddComment] = useState([])
    const onChangeHandler = (e) => {
        setComment(e.target.value)
    }
    const onClickhandler = () => {
        setAddComment((addComment) => [...addComment, comment])

        setComment('')
    }
    return (
        <div>

            <div className="main-container">
                {addComment.map((text) => (
                    <div>
                        <div className="comment-container">
                            <p className='comment-in-text'>{text}</p>
                        </div>
                    </div>


                ))}

                <div className="comment-flexbox">
                    <h3 className='comment-text'>add comment</h3>
                    <input
                        type="text"
                        className='input-box'
                        value={comment}
                        onChange={onChangeHandler}
                    />
                    <button className='comment-button' onClick={onClickhandler}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Comment;