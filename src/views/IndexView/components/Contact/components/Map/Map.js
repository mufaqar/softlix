/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const Map = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Box marginBottom={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Get in touch
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={'text.secondary'}>
            We are ready to hear from you! If you have any questions, do not
            hesitate to leave us a message. We will be looking forward to it!
          </Typography>
        </Box>
      </Box>
      <Box marginY={3}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.356376331496!2d-121.48248508439067!3d38.57164037368421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad0dd31655555%3A0x4400fdc2363ca6c4!2s1401%2021st%20Street%20Suite%20R%2C%20Sacramento%2C%20CA%2095811%2C%20USA!5e0!3m2!1sen!2s!4v1668687879587!5m2!1sen!2s"
          style={{
            minHeight: 300,
            borderRadius: 8,
            filter:
              theme.palette.mode === 'dark'
                ? 'grayscale(0.5) opacity(0.7)'
                : 'none',
          }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Call us:
          </Typography>
          <Box
            component="a"
            href="tel:+1 929-460-0564"
            sx={{ color: '#2c4bff', textDecoration: 'none' }}
          >
            <Typography variant={'subtitle1'}>+1 929-460-0564</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Email us:
          </Typography>
          <Box
            component="a"
            href="mailto:support@softlix.tech"
            sx={{ color: '#2c4bff', textDecoration: 'none' }}
          >
            {' '}
            <Typography variant={'subtitle1'}>
              {' '}
              support@softlix.tech{' '}
            </Typography>{' '}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Address:
          </Typography>
          <Typography variant={'subtitle1'}>
            1401 21ST ST STE R SACRAMENTO, California, United States, 95811
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Company:
          </Typography>
          <Typography variant={'subtitle1'}>SOFTLIX Inc.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Map;
