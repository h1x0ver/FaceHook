import React, {useState} from 'react';
import './Post.css'
import usericon from '../../Assets/Images/UserIcon.png'
import MyModal from "../UI/Modal/MyModal";

const CreatePost = () => {
    const [modal, setModal] = useState(false)

    return (
        <div className="post create">
            <div className="post-top">
                <div className="dp">
                    <img src={usericon} alt=""/>
                </div>
                <a className={'create__post__btn'} onClick={() => setModal(true)} >
                    Whats new?
                </a>
                <MyModal visible={modal} setVisible={setModal}>


                </MyModal>
            </div>
            <hr/>
            <div className="post-bottom">
                <div className="action">
                    <i className="fa fa-image"></i>
                    <span>Photo/Video</span>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;