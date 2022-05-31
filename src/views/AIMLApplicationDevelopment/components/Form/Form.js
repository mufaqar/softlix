/* eslint-disable react/no-unescaped-entities */
import React,{ useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'
import { useTheme } from '@mui/material/styles';
const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  phone: yup
    .string()
    .trim()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
      'Please enter a valid phone number.',
    ),
  budget: yup.string().required('Please specify your project budget'),
   ptype: yup.string().required('Please specify your project Project Type'),
  message: yup
    .string()
    .trim()
    .max(500, 'The message cannot contain more than 500 characters'),
});

const Form = () => {

const theme = useTheme();
const [firstName, setFname] = useState('')
const [lastName, setLname] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const[success, setSuccess] = useState('')
const [budget, setbudget] = useState('')
const [ptype, setptype] = useState('')
const[message, setMessage] = useState('')
const[btnLabel, setBtnLabel] = useState('Submit')
const [submitted, setSubmitted] = useState(false)

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    ptype: '',
    message: '',
  };

  const onSubmit = (values) => {
    setBtnLabel('Sending...');
    let data = {
      
    };
    data.firstName=formik.values.firstName;
    data.lastName=formik.values.lastName;
    data.email=formik.values.email;
    data.phone=formik.values.phone;
    data.budget=formik.values.budget;
    data.ptype=formik.values.ptype;
    data.message=formik.values.message;

    fetch('api/email2', {
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
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box
          component={Grid}
          marginBottom={{ xs: 10, sm: 0 }}
          container
          spacing={4}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Please tell us your name *
            </Typography>
            <TextField
              label="First name"
              variant="outlined"
              name={'firstName'}
              fullWidth
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Please tell us your name *
            </Typography>
            <TextField
              label="Last name"
              variant="outlined"
              name={'lastName'}
              fullWidth
              value={formik.values.lastName} 
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Please enter your email address *
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              name={'email'}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Please enter your phone number (optional)
            </Typography>
            <TextField
              label="Phone number"
              variant="outlined"
              name={'phone'}
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
           <Grid item xs={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Project Type
            </Typography>
            <TextField
              select
              label="Select Project Type"
              variant="outlined"
              name={'ptype'}
              fullWidth
              value={formik.values.ptype}
              onChange={formik.handleChange}
              error={formik.touched.ptype && Boolean(formik.errors.ptype)}
              helperText={formik.touched.ptype && formik.errors.ptype}
            >
              {[
                'iPhone App Development',
                'Android App Development',
                'Cross Platform Apps',
                'Windows App Development',
                'Mobile Website Design',
                'Hire Developers',
                'Web Application',
                'Web Portal',
                'Mobile App With Website Development',
                'IPhone and Android App Development',
                'Mobile design UI graphics',
                'Virtual Employee',
                'Marketing project',
                'Maintenance  and support',
                'General query',
                'Other Services/Technology',
              ].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Project budget
            </Typography>
            <TextField
              select
              label="Select Project Budget (in Lakh)"
              variant="outlined"
              name={'budget'}
              fullWidth
              value={formik.values.budget}
              onChange={formik.handleChange}
              error={formik.touched.budget && Boolean(formik.errors.budget)}
              helperText={formik.touched.budget && formik.errors.budget}
            >
              {[
                'Not Sure',
                '50000 to 1 Lac',
                '1 Lac to 2 Lacs',
                '2 Lacs to 5 Lacs',
                '5 Lacs to 10 Lacs',
                '10 Lacs to 20 Lacs',
                '20 Lacs to 30 Lacs',
                '30 Lacs to 50 Lacs',
                '50 Lacs Above',
              ].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Please tell us about your project (optional)
            </Typography>
            <TextField
              label="Message"
              variant="outlined"
              name={'message'}
              fullWidth
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Button size={'large'} variant={'contained'} type={'submit'}>
             {btnLabel}
            </Button>
            <Typography
              variant={'subtitle2'}
              color={'textSecondary'}
              sx={{ marginTop: 2 }}
              align={'center'}
            >
            {success} 
            </Typography>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
