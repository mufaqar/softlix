/* eslint-disable react/no-unescaped-entities */
import React,{ useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';
import axios from 'axios'
const validationSchema = yup.object({
  fname: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lname: yup
    .string()
    .trim()
    .min(10, 'Please enter a valid number')
    .max(13, 'Please enter a valid number')
    .required('Please specify your phone number'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  message: yup
    .string()
    .trim()
    .required('Please specify your requirements'),
});

const Contact = () => {
  const theme = useTheme();
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const[success, setSuccess] = useState('')
const[btnLabel, setBtnLabel] = useState('Submit')
const [submitted, setSubmitted] = useState(false)

  const LeftSide = () => {
    const initialValues = {
      fname: '',
      lname: '',
      email: '',
      message: '',
    };

    const onSubmit = (values) => {

      setBtnLabel('Sending...');
    let data = {
      
    };
    data.fname=formik.values.fname;
    data.lname=formik.values.lname;
    data.email=formik.values.email;
    data.message=formik.values.message;

    fetch('api/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setFname('')
        setLname('')
        setEmail('')
        setMessage('')
        setSuccess('Email sent successfully');
        setBtnLabel('Sent');
      }
    })
      return values;
    };

    const formik = useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });

    return (
      <Box sx={{ paddingTop: '0px' }}>
        <Box sx={{ paddingTop: '0px' }}>
          <Typography variant={'h4'} sx={{ fontWeight: 700, paddingTop: '0px' }} >
            Contact us
          </Typography>
          <Typography color="text.secondary">
           Fill in the form and we will reach back to you at our earliest!
          </Typography>
        </Box>
        <Box>
          <form noValidate onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="First name"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="fname"
                  fullWidth
                  value={formik.values.fname}
                  onChange={formik.handleChange }

                  error={
                    formik.touched.fname && Boolean(formik.errors.fname)
                  }
                  helperText={
                    formik.touched.fname && formik.errors.fname
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="Mobile"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="lname"
                  fullWidth
                  value={formik.values.lname}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lname && Boolean(formik.errors.lname)
                  }
                  helperText={formik.touched.lname && formik.errors.lname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ height: 54 }}
                  label="Email"
                  type="email"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="email"
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Requirements"
                  multiline
                  rows={6}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="message"
                  fullWidth
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ height: 54, minWidth: 150 }}
                  variant="contained"
                  color="primary"
                  size="medium"
                  type="submit"
                >
                 {btnLabel}
                </Button>
                 <Box>
              {success}
              </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography color="text.secondary">
                  We Typically reply in Maximum 2 Hours
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Typography component="p" variant="body2" align="left">
                    By clicking on "submit" you agree to our{' '}
                    <Box
                      component="a"
                      href="/privacy-policy"
                      color={theme.palette.text.primary} 
                      fontWeight={'700'}
                    >
                      Privacy Policy
                    </Box>
                    .
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    );
  };



  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
     <LeftSide />
      <Divider />
    </Box>
  );
};

export default Contact;
