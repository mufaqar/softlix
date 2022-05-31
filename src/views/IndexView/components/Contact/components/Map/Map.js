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
           We are ready to hear from you! If you have any questions, do not hesitate to leave us a message. We will be looking forward to it!
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.677922226045!2d77.38655839999998!3d28.6246822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff135b3084b%3A0x19ccb4e95c69306d!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1651040308281!5m2!1sen!2sin"
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
         <Box  component="a"
          href="tel:919818565561" sx={{color: '#2c4bff', textDecoration: 'none'}}>

           <Typography variant={'subtitle1'}>+9198185 65561</Typography>
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
         <Box  component="a"
          href="mailto:support@sitedesign.agency" sx={{color: '#2c4bff', textDecoration: 'none'}}> <Typography variant={'subtitle1'}> support@sitedesign.agency </Typography> </Box>
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
            Sector 63, Noida, UP, India, 201309
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
          <Typography variant={'subtitle1'}>
            RDMI Tech Ventures Pvt. Ltd
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Map;
