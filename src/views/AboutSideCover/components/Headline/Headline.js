import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Typography
          fontWeight={600}
          variant={'h2'}
          gutterBottom
          align={'center'}
        >
          About us
        </Typography>

        <Typography variant="h6" color={'text.secondary'} align={'center'}>
          SOFTLIX is your one-stop solutions provider for Web, Mobile and
          Software Development. We strive day and night to deliver quality
          services to our clients, and to address their design and development
          needs. We strongly believe that integrity, dedication, punctuality and
          confidentiality are the key values we carry to build long-term
          business relationships.
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
