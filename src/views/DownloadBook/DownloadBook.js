import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Headline, Form, Partners } from './components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const HireUs = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box>
        <Box
          sx={{
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container>
            <Headline />
          </Container>
        </Box>
        <Container maxWidth={1300} paddingBottom={'0 !important'}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '50px',
              ['@media (min-width:390px) and (max-width:600px)']: {
                // eslint-disable-line no-useless-computed-key

                flexDirection: 'column',
                gap: '20px',
              },
            }}
          >
            <Box>
              <Typography
                fontWeight={700}
                variant={'h1'}
                align={'left'}
                gutterBottom
                style={{ fontSize: '2.3rem' }}
                fontFamily={('intercom-font', 'Nunito', 'Arial')}
                sx={{
                  color: '#333',
                  paddingBottom: '1.4rem',
                  ['@media (min-width:390px) and (max-width:600px)']: {
                    // eslint-disable-line no-useless-computed-key

                    fontSize: '23px !important',
                    textAlign: 'left !important',
                  },
                }}
              >
                We delivering customer success
              </Typography>
              <Typography
                fontWeight={500}
                variant={'p'}
                align={'left'}
                gutterBottom
                style={{ fontSize: '1.5rem', paddingBottom: '20px' }}
                fontFamily={
                  ('Inter', 'intercom-font', 'Roboto', 'Nunito', 'sans-serif')
                }
                sx={{
                  color: '#333',
                  ['@media (min-width:390px) and (max-width:600px)']: {
                    // eslint-disable-line no-useless-computed-key

                    fontSize: '19px !important',
                    textAlign: 'center !important',
                    paddingBottom: '40px',
                  },
                }}
              >
                {/* <p
                  style={{
                    color: '#333',
                    fontWeight: '700',
                    fontSize: 'inherit',
                    display: 'inline',
                  }}
                >
                  enterprise software development{' '}
                </p> */}
                Get a complete IT solution for your business, including Web
                Design/ Development , Android/ IOS App Development & Digital
                Marketing,{' '}
                <p
                  style={{
                    color: '#333',
                    fontWeight: '700',
                    fontSize: 'inherit',
                    display: 'inline',
                  }}
                >
                  successfully delivered 1000+ Projects
                </p>{' '}
                worldwide.
              </Typography>
              <Box
                sx={{
                  fontSize: '20px',
                  ['@media (min-width:390px) and (max-width:600px)']: {
                    marginTop: '35px',
                    fontSize: '15px',
                  },
                }}
              >
                {[
                  'Excellent team',
                  'Effective delivery',
                  'Quality efforts',
                  'Genuineness and commitment',
                  'Up to 50% Cost saving',
                  'Source Code Authorization',
                  'Non-Disclosure Agreement',
                  'No Lock-In contract',
                  'Agile & DevOps Implementation',
                  'Clean Code',
                  'Fast and Easy On-boarding',
                  'Total Control Over the code',
                ].map((item, i) => (
                  <p key={i}>
                    {' '}
                    <CheckCircleIcon
                      fontSize={'medium'}
                      backgroundColor={'#2c4bff'}
                      style={{
                        marginRight: '10px',
                        color: '#2c4bff',
                      }}
                    />
                    <p
                      style={{
                        display: 'inline-block',
                        margin: '0px',
                      }}
                    >
                      {item}
                    </p>
                  </p>
                ))}
                <p style={{ color: '#333', fontSize: '14px' }}>
                  This site is protected by reCAPTCHA and the google Privacy
                  Policy and Terms of Service apply
                </p>
              </Box>
            </Box>
            <Form />
          </Box>
        </Container>
        <Container>
          <Divider />
        </Container>
        <Container paddingTop={'0 !important'}>
          <Partners />
        </Container>
      </Box>
    </Main>
  );
};

export default HireUs;
