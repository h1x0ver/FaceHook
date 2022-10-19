import React from 'react';
import './Comment.css'

const Comment = () => {
    return (
        <div>
            <div className="main-container">
                <div className="comment-flexbox">
                    <h3 className='comment-text'></h3>
                    <textarea className='input-box'/>
                    <button className='comment-button'>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Comment;