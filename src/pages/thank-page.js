import React from 'react';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

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
                    background: '#0070f3',
                    borderRadius: '50%',
                    color: 'white',
                    fontSize: '3rem',
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
                  color="text.secondary"
                  align={isMd ? 'left' : 'center'}
                  style={{ fontSize: '2.135rem' }}
                >
                  Thank you for Providing the details, Our team Will Get in
                  Touch with you Soon.
                  <br />
                  {/* If you think this is a problem with us, please{' '}
                  <Link href={''} underline="none">
                    tell us
                  </Link> */}
                </Typography>
              </Box>
              <Box
                marginTop={6}
                display={'flex'}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <Button
                  component={Link}
                  variant="contained"
                  color="primary"
                  size="large"
                  href={'/'}
                >
                  Back home
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default Thank;
