import * as React from 'react';
import Box from '@mui/material/Box';
import '../../../Assets/Style/Home.css'
import GetStory from '@mui/material/Modal';
import {useEffect, useState} from "react";
import axios from "axios";

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

export default function BasicModal({open, setOpen}) {
    const handleClose = () => setOpen(false);
    const [story, setStory] = useState([])

     useEffect(()=>  {
         let token = JSON.parse(localStorage.getItem('Utoken'))
         axios.get(`https://localhost:44347/api/Story/`,{
             method:"GET",
             headers:{
                 Authorization: "Bearer " + token
             }
         }).then(resp => setStory(resp.data))
     },[])

    return (
        <div>
            <GetStory
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='ppost__modal' sx={style}>
                    <div className='d-flex justify-content-between align-items-center w-100 mydiv'>
                        <>User Story</>
                        <p onClick={() => handleClose()}>x</p>
                    </div>
                    <div className='m-content'>
                        {
                            story&&story.map(e => {
                                return(
                                    <img className='story-modal-image' src={`https://localhost:44347/img/${e.imageName}`} alt=""/>
                                )
                            })
                        }
                    </div>
                </Box>
            </GetStory>
        </div>
    );
}
