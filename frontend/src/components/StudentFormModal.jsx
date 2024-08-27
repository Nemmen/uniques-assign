import React, { useState, useEffect } from 'react';
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

const StudentFormModal = ({ open, setOpen, university }) => {
  const [formData, setFormData] = useState({
    batch: '',
    course: '',
    semester: '',
    university: '',
    contact: '',
  });

  useEffect(() => {
    // Update university field when the prop changes
    setFormData((prevState) => ({
      ...prevState,
      university: university,
    }));
  }, [university]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    if (Object.values(formData).some((field) => field === '')) {
      toast.error('Please fill all the fields');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/student/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      toast.success('Student added successfully');
      setOpen(false);
      setFormData({
        batch: '',
        course: '',
        semester: '',
        university: university, // Reset university field to the current university prop
        contact: '',
      });
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <ModalBox>
        <Typography variant="h6" component="h2" id="modal-title" gutterBottom>
          Add Student
        </Typography>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="batch"
                label="Batch"
                fullWidth
                variant="outlined"
                value={formData.batch}
                onChange={handleChange}
                style={{ marginBottom: '16px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="course"
                label="Course"
                fullWidth
                variant="outlined"
                value={formData.course}
                onChange={handleChange}
                style={{ marginBottom: '16px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="semester"
                label="Semester"
                fullWidth
                variant="outlined"
                value={formData.semester}
                onChange={handleChange}
                style={{ marginBottom: '16px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="university"
                label="University"
                fullWidth
                variant="outlined"
                value={formData.university}
                disabled
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

export default StudentFormModal;
