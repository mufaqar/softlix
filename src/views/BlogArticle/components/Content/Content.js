/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PortableText from 'react-portable-text';

const Content = ({ blog }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Box width={1} height={1} marginY={4}>
          <LazyLoadImage
            height={'100%'}
            width={'100%'}
            src={blog.featureImage.asset.url}
            alt="Remote working"
            effect="blur"
            style={{
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              objectFit: 'cover',
              borderRadius: 8,
              width: '100%',
              height: '100%',
              maxHeight: 400,
            }}
          />
        </Box>

        <Box>
          <PortableText
            // Pass in block content straight from Sanity.io
            content={blog.content}
            // Optionally override marks, decorators, blocks, etc. in a flat
            // structure without doing any gymnastics
            serializers={{
              h6: ({ children }) => (
                <h6 className="mb-5 text-xl font-bold font-productSansBold md:text-2xl text-skin-dark">
                  {children}
                </h6>
              ),
              h2: ({ children }) => (
                <h6 className="mb-5 text-xl font-bold font-productSansBold md:text-2xl text-skin-dark">
                  {children}
                </h6>
              ),
              h3: ({ children }) => (
                <h6 className="mb-5 text-xl font-bold font-productSansBold md:text-2xl text-skin-dark">
                  {children}
                </h6>
              ),
              h4: ({ children }) => (
                <h6 className="mb-5 text-xl font-bold font-productSansBold md:text-2xl text-skin-dark">
                  {children}
                </h6>
              ),
              h5: ({ children }) => (
                <h6 className="mb-5 text-xl font-bold font-productSansBold md:text-2xl text-skin-dark">
                  {children}
                </h6>
              ),
              ul: ({ children }) => (
                <ul className="space-y-2 list-disc list-inside">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="text-lg font-normal font-interRegular md:text-xl text-skin-primary">
                  {children}
                </li>
              ),
            }}
          />
        </Box>
      </Box>

      <Box
        component={Card}
        boxShadow={2}
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row-reverse' }}
        sx={{ backgroundImage: 'none' }}
      >
        <Box
          sx={{
            width: { xs: 1, md: '50%' },
            position: 'relative',
            '& .lazy-load-image-loaded': {
              height: 1,
              display: 'flex !important',
            },
          }}
        >
          {/* <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={'https://assets.maccarianagency.com/backgrounds/img1.jpg'}
            alt="..."
            effect="blur"
            sx={{
              objectFit: 'cover',
              maxHeight: 360,
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
            }}
          />*/}
        </Box>
      </Box>

      {/*  <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
      >
        <Box display={'flex'} alignItems={'center'}>
          <Avatar
            sx={{ width: 50, height: 50, marginRight: 2 }}
            src={'https://assets.maccarianagency.com/avatars/img3.jpg'}
          />
          <Box>
            <Typography fontWeight={600}>Jhon Anderson</Typography>
            <Typography color={'text.secondary'}>May 19, 2021</Typography>
          </Box>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Typography color={'text.secondary'}>Share:</Typography>
          <Box marginLeft={0.5}>
            <IconButton aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>*/}
    </Box>
  );
};

export default Content;
