import React from 'react';
import Box from '@mui/material/Box';

const mock = [
  '/images/logo-1.png',
  '/images/blive.png',
  '/images/theprint.png',
  '/images/midday.png'
];

const Partners = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
      {mock.map((item, i) => (
        <Box
          maxWidth={{ xs: 80, sm: 90 }}
          marginTop={{ xs: 1 }}
          marginRight={{ xs: 3, sm: 6, md: 12 }}
          key={i}
        >
          <Box
            component="img"
            height={1}
            width={1}
            src={item}
            alt="..."
            sx={{
              filter: 'contrast(0)',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Partners;
