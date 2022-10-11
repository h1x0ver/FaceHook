import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";
import {useState} from "react";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({setPost}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState('')
    const [fileImage, setFile] = useState(null)



    const handlePost = () => {
        console.log('blet')
        const  formdata = new FormData()
        formdata.append('Title',title)
        formdata.append('ImageFiles',fileImage)
        for (var pair of formdata.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }

        const token = JSON.parse(localStorage.getItem('Utoken'))
        fetch('https://localhost:44347/api/Post/create', {
            method: "POST",

            headers:{
                Authorization:"Bearer "+token
            },
            body:formdata


        }).then(resp=> {
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
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e)=> setTitle(e.target.value) } />
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} accept='image/*'/>
                    <button onClick={()=> handlePost()}>Salam</button>

                </Box>
            </Modal>
        </div>
    );
}
