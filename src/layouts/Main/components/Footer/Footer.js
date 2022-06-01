import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Box
        sx={{ position: 'fixed', bottom: '40px', left: '30px', zIndex: '999' }}
      >
        <Link
          underline="none"
          component="a"
          href="https://api.whatsapp.com/send?phone=919818565561&text="
          color="text.primary"
          variant={'subtitle2'}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#e4e4e4',
            padding: '0px 1px',
            borderRadius: '30px',
            paddingRight: '20px',
            fontWeight: 'bold; color: #7e7c7d',
          }}
        >
          <Box
            component={'img'}
            src={'/images/whatsapp.png'}
            sx={{ marginRight: '10px', width: '41px', marginLeft: '-2px' }}
          />
          WhatsApp Us
        </Link>
      </Box>

      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
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
                mode === 'light'
                  ? '/images/IMG_3570.png'
                  : '/images/IMG_3570.png'
              }
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/portfolio"
                color="text.primary"
                variant={'subtitle2'}
              >
                Portfolio
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/about"
                color="text.primary"
                variant={'subtitle2'}
              >
                About Us
              </Link>
            </Box>

            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/contact"
                color="text.primary"
                variant={'subtitle2'}
              >
                Contact Us
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/pricing"
                color="text.primary"
                variant={'subtitle2'}
              >
                Pricing
              </Link>
            </Box>

            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/company-terms"
                color="text.primary"
                variant={'subtitle2'}
              >
                Terms of use
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/privacy-policy"
                color="text.primary"
                variant={'subtitle2'}
              >
                Privacy Policy
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/faq"
                color="text.primary"
                variant={'subtitle2'}
              >
                FAQ
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/faq"
                color="text.primary"
                variant={'subtitle2'}
              >
                Refund Policy
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; 2022, SOFTLIX is Product of RDMI Tech Ventures Pvt. Ltd
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
