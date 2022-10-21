import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import axios from "axios";
import '../../../Assets/Style/Home.css'
import {Avatar} from "@material-ui/core";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    borderRadius: '10px',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
};

export default function BasicModal({setPost, open, setOpen}) {
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState('')
    const [fileImage, setFile] = useState(null)
    const handlePost = () => {
        console.log('ayyyy blya')
        const formdata = new FormData()
        formdata.append('Title', title)
        formdata.append('ImageFiles', fileImage)
        for (var pair of formdata.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        const token = JSON.parse(localStorage.getItem('Utoken'))
        fetch('https://localhost:44347/api/Post/create', {
            method: "POST",

            headers: {
                Authorization: "Bearer " + token
            },
            body: formdata


        }).then(resp => {
            if (resp.status === 204) {
                const token = JSON.parse(localStorage.getItem('Utoken'))
                axios.get('https://localhost:44347/api/Post', {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }).then(resp => setPost(resp.data))
                setOpen(false)

            }
        })


    }


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='post__modal' sx={style}>
                    <div className='d-flex justify-content-between align-items-center w-100 mydiv'>
                        <h3>Create Post</h3>
                        <p onClick={() => handleClose()}>x</p>
                    </div>
                    <div className='user__info d-flex align-items-center w-100 '>
                        <Avatar
                            src='https://st3.depositphotos.com/1000423/16114/i/450/depositphotos_161140142-stock-photo-touching-planet-with-finger.jpg'/>
                        <h5>h1x0ver</h5>
                    </div>
                    <div className='m-content'>
                        <textarea placeholder='Whats your mind?' className={'post-text'} id="outlined-basic"
                                  label="Outlined" variant="outlined" onChange={(e) => setTitle(e.target.value)}/>
                        <input type="file" className="custom-file-input" onChange={(e) => setFile(e.target.files[0])}
                               accept='image/*'/>
                        <button className='creaate-post-btn' onClick={() => handlePost()}>Create Post</button>
                    </div>


                </Box>
            </Modal>
        </div>
    );
}
