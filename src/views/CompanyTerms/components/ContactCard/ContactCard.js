import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const ContactCard = () => {
  const theme = useTheme();

  return (
    <Box
      component={Card}
      boxShadow={0}
      border={`1px solid ${theme.palette.divider}`}
    >
      <Box padding={{ xs: 2, sm: 3 }}>
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          How can you contact us about this notice?
        </Typography>
        <Typography
          variant={'body2'}
          color={'text.secondary'}
          sx={{
            marginBottom: 2,
          }}
        >
          If you have any questions or concerns about the privacy policy please
          contact us.
        </Typography>
        <Typography variant={'subtitle2'}>
          support@softlix.tech
          <br />
          bondwithus@softlix.tech
          <br />
          Sector 63, Noida, UP,
          <br />
          India, 201309
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
