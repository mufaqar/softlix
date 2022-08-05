/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import Link from 'next/link';
// import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';

// import MenuItem from '@mui/material/MenuItem';
//import axios from 'axios'
// import { useTheme } from '@mui/material/styles';
// import { useRouter } from 'next/router';

const PopupBox = ({ onClose, open }) => {
  // const router = useRouter();

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={'100%'}
      sx={{
        // width: '100%',
        '& .MuiPaper-root': {
          // borderRadius: 4,
          width: '100%',
          maxWidth: '100%',
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
            <Box>
              <Box className=" Box-body p-0">
                <Box className=" bg-secondary shadow border-0">
                  {/* <Typography
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
                  </Typography> */}
                  <Grid item xs={12} md={12}>
                    <Box
                      sx={{
                        fontSize: '1.3rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '90vw',
                        gap: '20px',
                        padding: '30px 40px',
                        ['@media (min-width:320px) and (max-width:600px)']: {
                          // eslint-disable-line no-useless-computed-key
                          flexDirection: 'column',
                          padding: '18px 10px',
                          gap: '0px',
                        },
                      }}
                    >
                      <Box
                        // style={{}}
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          // wordSpacing: '3px',
                          color: '#212121',
                          maxWidth: '60vw',
                          ['@media (min-width:390px) and (max-width:600px)']: {
                            // eslint-disable-line no-useless-computed-key
                            maxWidth: '100vw',
                            padding: '5px 10px',
                            fontSize: '16px',
                            fontFamily: 'sans-serif',
                          },
                        }}
                      >
                        <h3 style={{ margin: '0px' }}>
                          We use cookies to improve your experience{' '}
                        </h3>
                        <br /> We use cookies to deliver the best possible
                        experience on our website. To learn more, visit our
                        {'  '}
                        <Link href={'/privacy-policy'}>
                          <a
                            style={{
                              marginLeft: '4px',
                              marginRight: '4px',
                              display: 'contents',
                              cursor: 'pointer',
                            }}
                          >
                            {' '}
                            privacy policy.{' '}
                          </a>
                        </Link>
                        By continuing to use this site, or closing this box, you
                        consent to our use of cookies.
                        {/* <Link href={'/company-terms'}>
                          <a> Softlix terms of use </a>
                        </Link> */}
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Button
                          onClick={onClose}
                          component={'a'}
                          sx={{
                            backgroundColor: '#0000d3',
                            width: '125px',

                            fontFamily: 'Inter',
                            // fontSize: '16px',
                            fontSize: '1rem',
                            padding: '12px 10px',
                            borderRadius: '0px',
                            color: 'white',
                            // border: '1px solid  #0000d3',
                            fontWeight: 700,
                            '&:hover': {
                              backgroundColor: '#0000A9',
                            },

                            ['@media (min-width:390px) and (max-width:600px)']:
                              {
                                // eslint-disable-line no-useless-computed-key
                                width: '335px',
                                height: '45px',
                                padding: '12px 10px',
                                marginLeft: '15px',
                                marginTop: '10px',
                                fontSize: '16px',
                              },
                          }}
                          size="small"
                        >
                          Accept
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
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
