import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import NavItem from './components/NavItem';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';

import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';

// const Industries = () => {
//   return (
//     <Grid container spacing={4} sx={{ width: '300px' }}>
//       <Grid item xs={12}>
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
//             color={'text.primary'}
//             underline={'none'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               '&:hover': {
//                 color: '#1983FF',
//               },

//               ['@media (min-width:300px) and (max-width:600px)']: {
//                 '&:hover': {
//                   color: '#1983FF',
//                 },
//               },
//             }}
//           >
//             {i}
//           </Link>
//         ))}
//       </Grid>

//       <Grid item xs={12}>
//         <Typography color={'#0070F3'} fontWeight={700} marginBottom={2} noWrap>
//           Media
//         </Typography>
//         {['Video Streaming', 'Audio and video chat'].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             color={'text.primary'}
//             underline={'none'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               '&:hover': {
//                 color: '#1983FF',
//               },

//               ['@media (min-width:300px) and (max-width:600px)']: {
//                 '&:hover': {
//                   color: '#1983FF',
//                 },
//               },
//             }}
//           >
//             {i}
//           </Link>
//         ))}
//         <Box sx={{ paddingTop: '30px' }}></Box>
//         <Typography color={'#0070F3'} fontWeight={700} marginBottom={2} noWrap>
//           Startups
//         </Typography>
//         {['Marketplaces', 'Social networks'].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             color={'text.primary'}
//             underline={'none'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               '&:hover': {
//                 color: '#1983FF',
//               },

//               ['@media (min-width:300px) and (max-width:600px)']: {
//                 '&:hover': {
//                   color: '#1983FF',
//                 },
//               },
//             }}
//           >
//             {i}
//           </Link>
//         ))}
//       </Grid>
//       <Grid item xs={12}>
//         <Typography color={'#0070F3'} fontWeight={700} marginBottom={2} noWrap>
//           Digital transformation
//         </Typography>
//         {['RPA, automation, bots', 'CRM, ERM, HRM systems'].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             color={'text.primary'}
//             underline={'none'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               '&:hover': {
//                 color: '#1983FF',
//               },

//               ['@media (min-width:300px) and (max-width:600px)']: {
//                 '&:hover': {
//                   color: '#1983FF',
//                 },
//               },
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
//             color={'text.primary'}
//             underline={'none'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               '&:hover': {
//                 color: '#1983FF',
//               },

//               ['@media (min-width:300px) and (max-width:600px)']: {
//                 '&:hover': {
//                   color: '#1983FF',
//                 },
//               },
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
//     <Grid container spacing={4} sx={{ width: '300px' }}>
//       <Grid item xs={12}>
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
//             color={'text.primary'}
//             underline={'none'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               '&:hover': {
//                 color: '#1983FF',
//               },

//               ['@media (min-width:300px) and (max-width:600px)']: {
//                 '&:hover': {
//                   color: '#1983FF',
//                 },
//               },
//             }}
//           >
//             {i}
//           </Link>
//         ))}
//       </Grid>

//       <Grid item xs={12}>
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
//             color={'text.primary'}
//             underline={'none'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               '&:hover': {
//                 color: '#1983FF',
//               },

//               ['@media (min-width:300px) and (max-width:600px)']: {
//                 '&:hover': {
//                   color: '#1983FF',
//                 },
//               },
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

//             color={'text.primary'}
//             underline={'none'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               '&:hover': {
//                 color: '#1983FF',
//               },

//               ['@media (min-width:300px) and (max-width:600px)']: {
//                 '&:hover': {
//                   color: '#1983FF',
//                 },
//               },
//             }}
//           >
//             {i}
//           </Link>
//         ))} */}
//       </Grid>
//       <Grid item xs={12}>
//         <Typography color={'#0070F3'} fontWeight={700} marginBottom={2} noWrap>
//           For Startups
//         </Typography>
//         {['Discovery phase', 'MVP development', 'CTO as a service'].map((i) => (
//           <Link
//             key={i}
//             href={'#'}
//             color={'text.primary'}
//             underline={'none'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               cursor: 'pointer',
//               '&:hover': {
//                 color: '#1983FF',
//               },

