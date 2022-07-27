/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { PopupBox } from './components';

import Container from 'components/Container';

const PopupWithDiscount = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   setTimeout(function () {
  //     setOpen(true);
  //   }, 5000);
  // }, []);
  return (
    <Container display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box>
        <Button
          color={'primary'}
          size={'large'}
          fullWidth
          sx={{
            bgcolor: alpha(theme.palette.primary.light, 0.1),
            fontWeight: 700,
            display: 'none',
          }}
          onClick={() => setOpen(true)}
        >
          Click to open the popup
        </Button>
        <PopupBox open={open} onClose={() => setOpen(false)} />
      </Box>
    </Container>
  );
};

export default PopupWithDiscount;
