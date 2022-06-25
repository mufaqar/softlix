import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';

const NavItem = ({ title, items, link = false }) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink = () => items?.find((i) => i?.href === activeLink);

  return (
    <Box>
      <Accordion
        disableGutters
        elevation={0}
        sx={{ backgroundColor: 'transparent' }}
      >
        <AccordionSummary id="panel1a-header" sx={{ padding: 0 }}>
          <Link
            href={link}
            sx={{
              textDecoration: 'none',
            }}
            /* sx={{
                    justifyContent: 'flex-start',
                    color:
                      activeLink === link
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    backgroundColor:
                      activeLink === link
                        ? alpha(theme.palette.primary.main, 0.1)
                        : 'transparent',
                    fontWeight: activeLink === link ? 600 : 400,
                  }}*/
          >
            <Typography
              fontWeight={hasActiveLink() ? 600 : 400}
              color={hasActiveLink() ? 'primary' : 'text.primary'}
            >
              {title}
            </Typography>
          </Link>
        </AccordionSummary>
      </Accordion>
    </Box>
  );
};

NavItem.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default NavItem;