//               ['@media (min-width:300px) and (max-width:600px)']: {
//                 '&:hover': {
//                   color: '#1983FF',
//                 },
//               },
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

//             color={'text.primary'}
//             underline={'none'}
//             sx={{
//               display: 'block',
//               marginTop: 1,
//               whiteSpace: 'nowrap',
//               '&:hover': {
//                 color: '#1983FF',
//               },

//               ['@media (min-width:300px) and (max-width:600px)']: {
//                 '&:hover': {
//                   color: '#1983FF',
//                 },
//               },
//             }}
//           >
//             {i}
//           </Link>
//         ))} */}
//       </Grid>
//     </Grid>
//   );
// };
const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
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

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
    contact: contactPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Softlix"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light' ? '/images/IMG_3570.png' : '/images/IMG_3570.png'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Home'} items={landingPages} link={'/'} />
        </Box>
        {/* <Box>
          <NavItem title={'Pricing'} items={companyPages} link={'/pricing'} />
        </Box> */}
        {/* <Box sx={{ padding: '7px' }}></Box> */}
        {/* <Box> */}
        {/* <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, md: 8 }}
          >
            <Link
              href={'#'}
              variant={'body2'}
              underline={'none'}
              color={'text.primary'}
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '16px',
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
            // colorInvert={colorInvert}
            link={'/service'}
          /> */}
        {/* </Box> */}

        {/* <Box sx={{ padding: '13px' }}></Box> */}
        <Box>
          {/* <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, md: 8 }}
          >
            <Link
              href={'#'}
              variant={'body2'}
              underline={'none'}
              color={'text.primary'}
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '16px',
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
            // colorInvert={colorInvert}
            link={'/service'}
          />
        </Box>
        {/* <Box sx={{ padding: '7px' }}></Box> */}
        {/* <Box>
          <NavItem title={'Career'} link={'/career'} />
        </Box>
        <Box>
          <NavItem title={'Resource'} items={accountPages} link={'#'} />
        </Box> */}

        <Box>
          <NavItem
            title={'Portfolio'}
            items={portfolioPages}
            link={'/portfolio'}
          />
        </Box>
        <Box>
          <NavItem title={'Blog'} items={blogPages} link={'/blog'} />
        </Box>
        <Box>
          <NavItem title={'Contact'} items={contactPages} link={'/contact'} />
        </Box>
        <Box marginTop={2}>
          <Button
            size={'large'}
            // variant="contained"
            fullWidth
            component="a"
            href="/hire-us"
            sx={{
              backgroundColor: ' #0000d3',
              width: '200px',
              borderRadius: '7px',
              fontFamily: 'Inter',
              fontSize: '16px',
              color: 'white',
              '&:hover': {
                backgroundColor: '#0000a9',
              },

              ['@media (min-width:300px) and (max-width:600px)']: {
                // eslint-disable-line no-useless-computed-key
                // width: '90vw',
                height: '50px',
                fontSize: '14px',
              },
            }}
          >
            Get Quotation
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            // variant="outlined"
            color="primary"
            href={'/portfolio'}
            fullWidth
            component="a"
            sx={{
              background: 'white',
              fontSize: '16px',
              fontFamily: 'Inter',
              width: '200px',
              borderRadius: '7px',
              color: '#0000d3',
              boxShadow: '0 4px 14px 0 rgb(0 0 0 / 10%)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,.9)',
                boxShadow: '0 6px 20px rgb(93 93 93 / 23%)',
              },
              ['@media (min-width:300px) and (max-width:600px)']: {
                // eslint-disable-line no-useless-computed-key
                // width: '90vw',
                height: '50px',
                fontSize: '14px',
              },
            }}
            // href="/portfolio"
            // sx={{ color: '#1983FF' }}
          >
            View Portfolio
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="outlined"
            color="primary"
            fullWidth
            component="a"
            href="tel:+1 929-460-0564"
            sx={{ border: 'none!important' }}
          >
            <Typography
              variant={'body1'}
              gutterBottom
              sx={{ fontWeight: 'medium', marginLeft: '2px', display: 'flex' }}
            >
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              &nbsp; +1 929-460-0564
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
