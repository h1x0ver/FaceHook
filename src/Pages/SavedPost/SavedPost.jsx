import React, {useEffect, useState} from 'react';
import Sidebar from "../../Components/SiderBars/Sidebar";
import Post from "../../Components/Feed/Post";
import axios from "axios";


const SavedPost = () => {
    const [savedPost,setSavedPost] = useState([])
    useEffect(()=>
    {
        let token = JSON.parse(localStorage.getItem("Utoken"))
        axios.get(`https://localhost:44347/api/Post/saved`,
            {
                headers:{
                    Authorization:"Bearer "+token
                }
            }).then(resp=> setSavedPost(resp.data))
    },[])
    console.log(savedPost)

    return (
        <div style={{marginTop:'20px'}} className="container-fluid">
            <div  className="row">
                <div className="col-lg-2 leftSideBarWrapper">
                    <Sidebar/>
                </div>
                <div className="col-lg-10">
                    <div className="row">
                        {
                            savedPost.length > 0 ? savedPost.map(e=>{
                                return(
                                    <div className="col-lg-6 col-sm-6 salamlae">
                                        <Post
                                            key={e.id}
                                            profilePic={`https://localhost:44347/img/${e.user.profileImage}`}
                                            message={`${e.title}`}
                                            username={e.user.username}
                                            image={`https://localhost:44347/img/${e.imageName}`}
                                            like={e.likeCount}
                                            id={e.id}

                                        />
                                    </div>
                                )
                            }):<div className='laod'> <h1>You dont have saved post</h1></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavedPost;