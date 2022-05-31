import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
//import ThemeModeToggler from 'components/ThemeModeToggler';

//const TopNav = ({ colorInvert = false }) => {
const TopNav = () => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
      <Box marginLeft={4}>
        <Button
          variant="text"
          color="primary"
          component="a"
          target="blank"
          href="tel:+919818565561"
          size="medium"
          sx={{padding:0}}
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>&nbsp;CALL: +919818565561
        </Button>
      </Box>
      <Box marginLeft={0.5}>
        <Button
          variant="text"
          color="primary"
          component="a"
          target="blank"
          href="https://www.facebook.com/Sitedesignofficial"
          size="medium"
          sx={{padding:0, background:'none!important', minWidth:'auto!important'}}
        >    <IconButton aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
        </Button>
        <Button
          variant="text"
          color="primary"
          component="a"
          target="blank"
          href="https://www.instagram.com/sitedesignagency/"
          size="medium"
          sx={{padding:0, background:'none!important', minWidth:'auto!important'}}
        >      <IconButton aria-label="Instagram" >
            <InstagramIcon />
          </IconButton>
        </Button>
      </Box>
      {/* <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="/demos"
          color={colorInvert ? 'common.white' : 'text.primary'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Demos
          <Box
            padding={0.5}
            display={'inline-flex'}
            borderRadius={1}
            bgcolor={'primary.main'}
            marginLeft={1}
          >
            <Typography
              variant={'caption'}
              sx={{ color: 'common.white', lineHeight: 1 }}
            >
              new
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="/blocks"
          color={colorInvert ? 'common.white' : 'text.primary'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Components
        </Link>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="/docs/introduction"
          color={colorInvert ? 'common.white' : 'text.primary'}
        >
          Docs
        </Link>
      </Box>
      <Box>
        <ThemeModeToggler />
      </Box> */}
    </Box>
  );
};

TopNav.propTypes = {
  colorInvert: PropTypes.bool,
};

export default TopNav;
