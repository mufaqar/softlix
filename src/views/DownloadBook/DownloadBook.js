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
                Download E-book
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
                for App DesignTrends in 2022 successfully delivered 1000+
                Projects
              </Typography>
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
