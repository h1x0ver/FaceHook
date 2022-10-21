import React from 'react';
import './CreateHistory.css'
import {Avatar} from "@material-ui/core";


const CreateHistory = ({setOpen}) => {
    return (
        <div className='createPost col-12'>
            <h5 className='d-flex justify-content-center mt-1'>Create Story</h5>
            <div className="createPost__top">
                <Avatar/>
                <form>
                    <input
                        className='createPost__input'
                        placeholder='Whats on your mind ?'
                        onClick={() => setOpen(true)}
                    />

                </form>
            </div>

        </div>

    );
};

export default CreateHistory;