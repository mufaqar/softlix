import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { NavItem } from './components';

// const Industries = () => {
//   return (
//     <Grid container spacing={10} sx={{ width: '900px' }}>
//       <Grid item xs={4}>
//         <Typography fontWeight={700} marginBottom={2} color={'#0070F3'} noWrap>
//           Industries
//         </Typography>
//         {[
//           'HealthTech and MedTech',
//           'Retail',
//           'FinTech',
//           'Logistics',
//           'Travel',
//           'Education',
//         ].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             underline={'hover'}
//             color={'text.primary'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               fontFamily: ('Nunito', 'Inter'),
//             }}
//           >
//             {i}
//           </Link>
//         ))}
//       </Grid>

//       <Grid item xs={4}>
//         <Typography fontWeight={700} marginBottom={2} color={'#0070F3'} noWrap>
//           Media
//         </Typography>
//         {['Video Streaming', 'Audio and video chat'].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             underline={'hover'}
//             color={'text.primary'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               fontFamily: ('Nunito', 'Inter'),
//             }}
//           >
//             {i}
//           </Link>
//         ))}
//         <Box sx={{ paddingTop: '30px' }}></Box>
//         <Typography fontWeight={700} color={'#0070F3'} marginBottom={2} noWrap>
//           Startups
//         </Typography>
//         {['Marketplaces', 'Social networks'].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             underline={'hover'}
//             color={'text.primary'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               fontFamily: ('Nunito', 'Inter'),
//             }}
//           >
//             {i}
//           </Link>
//         ))}
//       </Grid>
//       <Grid item xs={4}>
//         <Typography fontWeight={700} color={'#0070F3'} marginBottom={2} noWrap>
//           Digital transformation
//         </Typography>
//         {['RPA, automation, bots', 'CRM, ERM, HRM systems'].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             underline={'hover'}
//             color={'text.primary'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               fontFamily: ('Nunito', 'Inter'),
//             }}
//           >
//             {i}
//           </Link>
//         ))}
//         <Box sx={{ paddingTop: '30px' }}></Box>
//         <Typography color={'#0070F3'} fontWeight={700} marginBottom={2} noWrap>
//           Competence
//         </Typography>
//         {['AR/VR', 'Data science', 'Internet of things'].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             underline={'hover'}
//             color={'text.primary'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               fontFamily: ('Nunito', 'Inter'),
//             }}
//           >
//             {i}
//           </Link>
//         ))}
//       </Grid>
//     </Grid>
//   );
// };

// const Services = () => {
//   return (
//     <Grid container spacing={10} sx={{ width: '900px' }}>
//       <Grid item xs={4}>
//         <Typography color={'#0070F3'} fontWeight={700} marginBottom={2} noWrap>
//           Mobile Development
//         </Typography>
//         {[
//           'ios app development',
//           'Android app development ',
//           'Flutter app development',
//         ].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             underline={'hover'}
//             color={'text.primary'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               fontFamily: ('Nunito', 'Inter'),
//             }}
//           >
//             {i}
//           </Link>
//         ))}
//       </Grid>

