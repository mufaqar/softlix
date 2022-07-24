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
                  Subscribe to our newsletter
                </Typography>
              </Box>
              <Box maxWidth={600} margin={'0 auto'}>
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
              </Box>
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
                  href="/pricing"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  Pricing
                </Link>
              </Box>
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
            <Box
              sx={{
                color: '#000',
                display: 'flex',
                justifyContent: 'right',
                marginTop: '30px',
                fontSize: '20px !important',

                ['@media (min-width:390px) and (max-width:600px)']: {
                  // eslint-disable-line no-useless-computed-key
                  // flexDirection: 'column',
                  // justifyContent: 'start',
                  margin: '0 auto',
                },
              }}
            >
              <Button
                component="a"
                target="blank"
                href="https://facebook.com/softlixglobal"
                size="medium"
                sx={{
                  padding: 0,
                  background: 'none!important',
                  minWidth: 'auto!important',
                }}
              >
                <FacebookIcon
                  style={{ color: '#000', fontSize: '3rem', margin: '1rem' }}
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
                  style={{ color: '#000', fontSize: '3rem', margin: '1rem' }}
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
                  style={{ color: '#000', fontSize: '3rem', margin: '1rem' }}
                />
              </Button>
              {/* <PinterestIcon
                        style={{ fontSize: '3rem', margin: '1rem' }}
                      /> */}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {/* <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; 2022, SOFTLIX is Product of RDMI Tech Ventures Pvt. Ltd
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography> */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            ['@media (min-width:390px) and (max-width:600px)']: {
              // eslint-disable-line no-useless-computed-key
              flexDirection: 'column',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flex: '1',
              justifyContent: 'space-around',
              alignItems: 'center',
              ['@media (min-width:390px) and (max-width:600px)']: {
                // eslint-disable-line no-useless-computed-key
                flexDirection: 'column',
              },
            }}
          >
            <Box
              sx={{
                width: '180px',
                color: '#333',
                flex: '1',
                ['@media (min-width:390px) and (max-width:600px)']: {
                  // eslint-disable-line no-useless-computed-key
                  flexDirection: 'column',
                  width: '100%',
                },
              }}
            >
              <p>
                Get our latest thinking on your iPhone, iPad, or Android device.
              </p>
            </Box>
            <Box
              sx={{
                display: 'flex',
                ['@media (min-width:390px) and (max-width:600px)']: {
                  // eslint-disable-line no-useless-computed-key

                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              }}
            >
              <Box sx={{ marginRight: '5px' }}>
                <img
                  src="https://www.mckinsey.com/~/media/images/global/appleappstore.svg"
                  alt="appstore"
                />
              </Box>
              <Box>
                <img
                  src="https://www.mckinsey.com/~/media/images/global/googleplaystore.svg"
                  alt="playstore"
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ flex: '1', fontSize: '12px', textAlign: 'right' }}>
            <p>
              &copy; 2022, SOFTLIX is Product of RDMI Tech Ventures Pvt. Ltd
            </p>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
