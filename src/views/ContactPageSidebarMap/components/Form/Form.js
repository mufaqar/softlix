/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';

import Container from 'components/Container';
import axios from 'axios';
const validationSchema = yup.object({
  fname: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  mobile: yup
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
  message: yup.string().trim().required('Please specify your requirements'),
});

const Contact = () => {
  const formRef = useRef();
  const router = useRouter();
  const theme = useTheme();
  const [fname, setFname] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [btnLabel, setBtnLabel] = useState('Submit');
  const [submitted, setSubmitted] = useState(false);

  const LeftSide = () => {
    const sendMail = () => {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_CONTACT_US_ID,
          formRef.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY,
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log(formRef.current);
            console.log(formRef);
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
      data.fname = formik.values.fname;
      data.mobile = formik.values.mobile;
      data.email = formik.values.email;
      data.message = formik.values.message;

      sendMail();

      //   fetch('api/email', {
      //     method: 'POST',
      //     headers: {
      //       Accept: 'application/json, text/plain, */*',
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(data),
      //   }).then((res) => {
      //     console.log('Response received');
      //     if (res.status === 200) {
      //       console.log('Response succeeded!');
      //       setSubmitted(true);
      //       setFname('');
      //       setMobile('');
      //       setEmail('');
      //       setMessage('');
      //       setSuccess('Email sent successfully');
      //       setBtnLabel('Sent');
      //     }
      //   });
      //   return values;
      // };
      return values;
    };
    const initialValues = {
      fname: '',
      mobile: '',
      email: '',
      message: '',
    };
    const formik = useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });

    return (
      <Box>
        <Box marginBottom={4}>
          <Typography variant={'h3'} sx={{ fontWeight: 700 }} gutterBottom>
            Contact us
          </Typography>
          <Typography color="text.secondary" marginBottom={4}>
            SOFTLIX is your one-stop solutions provider for Web, Mobile and
            Software Development. We strive day and night to deliver quality
            services to our clients, and to address their design and development
            needs. We strongly believe that integrity, dedication, punctuality
            and confidentiality are the key values we carry to build long-term
            business relationships.
          </Typography>

          <Typography color="text.secondary">
            Fill in the form and we will reach back to you at our earliest!
          </Typography>
        </Box>
        <Box>
          <form ref={formRef} noValidate onSubmit={formik.handleSubmit}>
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
                  onChange={formik.handleChange}
                  error={formik.touched.fname && Boolean(formik.errors.fname)}
                  helperText={formik.touched.fname && formik.errors.fname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="Mobile"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="mobile"
                  fullWidth
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
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
                <Box>{success}</Box>
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

  const RightSide = () => {
    return (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.677922226045!2d77.38655839999998!3d28.6246822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff135b3084b%3A0x19ccb4e95c69306d!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1651040308281!5m2!1sen!2sin"
        style={{
          minHeight: 300,
          filter:
            theme.palette.mode === 'dark'
              ? 'grayscale(0.5) opacity(0.7)'
              : 'none',
        }}
      />
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
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            width={1}
            order={{ xs: 2, md: 1 }}
          >
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              minHeight: { xs: 300, md: 600 },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};
export default Contact;
