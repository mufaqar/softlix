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

const Content = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
      rows: 1,
      cols: 2,
    },
  ];

  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
      <Box width={1} height={1} marginY={4}>
          <LazyLoadImage
            height={'100%'}
            width={'100%'}
            src={'/images/intrroduction-to-web-development-technologies.jpg'}
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
         <Typography variant={'subtitle1'} marginTop={1}>
        Now that you know the basics of HTML, CSS, and JavaScript, you're ready to start learning some of the more advanced web development technologies. In this section, we'll introduce you to some of the most popular web development frameworks and libraries.
         </Typography>
         <Typography variant={'subtitle1'} marginTop={1}>
       One of the most popular web development frameworks is Ruby on Rails. Ruby on Rails is a web application framework written in the Ruby programming language. It is designed to make development of web applications quick and easy. Rails is a Model-View-Controller (MVC) framework, meaning that it provides structures for organizing code into models, views, and controllers. This makes development more organized and manageable.
         </Typography>
         <Typography variant={'subtitle1'} marginTop={1}>
Another popular web development framework is Laravel. Laravel is written in the PHP programming language and like Ruby on Rails, it is also designed to make development of web applications quick and easy. Laravel follows an Model-View-Controller (MVC) architecture pattern just like Ruby on Rails.
          </Typography> 
          <Typography variant={'subtitle1'} marginTop={1}>
There are many other web development frameworks out there such as Django (written in Python), Express (written in JavaScript), and Spring (written in Java). In addition to frameworks, there are also many libraries that provide useful functions and features for web development.
          </Typography> 

         <Typography variant={'subtitle1'} marginTop={1}>
One of the most popular JavaScript libraries is jQuery. jQuery is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML. It provides many useful functions, such as DOM manipulation and event handling, that make it easier to write complex scripts and keep code organized.
          </Typography> 
          <Typography variant={'subtitle1'} marginTop={1}>
Another popular JavaScript library is ReactJS. ReactJS was developed by Facebook and has quickly grown in popularity among web developers due to its excellent performance on mobile devices and ability to handle large data sets. It essentially provides a declarative approach for building interactive user interfaces that can be rendered on both the server side and the client side.
          </Typography> 
          <Typography variant={'subtitle1'} marginTop={1}>
There are many other libraries out there, and you should research them to find the one that best fits your needs. There is no single "best" web development library or framework, as they all have their own pros and cons. You need to do some research in order to determine which one will be right for your application.
          </Typography> 
          <Typography variant={'subtitle1'} marginTop={1}>
In summary, there are many different tools available for web development. You'll need to learn how these various technologies work together in order to create robust and high-performing websites and applications. Most importantly, you'll need to choose the right ones for your specific needs so that you can get started with web development today!
          </Typography> 

        
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
