import React, { useState  } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { toast } from 'react-toastify';


const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: 24,
  padding: theme.spacing(4),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#016F6B',
  ':hover': {
    backgroundColor: '#016F89',
  },
  width: '100%',
}));

const InstitutionFormModal = ( { open, setOpen }) => {


  const [formData, setFormData] = useState({
    institution: '',
    address: '',
    contact: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    if(formData.institution === '' || formData.address === '' || formData.contact === ''){
      toast.error('Please fill all the fields');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/institute/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      toast.success('Institution added successfully');
      setOpen(false);
      setFormData({
        institution: '',
        address: '',
        contact: '',
      });

    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  const handleClose = () => {
    setOpen(false); // Close the modal when the user clicks outside the modal content
  };

  return (
    <Modal
      open={open}
      onClose={handleClose} // Add the onClose handler
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <ModalBox>
        <Typography variant="h6" component="h2" id="modal-title" gutterBottom>
          Add Institution
        </Typography>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="institution"
                label="Institution"
                fullWidth
                variant="outlined"
                value={formData.institution}
                onChange={handleChange}
                style={{ marginBottom: '16px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="address"
                label="Address"
                fullWidth
                variant="outlined"
                value={formData.address}
                onChange={handleChange}
                style={{ marginBottom: '16px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="contact"
                label="Contact"
                fullWidth
                variant="outlined"
                type="number"
                value={formData.contact}
                onChange={handleChange}
                style={{ marginBottom: '16px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <SubmitButton
                variant="contained"
                onClick={onSubmit}
              >
                Submit
              </SubmitButton>
            </Grid>
          </Grid>
        </Paper>
      </ModalBox>
    </Modal>
  );
};

export default InstitutionFormModal;
