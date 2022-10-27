import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useState,useEffect} from "react";
import '../../../Assets/Style/Home.css'
import axios from "axios";
import {decodeToken} from "react-jwt";


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
export default function BasicModal({open, setOpen, setPost,setFaster,faster}) {
    const handleClose = () => setOpen(false);
    const [fileImage, setFile] = useState(null)

    useEffect(()=>
    {
        const token = JSON.parse(localStorage.getItem('Utoken'))
        axios.get(`https://localhost:44347/api/User/userProfile/${decodettoken.Id}`,{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                Authorization: "Bearer " + token
            }
        })
    },[faster])

    let tokenByCurrent = JSON.parse(localStorage.getItem("Utoken"))
    const decodettoken = decodeToken(tokenByCurrent);

    const handlePost = () => {
        const formdata = new FormData()
        formdata.append('ImageFile', fileImage)

        const token = JSON.parse(localStorage.getItem('Utoken'))
        fetch('https://localhost:44347/api/User/changeProfilePhoto', {
            method: "POST",
            headers: {
                Authorization: "Bearer " + token
            },
            body: formdata
        }).then(res=>
        {
            if (res.status==204||200)
            {
               setFaster(faster+1)
            }
        })


        setOpen(false)
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
                        <h3>Change Profile Photo</h3>
                        <p className='fw-bold' onClick={() => handleClose()}>x</p>
                    </div>
                    <div className='m-content'>
                        <h6>Select Image</h6>
                        <input type="file" className="mt-1" onChange={(e) => setFile(e.target.files[0])}
                               accept='image/*'/>
                        <button className='w-100 btn btn-primary mt-4' onClick={() => handlePost()}>Change Photo
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
