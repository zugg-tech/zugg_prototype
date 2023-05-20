import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
    const userClasses = [
        
        {
          value: 'Brand',
          
        },
        {
          value: 'Agency',
          
        },
        {
          value: 'Creator',
          
        },

        
      ];
  


  return (
    <div>
      
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}

        <div>
        <Box
      component="form"
      sx={style}
      noValidate
      autoComplete="off"
    >

<FormControl fullWidth sx={{ m: 1 }}>
<TextField
          id="outlined-helperText"
          label=""
          defaultValue=""
          helperText="Your Name"
          style={{display:'inline-block'}}
          fullWidth
        />

        <TextField
            id="outlined-helperText"
            label=""
            defaultValue=""
            helperText="Your Email"
            style={{display:'inline-block'}}
            fullWidth
            />
        <TextField
            id="outlined-helperText"
            label=""
            defaultValue=""
            helperText="Mobile No."
            style={{display:'inline-block'}}
            fullWidth
            />
        
        <TextField
          id="outlined-select-currency"
          select
          label=""
          defaultValue="Select"
          helperText="You are..."
          style={{display:'inline-block'}}
          fullWidth
        >
          {userClasses.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        </FormControl>
        

    </Box>
        </div>
      </Modal>
    </div>
  );
}