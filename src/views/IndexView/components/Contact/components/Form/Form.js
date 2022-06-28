/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from 'react';
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
import LockIcon from '@mui/icons-material/Lock';
import Link from 'next/link';
// import Container from 'components/Container';
// import axios from 'axios';
import { useRouter } from 'next/router';
const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  phone: yup
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
  const form = useRef();
  const router = useRouter();
  const theme = useTheme();
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [btnLabel, setBtnLabel] = useState('Submit');
  const [submitted, setSubmitted] = useState(false);

  const callSheets = async (data) => {
    const response = await fetch('/api/sheets', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  };

  const initialValues = {
    firstName: '',
    phone: '',
    email: '',
    message: '',
  };
  const sendMail = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_CONTACT_US_ID,
        form.current,
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
    data.phone = formik.values.phone;
    data.email = formik.values.email;
    data.message = formik.values.message;

    sendMail();

    const response = callSheets(data);
    console.log(response);

    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Box sx={{ paddingTop: '0px' }}>
        <Box sx={{ paddingTop: '0px' }}>
          <Typography
            variant={'h4'}
            sx={{ fontWeight: 700, paddingTop: '0px' }}
          >
            Contact us
          </Typography>
          <Typography color="text.secondary">
            Fill in the form and we will reach back to you at our earliest!
          </Typography>
        </Box>
        <Box>
          <form ref={form} noValidate onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="First name"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="firstName"
                  fullWidth
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
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
                  name="phone"
                  fullWidth
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
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
                  <h5
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      // wordSpacing: '3px',
                      color: '#677788',
                    }}
                  >
                    <div style={{ display: 'inline', marginRight: '3px' }}>
                      <LockIcon style={{ margin: 0, padding: 0 }} />
                    </div>
                    <div style={{ marginLeft: '3px', marginRight: '3px' }}>
                      By clicking the "submit" button, you are agreeing to
                    </div>
                    <Link href={'/company-terms'}>
                      <a> Softlix terms of use </a>
                    </Link>
                    <div style={{ marginLeft: '3px', marginRight: '3px' }}>
                      and
                    </div>
                    <Link href={'/privacy-policy'}>
                      <a> privacy policy</a>
                    </Link>
                    .
                  </h5>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
  // return (
  //   <Box sx={{ paddingTop: '0px' }}>
  //     <Box sx={{ paddingTop: '0px' }}>
  //       <Typography
  //         variant={'h4'}
  //         sx={{ fontWeight: 700, paddingTop: '0px' }}
  //       >
  //         Contact us
  //       </Typography>
  //       <Typography color="text.secondary">
  //         Fill in the form and we will reach back to you at our earliest!
  //       </Typography>
  //     </Box>
  //     <Box>
  //       <form ref={form} noValidate onSubmit={formik.handleSubmit}>
  //         <Grid container spacing={4}>
  //           <Grid item xs={12} sm={6}>
  //             <TextField
  //               sx={{ height: 54 }}
  //               label="First name"
  //               variant="outlined"
  //               color="primary"
  //               size="medium"
  //               name="firstName"
  //               fullWidth
  //               value={formik.values.firstName}
  //               onChange={formik.handleChange}
  //               error={formik.touched.firstName && Boolean(formik.errors.firstName)}
  //               helperText={formik.touched.firstName && formik.errors.firstName}
  //             />
  //           </Grid>
  //           <Grid item xs={12} sm={6}>
  //             <TextField
  //               sx={{ height: 54 }}
  //               label="Mobile"
  //               variant="outlined"
  //               color="primary"
  //               size="medium"
  //               name="phone"
  //               fullWidth
  //               value={formik.values.phone}
  //               onChange={formik.handleChange}
  //               error={formik.touched.phone && Boolean(formik.errors.phone)}
  //               helperText={formik.touched.phone && formik.errors.phone}
  //             />
  //           </Grid>
  //           <Grid item xs={12}>
  //             <TextField
  //               sx={{ height: 54 }}
  //               label="Email"
  //               type="email"
  //               variant="outlined"
  //               color="primary"
  //               size="medium"
  //               name="email"
  //               fullWidth
  //               value={formik.values.email}
  //               onChange={formik.handleChange}
  //               error={formik.touched.email && Boolean(formik.errors.email)}
  //               helperText={formik.touched.email && formik.errors.email}
  //             />
  //           </Grid>
  //           <Grid item xs={12}>
  //             <TextField
  //               label="Requirements"
  //               multiline
  //               rows={6}
  //               variant="outlined"
  //               color="primary"
  //               size="medium"
  //               name="message"
  //               fullWidth
  //               value={formik.values.message}
  //               onChange={formik.handleChange}
  //               error={
  //                 formik.touched.message && Boolean(formik.errors.message)
  //               }
  //               helperText={formik.touched.message && formik.errors.message}
  //             />
  //           </Grid>
  //           <Grid item xs={12}>
  //             <Button
  //               sx={{ height: 54, minWidth: 150 }}
  //               variant="contained"
  //               color="primary"
  //               size="medium"
  //               type="submit"
  //             >
  //               {btnLabel}
  //             </Button>
  //             <Box>{success}</Box>
  //           </Grid>
  //           <Grid item xs={12}>
  //             <Typography color="text.secondary">
  //               We Typically reply in Maximum 2 Hours
  //             </Typography>
  //           </Grid>
  //           <Grid item xs={12}>
  //             <Divider />
  //           </Grid>
  //           <Grid item xs={12}>
  //             <Box>
  //               <Typography component="p" variant="body2" align="left">
  //                 By clicking on "submit" you agree to our{' '}
  //                 <Box
  //                   component="a"
  //                   href="/privacy-policy"
  //                   color={theme.palette.text.primary}
  //                   fontWeight={'700'}
  //                 >
  //                   Privacy Policy
  //                 </Box>
  //                 .
  //               </Typography>
  //             </Box>
  //           </Grid>
  //         </Grid>
  //       </form>
  //     </Box>
  //   </Box>
  // );
};