//       <Grid item xs={4}>
//         <Typography color={'#0070F3'} fontWeight={700} marginBottom={2} noWrap>
//           Web Development
//         </Typography>
//         {[
//           'Web app development',
//           'DevOps services',
//           'legacy soft modernization',
//         ].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             underline={'hover'}
//             color={'text.primary'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               fontFamily: ('Nunito', 'Inter'),
//             }}
//           >
//             {i}
//           </Link>
//         ))}
//         {/* <Box sx={{ paddingTop: '30px' }}></Box>
//         <Typography fontWeight={700} marginBottom={2} noWrap>
//           Startups
//         </Typography>
//         {['Marketplaces', 'Social networks'].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             underline={'hover'}
//             color={'text.primary'}
//             sx={{ display: 'block', marginTop: 1, whiteSpace: 'nowrap' }}
//           >
//             {i}
//           </Link>
//         ))} */}
//       </Grid>
//       <Grid item xs={4}>
//         <Typography color={'#0070F3'} fontWeight={700} marginBottom={2} noWrap>
//           For Startups
//         </Typography>
//         {['Discovery phase', 'MVP development', 'CTO as a service'].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             underline={'hover'}
//             color={'text.primary'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               fontFamily: ('Nunito', 'Inter'),
//             }}
//           >
//             {i}
//           </Link>
//         ))}
//         {/* <Box sx={{ paddingTop: '30px' }}></Box>
//         <Typography fontWeight={700} marginBottom={2} noWrap>
//           Competence
//         </Typography>
//         {['AR/VR', 'Data science', 'Internet of things'].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             underline={'hover'}
//             color={'text.primary'}
//             sx={{ display: 'block', marginTop: 1, whiteSpace: 'nowrap' }}
//           >
//             {i}
//           </Link>
//         ))} */}
//       </Grid>
//     </Grid>
//   );
// };

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
    setOpen2(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
    setOpen2(false);
  };
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
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Pricing'}
            id={'Pricing-pages'}
            colorInvert={colorInvert}
            link={'/pricing'}
          />
        </Box> */}

        {/* <Box marginLeft={4}> */}
        {/* <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, md: 8 }}
          >
            <Link
              href={'#'}
              variant={'body2'}
              underline={'none'}
              color={!colorInvert ? 'text.primary' : '#fff'}
              colorInvert={colorInvert}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={(e) => handleClick(e)}
            >
              Industries{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 1,
                sx: {
                  padding: 2,
                  mt: 1.5,
                },
              }}
              transformOrigin={{ horizontal: 'left', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
              <Box>
                <Industries />
              </Box>
            </Menu>
          </Stack> */}
        {/* <NavItem
            title={'Industries'}
            id={'career-pages'}
            colorInvert={colorInvert}
            link={'/service'}
          /> */}
        {/* </Box> */}
        <Box marginLeft={4}>
          {/* <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, md: 8 }}
            colorInvert={colorInvert}
          >
            <Link
              href={'#'}
              color={!colorInvert ? 'text.primary' : '#fff'}
              variant={'body2'}
              underline={'none'}
              // color={'text.primary'}
              colorInvert={colorInvert}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={(e) => handleClick2(e)}
            >
              Services{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Menu
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
              onClick={handleClose2}
              PaperProps={{
                elevation: 1,
                sx: {
                  padding: 2,
                  mt: 1.5,
                },
              }}
              transformOrigin={{ horizontal: 'left', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
              <Box>
                <Services />
              </Box>
            </Menu>
          </Stack> */}
          <NavItem
            title={'Services'}
            id={'career-pages'}
            colorInvert={colorInvert}
            link={'/service'}
          />
        </Box>
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Career'}
            id={'career-pages'}
            colorInvert={colorInvert}
            link={'/career'}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Resource'}
            id={'Resource-pages'}
            colorInvert={colorInvert}
            link={'#'}
          />
        </Box> */}
        <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'Portfolio-pages'}
            colorInvert={colorInvert}
            link={'/portfolio'}
          />
        </Box>
        <Box marginLeft={4} sx={{ whiteSpace: 'nowrap' }}>
          <NavItem
            title={'Case Studies'}
            id={'Case-Studies'}
            colorInvert={colorInvert}
            link={'/case-studies'}
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
          <Link href={'/hire-us'}>
            <Button
              component={'a'}
              // variant="contained"
              color="primary"
              sx={{
                backgroundColor: ' #0000d3',
                width: '140px',
                borderRadius: '7px',
                fontFamily: 'Inter',
                // fontSize: '16px',
                fontSize: '1rem',
                padding: '0.25rem .8rem',
                color: 'white',
                border: '1px solid  #0000d3',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#0000a9',
                },

                ['@media (min-width:391px) and (max-width:600px)']: {
                  // eslint-disable-line no-useless-computed-key
                  width: '20vw',
                  height: '50px',
                  fontSize: '12px',
                },
                // ['@media (min-width:300px) and (max-width:600px)']: {
                //   // eslint-disable-line no-useless-computed-ke
                //   fontSize: '12px',
                // },
              }}
              size="small"
              // fullWidth={isMd ? false : true}
            >
              Lets Talk
            </Button>
          </Link>
        </Box>
      </Box>

      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Box marginLeft={4}>
          <Button
            component={'a'}
            // variant="contained"
            color="primary"
            sx={{
              backgroundColor: ' #0000d3',
              width: '20vw',
              borderRadius: '7px',
              fontFamily: 'Inter',
              fontSize: '1rem',
              padding: '0.25rem 0.8rem',
              color: 'white',
              border: '1px solid  #0000d3',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#0000a9',
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
