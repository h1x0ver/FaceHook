import React from 'react';
import '../../Style/LSideBar.css'
import images from '../../Assets/Images/UserIcon.png'

const LSideBar = () => {
    return (
        <div>
            <ul className={'sidebar'}>
                <li className={' py-3'}><img src={images} className="rounded-circle" width={'30px'} alt=""/>User Name</li>
                <li>Search Friend</li>
                <li>Groups</li>
                <li>Saved Post</li>
                <li>Messanger</li>
            </ul>
        </div>
    );
};

export default LSideBar;