// return (
//   <Box
//     sx={{
//       width: 1,
//       height: 1,
//       overflow: 'hidden',
//     }}
//   >
//     <Box sx={{ paddingTop: '0px' }}>
//       <Box sx={{ paddingTop: '0px' }}>
//         <Typography variant={'h4'} sx={{ fontWeight: 700, paddingTop: '0px' }}>
//           Contact us
//         </Typography>
//         <Typography color="text.secondary">
//           Fill in the form and we will reach back to you at our earliest!
//         </Typography>
//       </Box>
//       <Box>
//         <form ref={form} noValidate onSubmit={formik.handleSubmit}>
//           <Grid container spacing={4}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 sx={{ height: 54 }}
//                 label="First name"
//                 variant="outlined"
//                 color="primary"
//                 size="medium"
//                 name="firstName"
//                 fullWidth
//                 value={formik.values.firstName}
//                 onChange={formik.handleChange}
//                 error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//                 helperText={formik.touched.firstName && formik.errors.firstName}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 sx={{ height: 54 }}
//                 label="Mobile"
//                 variant="outlined"
//                 color="primary"
//                 size="medium"
//                 name="phone"
//                 fullWidth
//                 value={formik.values.phone}
//                 onChange={formik.handleChange}
//                 error={formik.touched.phone && Boolean(formik.errors.phone)}
//                 helperText={formik.touched.phone && formik.errors.phone}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 sx={{ height: 54 }}
//                 label="Email"
//                 type="email"
//                 variant="outlined"
//                 color="primary"
//                 size="medium"
//                 name="email"
//                 fullWidth
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 error={formik.touched.email && Boolean(formik.errors.email)}
//                 helperText={formik.touched.email && formik.errors.email}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Requirements"
//                 multiline
//                 rows={6}
//                 variant="outlined"
//                 color="primary"
//                 size="medium"
//                 name="message"
//                 fullWidth
//                 value={formik.values.message}
//                 onChange={formik.handleChange}
//                 error={formik.touched.message && Boolean(formik.errors.message)}
//                 helperText={formik.touched.message && formik.errors.message}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 sx={{ height: 54, minWidth: 150 }}
//                 variant="contained"
//                 color="primary"
//                 size="medium"
//                 type="submit"
//               >
//                 {btnLabel}
//               </Button>
//               <Box>{success}</Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography color="text.secondary">
//                 We Typically reply in Maximum 2 Hours
//               </Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Divider />
//             </Grid>
//             <Grid item xs={12}>
//               <Box>
//                 <Typography component="p" variant="body2" align="left">
//                   By clicking on "submit" you agree to our{' '}
//                   <Box
//                     component="a"
//                     href="/privacy-policy"
//                     color={theme.palette.text.primary}
//                     fontWeight={'700'}
//                   >
//                     Privacy Policy
//                   </Box>
//                   .
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </form>
//       </Box>
//     </Box>
//     <Divider />
//   </Box>)

export default Contact;
