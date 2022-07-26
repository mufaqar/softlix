import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const mock = [
  '/images/logo-1.png',
  '/images/blive.png',
  '/images/theprint.png',
  '/images/midday.png',
  '/images/dailyhunt.webp',
  '/images/newtrack.jpeg',
];

const LogoGridSimpleCentered = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box>
        <Box marginBottom={2}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            color={'primary'}
            align={'center'}
          >
            Featured on
          </Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
          {mock.map((item, i) => (
            <Box
              maxWidth={160}
              marginTop={2}
              marginRight={4}
              key={i}
              sx={{
                ['@media (min-width:320px) and (max-width:600px)']: {
                  // eslint-disable-line no-useless-computed-key
                  maxWidth: '130px',
                  flexWrap: 'wrap',
                },
              }}
            >
              <Box
                component="img"
                height={1}
                width={1}
                src={item}
                alt="..."
                sx={{
                  objectFit: 'contain',
                  filter:
                    theme.palette.mode === 'dark'
                      ? 'brightness(0) invert(0.7)'
                      : 'none',
                  ['@media (min-width:320px) and (max-width:600px)']: {
                    // eslint-disable-line no-useless-computed-key
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default LogoGridSimpleCentered;
