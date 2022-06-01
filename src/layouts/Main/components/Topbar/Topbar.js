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
              : '/images/IMG_3570.png'
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
            title={'Blog'}
            id={'Blog-pages'}
            colorInvert={colorInvert}
            link={'/blog'}
          />
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
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
