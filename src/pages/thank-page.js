import React from 'react';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// import PinterestIcon from '@mui/icons-material/Pinterest';

import Main from 'layouts/Main';
import Container from 'components/Container';

const Thank = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Box
        bgcolor={theme.palette.alternate.main}
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
        marginTop={-12}
        paddingTop={12}
        textAlign={'center'}
      >
        <Container>
          <Grid container justifyContent={'center'}>
            <Grid
              item
              container
              alignItems={'center'}
              justifyContent={'center'}
              xs={12}
              md={6}
            >
              <Typography
                variant="h1"
                component={'h1'}
                align={isMd ? 'left' : 'center'}
                sx={{ fontWeight: 700, marginBottom: '30px' }}
              >
                <CheckRoundedIcon
                  fontSize="large"
                  sx={{
                    background: ' #0000d3',
                    borderRadius: '50%',
                    color: 'white',
                    fontSize: '5rem',
                  }}
                />
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  component="p"
                  color="text.primary"
                  align={isMd ? 'left' : 'center'}
                  style={{
                    fontSize: '4.135rem',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  Thank you!
                  <br />
                </Typography>
                <Typography
                  variant="h1"
                  component="p"
                  color="text.secondary"
                  align={isMd ? 'left' : 'center'}
                  style={{
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    width: '82vw',
                    marginTop: '30px',
                    marginBottom: '30px',
                    fontWeight: '400',
                  }}
                >
                  Thank you for Providing the details, Our team Will Get in
                  Touch with you Soon.
                  <br />
                </Typography>
              </Box>
              <Box
                marginTop={6}
                display={'flex'}
                sx={{
                  gap: '100px',
                  ['@media (min-width:350px) and (max-width:600px)']: {
                    // eslint-disable-line no-useless-computed-key
                    flexDirection: 'column',
                    gap: '30px',
                  },
                }}
                // justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    // width: '55vw',

                    // justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{
                      background: 'white',
                      borderRadius: '8px',
                      // width: '55vw',
                      padding: '20px 30px',
                      // width: '100%',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '60px',
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="p"
                      color="text.primary"
                      // align={isMd ? 'left' : 'center'}
                      style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                    >
                      Connect with us
                    </Typography>
                    <div
                      style={{
                        color: '#2c4bff',
                        display: 'flex',
                        justifyContent: 'center',
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
                        }}
                      >
                        <FacebookIcon
                          style={{ fontSize: '3rem', margin: '1rem' }}
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
                          style={{ fontSize: '3rem', margin: '1rem' }}
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
                          style={{ fontSize: '3rem', margin: '1rem' }}
                        />
                      </Button>
                      {/* <PinterestIcon
                        style={{ fontSize: '3rem', margin: '1rem' }}
                      /> */}
                    </div>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // width: '55vw',
                    background: 'white',
                    borderRadius: '8px',
                    padding: '20px 30px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '60px',
                    flex: 1,
                    // marginTop: '100px',
                  }}
                >
                  <Typography
                    variant="h5"
                    component="p"
                    color="text.primary"
                    // align={isMd ? 'left' : 'center'}
                    style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                  >
                    Visit Our Website
                  </Typography>
                  <Button
                    component={Link}
                    variant="contained"
                    color="primary"
                    size="large"
                    href={'/'}
                    sx={{ width: '240px' }}
                  >
                    Visit Website
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default Thank;
