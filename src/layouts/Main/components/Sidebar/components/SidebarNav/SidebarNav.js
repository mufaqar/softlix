import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
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
        <Box>
          <NavItem title={'Pricing'} items={companyPages} link={'/pricing'} />
        </Box>
        <Box>
          <NavItem title={'Service'} items={secondaryPages} link={'/service'} />
        </Box>
        <Box>
          <NavItem title={'Resource'} items={accountPages} link={'#'} />
        </Box>
        <Box>
          <NavItem title={'Blog'} items={blogPages} link={'/blog'} />
        </Box>
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="contained"
            fullWidth
            component="a"
            href="/hire-us"
          >
            Get Quotation
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="outlined"
            color="primary"
            href={'/docs/introduction'}
            fullWidth
            component="a"
            href="/portfolio"
            // sx={{ color: '#1983FF' }}
          >
            View Pricing
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="outlined"
            color="primary"
            fullWidth
            component="a"
            href="tel:+9198185 65561"
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
              &nbsp; +9198185 65561
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
