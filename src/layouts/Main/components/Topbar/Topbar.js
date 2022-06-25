import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    //  landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Softlix"
        width={{ xs: 160, md: 170 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? '/images/IMG_3570.png'
              : '/images/IMG_3569.png'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'Home'}
            id={'home-pages'}
            colorInvert={colorInvert}
            link={'/'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Pricing'}
            id={'Pricing-pages'}
            colorInvert={colorInvert}
            link={'/pricing'}
          />
        </Box>

        <Box marginLeft={4}>
          <NavItem
            title={'Services'}
            id={'Services-pages'}
            colorInvert={colorInvert}
            link={'/service'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Resource'}
            id={'Resource-pages'}
            colorInvert={colorInvert}
            link={'#'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'Portfolio-pages'}
            colorInvert={colorInvert}
            link={'#'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'Blog-pages'}
            colorInvert={colorInvert}
            link={'/blog'}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Contact'}
            id={'Blog-pages'}
            colorInvert={colorInvert}
            link={'/contact'}
          />
        </Box>
        <Box marginLeft={4}>
          <Button
            component={'a'}
            // variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#0070f3',
              width: '140px',
              borderRadius: '7px',
              fontFamily: 'Inter',
              // fontSize: '16px',
              fontSize: '1rem',
              padding: '0.25rem .8rem',
              color: 'white',
              border: '1px solid #0070f3',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'rgba(0,118,255,.9)',
              },

              ['@media (min-width:391px) and (max-width:600px)']: {
                // eslint-disable-line no-useless-computed-key
                width: '20vw',
                height: '50px',
                fontSize: '12px',
              },
              // ['@media (min-width:300px) and (max-width:600px)']: {
              //   // eslint-disable-line no-useless-computed-key
              //   width: '20vw',
              //   height: '50px',
              //   fontSize: '12px',
              // },
            }}
            size="small"
            // fullWidth={isMd ? false : true}
            href={'/hire-us'}
          >
            Lets Talk
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Box marginLeft={4}>
          <Button
            component={'a'}
            // variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#0070f3',
              width: '20vw',
              borderRadius: '7px',
              fontFamily: 'Inter',
              fontSize: '1rem',
              padding: '0.25rem 0.8rem',
              color: 'white',
              border: '1px solid #0070f3',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'rgba(0,118,255,.9)',
              },
              ['@media (min-width:350px) and (max-width:600px)']: {
                // eslint-disable-line no-useless-computed-key
                width: '22vw',
                height: '40px',
                fontSize: '12px',
              },
            }}
            size="small"
            // fullWidth={isMd ? false : true}
            href={'/hire-us'}
          >
            Lets Talk
          </Button>
        </Box>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
            marginLeft: '14px',
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
