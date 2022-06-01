import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { FormGroup } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';
import MenuItem from '@mui/material/MenuItem';
//import axios from 'axios'
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  // lastName: yup
  //   .string()
  //   .trim()
  //   .min(2, 'Please enter a valid name')
  //   .max(50, 'Please enter a valid name')
  //   .required('Please specify your last name'),
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

const PopupBox = ({ onClose, open }) => {
  const router = useRouter();
  const formRef = useRef();
  const theme = useTheme();
  const [firstName, setFname] = useState('');
  const [lastName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState('');
  const [budget, setbudget] = useState('');
  const [ptype, setptype] = useState('');
  const [message, setMessage] = useState('');
  const [btnLabel, setBtnLabel] = useState('Request A Call Back');
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    firstName: '',
    //lastName: '',
    email: '',
    phone: '',
    budget: '',
    ptype: '',
    message: '',
  };
  const sendMail = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_HIRE_US_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log(form.current);
          router.push('/thank-page');
        },
        (error) => {
          console.log(error.text);
          setBtnLabel('Submit');
        },
      );
  };
  const onSubmit = (values) => {
    setBtnLabel('Sending...');
    let data = {};
    data.firstName = formik.values.firstName;
    // data.lastName=formik.values.lastName;
    data.email = formik.values.email;
    data.phone = formik.values.phone;
    data.budget = formik.values.budget;
    data.ptype = formik.values.ptype;
    data.message = formik.values.message;

    sendMail();

    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={'500px'}
      sx={{
        // width: '100%',
        '& .MuiPaper-root': {
          // borderRadius: 4,
          width: '100%',
          maxWidth: '420px',
          // width: '100%',
          borderRadius: '0.4375rem',
          margin: '0',
          paddingTop: '0px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingY: { xs: 0, sm: 0 },
          paddingX: { xs: 0, sm: 0 },
          width: '100%',
          maxWidth: '420px',
          // width: '100%',
          margin: '0',
          padding: '0',
        }}
      >
        <Box sx={{ width: '100%', margin: '0', padding: '0' }}>
          <Box
            md="4"
            sx={{
              width: '100%',
              margin: '0',
              padding: '0',
              border: 'none!important',
            }}
          >
            {/*<Button
            block
            Boxor="default"
            type="button"
          >

          </Button>*/}
            <Box>
              <Box className=" Box-body p-0">
                <Box className=" bg-secondary shadow border-0">
                  <Typography
                    align={'center'}
                    sx={{
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      padding: '10px',
                      position: 'absolute',
                      right: '5px',
                      zIndex: '99',
                    }}
                    onClick={onClose}
                  >
                    <svg
                      sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <g xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z"
                            fill="#2c4bff"
                            data-original="#000000"
                            // class=""
                          ></path>
                          <path
                            d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z"
                            fill="#2c4bff"
                            data-original="#000000"
                            // class=""
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </Typography>
                  <Box
                    className=" bg-white pb-5"
                    sx={{ padding: '1.25rem 1.5rem', border: 'none!important' }}
                  >
                    <Box
                      className=" text-muted text-center mb-3"
                      sx={{
                        fontWeight: '400',
                        color: '#8898aa',
                        textAlign: 'center',
                        border: 'none!important',
                      }}
                    >
                      <Box
                        className="text-center text-muted mb-4"
                        sx={{
                          fontWeight: '400',
                          color: '#8898aa',
                          textAlign: 'center',
                          border: 'none!important',
                        }}
                      >
                        <Box sx={{ color: '#2c4bff' }}>
                          Request A Call Back or Call Directly on{' '}
                          <Button
                            variant="text"
                            color="primary"
                            component="a"
                            target="blank"
                            href="tel:+919818565561"
                            size="medium"
                            sx={{ padding: 0 }}
                          >
                            +919818565561{' '}
                          </Button>{' '}
                        </Box>
                      </Box>
                      <small>
                        We are always available to Answer your query
                      </small>
                    </Box>
                    {/*
                  <Box className=" btn-wrapper text-center" sx={{ padding: '1.25rem 1.5rem', paddingBottom:'2rem 3rem !important', width:'100%', justifyContent: 'space-between', display: 'flex', fontSize:'12px'}}>
                     <Button
                      className=" btn-neutral btn-icon"
                      Boxor="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      sx={{  width:'48%', boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', padding:'0.625rem 1.25rem', fontWeight:'bold',  textTransform:'capitalize', letterSpacing: '.025em', fontSize: '.875rem'}}
                    >

                      <img width="20px"
                          alt="..."
                          src="/images/github.svg"
                        ></img>
                      <span  sx={{  marginLeft:'0.75em', }} className=" btn-inner--text">Github</span>
                    </Button>

                    <Button
                      className=" btn-neutral btn-icon"
                      Boxor="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                       sx={{ width:'48%', boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', padding:'0.625rem 1.25rem', fontWeight:'bold',  textTransform:'capitalize', letterSpacing: '.025em', fontSize: '.875rem'}}
                    >

                        <img width="20px"
                          alt="..."
                          src="/images/google.svg"
                          sx={{  marginRight:'0.75em' }}
                        ></img>

                      <span  marginLeft="10px" className=" btn-inner--text">Google</span>
                    </Button>
                  </Box>
                  */}
                  </Box>
                  <Box
                    className=" px-lg-5 py-lg-5"
                    sx={{
                      paddingTop: '1rem !important',
                      padding: '1rem !important',
                      backgroundColor: '#f7fafc !important',
                      borderTop: '1px solid rgba(0,0,0,0.05)',
                    }}
                  >
                    {/* <Box className="text-center text-muted mb-4" sx={{ fontWeight: '400', color: '#8898aa', textAlign:'center',  border:'none!important', marginBottom: '1.5rem !important' }}>
                    <small>Or sign in with credentials</small>
                  </Box> */}

                    <form ref={formRef} onSubmit={formik.handleSubmit}>
                      <Box
                        component={Grid}
                        marginBottom={{ xs: 10, sm: 0 }}
                        container
                        spacing={2}
                      >
                        <Grid item xs={12} sm={6}>
                          <Typography
                            variant={'subtitle2'}
                            sx={{ marginBottom: 1 }}
                          >
                            First Name *
                          </Typography>
                          <TextField
                            label="First name"
                            variant="outlined"
                            name={'firstName'}
                            fullWidth
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.firstName &&
                              Boolean(formik.errors.firstName)
                            }
                            helperText={
                              formik.touched.firstName &&
                              formik.errors.firstName
                            }
                          />
                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
              Last Name *
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
          </Grid> */}
                        <Grid item xs={12} sm={6}>
                          <Typography
                            variant={'subtitle2'}
                            sx={{ marginBottom: 1 }}
                          >
                            Email *
                          </Typography>
                          <TextField
                            label="Email"
                            variant="outlined"
                            name={'email'}
                            fullWidth
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.email &&
                              Boolean(formik.errors.email)
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                          />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <Typography
                            variant={'subtitle2'}
                            sx={{ marginBottom: 1 }}
                          >
                            Phone (optional)
                          </Typography>
                          <TextField
                            label="Phone number"
                            variant="outlined"
                            name={'phone'}
                            fullWidth
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.phone &&
                              Boolean(formik.errors.phone)
                            }
                            helperText={
                              formik.touched.phone && formik.errors.phone
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant={'subtitle2'}
                            sx={{ marginBottom: 2 }}
                          >
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
                            error={
                              formik.touched.ptype &&
                              Boolean(formik.errors.ptype)
                            }
                            helperText={
                              formik.touched.ptype && formik.errors.ptype
                            }
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
                        <Grid item xs={12}>
                          <Typography
                            variant={'subtitle2'}
                            sx={{ marginBottom: 2 }}
                          >
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
                            error={
                              formik.touched.budget &&
                              Boolean(formik.errors.budget)
                            }
                            helperText={
                              formik.touched.budget && formik.errors.budget
                            }
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
                          <Typography
                            variant={'subtitle2'}
                            sx={{ marginBottom: 1 }}
                          >
                            Project Details (optional)
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
                            error={
                              formik.touched.message &&
                              Boolean(formik.errors.message)
                            }
                            helperText={
                              formik.touched.message && formik.errors.message
                            }
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
                          <Button
                            size={'large'}
                            variant={'contained'}
                            type={'submit'}
                            sx={{ backgroundColor: '#4a37a5!important' }}
                          >
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

                      {/*
                    <FormGroup className=" mb-3">
                      <Grid item xs={12} sm={6} sx={{ boxShadow: '0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)',
    border: '0', transition: 'box-shadow .15s ease', borderRadius: '0.25rem', position: 'relative',
    display: 'flex', flexWrap: 'wrap', alignItems: 'stretch',  width: '100%', padding: '0px 10px', background: '#fff', marginBottom: '1rem !important' }}>
                        <Box addonType="prepend" sx={{  width:'100%',
              "& fieldset": {
            display: 'none',
    },
     }}>
                          <Box>

                          </Box>
                          <OutlinedInput  placeholder="Email" type="email" sx={{ padding:'0!important' }} />
                        </Box>

                      </Grid>
                    </FormGroup>
                    <FormGroup>
                      <Grid item xs={12} sm={6} sx={{ boxShadow: '0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)',
    border: '0', transition: 'box-shadow .15s ease', borderRadius: '0.25rem', position: 'relative',
    display: 'flex', flexWrap: 'wrap', alignItems: 'stretch',  width: '100%', padding: '0px 10px', background: '#fff',  marginBottom: '1rem !important' }}>
                        <Box addonType="prepend" sx={{  width:'100%',
              "& fieldset": {
            display: 'none',
    },
     }}>
                          <Box>
                            <i className=" ni ni-lock-circle-open"></i>
                          </Box>
                          <OutlinedInput  placeholder="Password" type="password" />
                        </Box>

                      </Grid>
                    </FormGroup>
                    <Box className=" custom-control custom-control-alternative custom-checkbox" sx={{cursor: 'pointer',  fontSize: '.875rem',  height: '1rem',   lineHeight: '1.5',  color: '#525f7f'}}>
                      <input
                        className=" custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      ></input>
                      <label
                        className=" custom-control-label"
                        htmlFor=" customCheckLogin"
                      >
                        <span>Remember me</span>
                      </label>
                    </Box>
                    <Box className=" text-center" sx={{ textAlign: 'center' }}>
                      <Button className=" my-4" Boxor="primary" type="button" sx={{color: '#fff',  backgroundColor: '#5e72e4!important', borderColor: '#5e72e4', boxShadow: '0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)', letterSpacing: '.025em', fontSize: '.875rem', border: '1px solid transparent', padding: '0.625rem 1.25rem', margin: '1.5rem 0 !important'}}>
                        Sign in
                      </Button>
                    </Box>
    */}
                    </form>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

PopupBox.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default PopupBox;
