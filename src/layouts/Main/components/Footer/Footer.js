import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={3} sx={{ overflowX: 'hidden' }}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          sx={{
            gap: '100px',
            ['@media (min-width:390px) and (max-width:600px)']: {
              // eslint-disable-line no-useless-computed-key
              gap: '15px',
            },
          }}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box display={'flex'} sx={{ flexDirection: 'column', flex: '1' }}>
            <Box
              display={'flex'}
              component="a"
              href="/"
              title="Softlix"
              width={{ xs: 160, md: 170 }}
            >
              <Box
                component={'img'}
                src={
                  mode === 'light'
                    ? '/images/IMG_3570.png'
                    : '/images/IMG_3570.png'
                }
                height={1}
                width={1}
              />
            </Box>
            <Box
              sx={{
                ['@media (min-width:390px) and (max-width:600px)']: {
                  width: '90vw',
                },
              }}
            >
              <Box
                marginBottom={2}
                marginTop={4}
                sx={{
                  padding: '0px 8px 0px 0px',

                  ['@media (min-width:390px) and (max-width:600px)']: {
                    // eslint-disable-line no-useless-computed-key
                    textAlign: 'left',
                    padding: '0px 8px 0px 0px',
                    marginBottom: '8px',
                  },
                }}
              >
                <Typography
                  fontWeight={400}
                  variant={'h4'}
                  align={'left'}
                  gutterBottom
                  style={{ fontSize: '1.3rem' }}
                  fontFamily={('intercom-font', 'Nunito', 'Arial')}
                  sx={{
                    color: '#333',
                    ['@media (min-width:390px) and (max-width:600px)']: {
                      // eslint-disable-line no-useless-computed-key

                      fontSize: '16px !important',
                      textAlign: 'left !important',
                    },
                  }}
                >
                  Address
                </Typography>
                <Typography
                  fontWeight={400}
                  variant={'h6'}
                  align={'left'}
                  gutterBottom
                  style={{ fontSize: '1rem' }}
                  fontFamily={('intercom-font', 'Nunito', 'Arial')}
                  sx={{
                    color: '#333',
                    ['@media (min-width:390px) and (max-width:600px)']: {
                      // eslint-disable-line no-useless-computed-key

                      fontSize: '16px !important',
                      textAlign: 'left !important',
                    },
                  }}
                >
                  1401 21ST ST STE R SACRAMENTO, California, United States,
                  95811
                </Typography>
              </Box>
              {/* <Box maxWidth={600} margin={'0 auto'}>
                <Box
                  component={'form'}
                  // ref={formRef}
                  // onSubmit={formik.handleSubmit}
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
                    justifyContent={{ xs: 'center', md: 'start' }}
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
                      // onChange={formik.handleChange}
                      // error={formik.touched.email && Boolean(formik.errors.email)}
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
                        minWidth: 'auto',
                        padding: '0.5rem 1rem',
                        background: '#2251ff',
                        borderRadius: '0px',
                        fontSize: '1rem',
                        // '&:hover': {
                        //   backgroundColor: '#fff',
                        //   borderColor: '#2251ff',
                        //   color: '#2251ff',
                        //   border: '1px solid #2251ff',
                        // },
                      }}
                      // onClick={onSubmit}
                    >
                      Submit
                    </Box>
                  </Box>
                </Box>
              </Box> */}
            </Box>

            <Box
              sx={{
                color: '#000',
                display: 'flex',
                justifyContent: 'left',
                marginTop: '10px',
                fontSize: '18px !important',

                ['@media (min-width:390px) and (max-width:600px)']: {
                  // eslint-disable-line no-useless-computed-key
                  // flexDirection: 'column',
                  justifyContent: 'center',
                  margin: '0 auto',
                  width: '100%',
                },
              }}
            >
              <Button
                component="a"
                target="blank"
                href="https://facebook.com/softlixofficial/"
                size="medium"
                sx={{
                  padding: 0,
                  background: 'none!important',
                  minWidth: 'auto!important',
                  // ['@media (min-width:390px) and (max-width:600px)']: {
                  //   // eslint-disable-line no-useless-computed-key

                  //   fontSize: '16px !important',
                  //   // textAlign: 'left !important',
                  // },
                }}
              >
                <FacebookIcon
                  style={{
                    color: '#000',
                    fontSize: '2rem',
                    margin: '1rem ',
                  }}
                />
              </Button>
              <Button
                component="a"
                target="blank"
                href="https://www.linkedin.com/showcase/softlixglobal/"
                size="medium"
                sx={{
                  padding: 0,
                  background: 'none!important',
                  minWidth: 'auto!important',
                }}
              >
                <LinkedInIcon
                  style={{
                    color: '#000',
                    fontSize: '2rem',
                    margin: '1rem 0.5rem',
                  }}
                />
              </Button>
              <Button
                component="a"
                target="blank"
                href="https://twitter.com/Softlixglobal"
                size="medium"
                sx={{
                  padding: 0,
                  background: 'none!important',
                  minWidth: 'auto!important',
                }}
              >
                <TwitterIcon
                  style={{
                    color: '#000',
                    fontSize: '2rem',
                    margin: '1rem 0.5rem',
                  }}
                />
              </Button>
              <Button
                component="a"
                target="blank"
                href="https://youtube.com/channel/UCG9AQABVlwu89p-gNrzLSTA"
                size="medium"
                sx={{
                  padding: 0,
                  background: 'none!important',
                  minWidth: 'auto!important',
                }}
              >
                <YouTubeIcon
                  style={{
                    color: '#000',
                    fontSize: '2rem',
                    margin: '1rem 0.5rem',
                  }}
                />
              </Button>
              <Button
                component="a"
                target="blank"
                href="https://www.instagram.com/softlixglobal/"
                size="medium"
                sx={{
                  padding: 0,
                  background: 'none!important',
                  minWidth: 'auto!important',
                }}
              >
                <InstagramIcon
                  style={{
                    color: '#000',
                    fontSize: '2rem',
                    margin: '1rem 0.5rem',
                  }}
                />
              </Button>
              <Button
                component="a"
                target="blank"
                href="https://medium.com/@softlix"
                size="medium"
                sx={{
                  padding: 0,
                  background: 'none!important',
                  minWidth: 'auto!important',
                }}
              >
                <img
                  style={{
                    color: '#000',
                    fontSize: '2rem',
                    margin: '1rem 0.5rem',
                    marginRight: '-12px',
                  }}
                  src="https://img.icons8.com/sf-regular-filled/48/000000/medium-logo.png"
                />
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'end',
            }}
          >
            <Box
              display="flex"
              flexWrap={'wrap'}
              alignItems={'end'}
              justifyContent={'end'}
              sx={{
                flex: '1',
                gap: '25px',
                width: '500px',
                ['@media (min-width:390px) and (max-width:600px)']: {
                  // eslint-disable-line no-useless-computed-key
                  // flexDirection: 'column',
                  width: '100%',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '15px',
                  marginBottom: '20px',
                  marginTop: '20px',
                },
              }}
            >
              <Box marginTop={1} marginRight={2}>
                <Link
                  underline="hover"
                  component="a"
                  href="/"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  Home
                </Link>
              </Box>
              <Box marginTop={1} marginRight={2}>
                <Link
                  underline="hover"
                  component="a"
                  href="/portfolio"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  Portfolio
                </Link>
              </Box>
              <Box marginTop={1} marginRight={2}>
                <Link
                  underline="hover"
                  component="a"
                  href="/about"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  About Us
                </Link>
              </Box>
              <Box marginTop={1} marginRight={2}>
                <Link
                  underline="hover"
                  component="a"
                  href="/contact"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  Contact Us
                </Link>
              </Box>
              <Box marginTop={1} marginRight={2}>
                <Link
                  underline="hover"
                  component="a"
                  href="/contact"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  Contact Us
                </Link>
              </Box>
              {/* <Box marginTop={1} marginRight={2}>
                <Link
                  underline="hover"
                  component="a"
                  href="/pricing"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  Pricing
                </Link>
              </Box> */}
              <Box marginTop={1} marginRight={2}>
                <Link
                  underline="hover"
                  component="a"
                  href="/company-terms"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  Terms of use
                </Link>
              </Box>
              <Box marginTop={1} marginRight={2}>
                <Link
                  underline="hover"
                  component="a"
                  href="/privacy-policy"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  Privacy Policy
                </Link>
              </Box>
              <Box marginTop={1} marginRight={2}>
                <Link
                  underline="hover"
                  component="a"
                  href="/faq"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  FAQ
                </Link>
              </Box>
              <Box marginTop={1} marginRight={2}>
                <Link
                  underline="hover"
                  component="a"
                  href="/faq"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  Refund Policy
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            ['@media (min-width:390px) and (max-width:600px)']: {
              flexDirection: 'column',
            },
          }}
        >
          <Box sx={{ flex: '1', fontSize: '12px', textAlign: 'center' }}>
            <p>&copy; 2022, SOFTLIX Inc.</p>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
