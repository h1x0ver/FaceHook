import * as React from 'react';
import Box from '@mui/material/Box';
import '../../../Assets/Style/Home.css'
import {Avatar} from "@material-ui/core";
import GetStory from '@mui/material/Modal';

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
    return (
        <div>
            <GetStory
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='post__modal' sx={style}>
                    <div className='d-flex justify-content-between align-items-center w-100 mydiv'>
                        <h3>User Story</h3>
                        <p onClick={() => handleClose()}>x</p>
                    </div>
                    <div className='user__info d-flex align-items-center w-100 '>
                        <Avatar
                            src='https://st3.depositphotos.com/1000423/16114/i/450/depositphotos_161140142-stock-photo-touching-planet-with-finger.jpg'/>
                        <h5>h1x0ver</h5>
                    </div>
                    <div className='m-content'>
                        <img className='story-modal-image' src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"alt=""/>
                    </div>
                </Box>
            </GetStory>
        </div>
    );
}
