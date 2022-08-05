/* eslint-disable no-undef */
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useRef, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';

const validationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required'),
});

const FooterNewsletter = () => {
  const [email, setEmail] = useState('');

  const router = useRouter();
  const formRef = useRef();
  // const theme = useTheme();
  // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
  //   defaultMatches: true,
  // });

  const initialValues = {
    email: '',
  };

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
          // console.log(form.current);
          router.push('/thank-page');
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const onSubmit = async (values) => {
    let data = {};
    data.email = formik.values.email;

    callSheets(data);
    console.log(data);
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  useEffect(() => {
    console.log(formik.values);
    // console.log(initialValues);
  }, [formik.values]);

  return (
    <Box>
      <Box
        marginBottom={4}
        sx={{
          ['@media (min-width:390px) and (max-width:600px)']: {
            // eslint-disable-line no-useless-computed-key
            textAlign: 'left',
            padding: '0px 8px',
            marginBottom: '8px',
          },
        }}
      >
        <Typography
          fontWeight={700}
          variant={'h4'}
          align={'center'}
          gutterBottom
          style={{ fontSize: '1.8rem' }}
          fontFamily={('intercom-font', 'Nunito', 'Arial')}
          sx={{
            ['@media (min-width:390px) and (max-width:600px)']: {
              // eslint-disable-line no-useless-computed-key

              fontSize: '24px !important',
              textAlign: 'left !important',
            },
          }}
        >
          Sign up for our Monthly Highlights newsletter
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'#333'}
          align={'center'}
          style={{ fontSize: '1.1rem' }}
          fontFamily={('intercom-font', 'Nunito', 'Arial')}
          sx={{
            ['@media (min-width:390px) and (max-width:600px)']: {
              // eslint-disable-line no-useless-computed-key
              display: 'none',
            },
          }}
        >
          Don't miss this roundup of our newest and most distinctive insights
        </Typography>
      </Box>
      <Box maxWidth={600} margin={'0 auto'}>
        <Box
          component={'form'}
          ref={formRef}
          onSubmit={formik.handleSubmit}
          noValidate
          autoComplete="off"
          sx={{
            '& .MuiInputBase-input.MuiOutlinedInput-input': {
              bgcolor: 'background.paper',
            },
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: 'row', md: 'row' }}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            justifyContent={{ xs: 'center' }}
            sx={{
              border: 'none',
              outline: 'none',
            }}
          >
            <TextField
              flex={'1 1 auto'}
              // component={TextField}
              name="email"
              fullWidth
              // value={formik.values.email}
              label="Enter your email"
              height={54}
              type="email"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              // helperText={formik.touched.email && formik.errors.email}
              sx={{
                maxWidth: 422,
                backgroundColor: '#fff',
                // border: '1px solid #000 !important',
                outline: 'none !important',
                borderRadius: '0px',
                color: '#000',

                ['@media (min-width:390px) and (max-width:600px)']: {
                  maxWidth: 280,
                },
              }}
            />
            <Box
              component={Button}
              variant="contained"
              height={54}
              marginTop={{ xs: 0, md: 0 }}
              marginLeft={{ xs: 1, md: 2 }}
              sx={{
                padding: '0.5rem 1rem',
                background: '#2251FF',
                borderRadius: '0px',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: '#fff',
                  borderColor: '#2251ff',
                  color: '#2251ff',
                  border: '1px solid #2251ff',
                },
              }}
              onClick={onSubmit}
            >
              Subscribe
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterNewsletter;
