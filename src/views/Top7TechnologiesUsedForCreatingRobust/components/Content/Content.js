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
            src={'/images/mobile-app-development-for-2021-and-beyond.png'}
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
         <Typography variant={'subtitle1'}>
        If you're looking to create a robust mobile app, you'll need to use the right tools and technologies. Here are seven of the most popular options for 2020:
         </Typography>

      <Typography variant="h5">1. React Native </Typography>
        <Typography variant={'subtitle1'}>
        React Native is a popular open-source framework created by Facebook. It allows developers to create native iOS and Android apps using JavaScript. React Native has a large community of developers and many ready-made components, which makes it an attractive option for creating high-quality mobile apps.
        </Typography>
        <Typography variant="h5" marginTop={2}>2. Flutter   </Typography>
        <Typography variant={'subtitle1'}>
          Flutter is another popular open-source framework created by Google. It allows developers to create cross-platform mobile apps using Dart, a programming language developed by Google. Flutter comes with a rich set of widgets and other UI components, which makes it a great choice for creating both simple and complex mobile apps.
          </Typography>
         <Typography variant="h5" marginTop={2}>3. Xamarin </Typography>
          <Typography variant={'subtitle1'}>
          Xamarin is a popular framework created by Microsoft that allows developers to create native iOS, Android, and Windows apps using C#. It uses the same runtime as .NET applications to compile code into native executables, so it offers high performance while still allowing developers to use a familiar language.
          </Typography>
          <Typography variant="h5" marginTop={2}>4. Ionic Framework </Typography>
          <Typography variant={'subtitle1'}>
  
            Ionic is an open-source framework used for hybrid mobile development. It uses HTML5 and JavaScript to create cross-platform mobile apps that can be run in any major web browser or on iOS or Android devices through Apache Cordova (formerly known as PhoneGap).
            </Typography>
          <Typography variant="h5" marginTop={2}>5. AngularJS </Typography>
          <Typography variant={'subtitle1'}>
          AngularJS is a popular open-source JavaScript framework created by Google. It helps developers create single-page web applications and SPAs using HTML, CSS, and JavaScript. AngularJS uses two-way data binding to automatically keep the view and the model in sync, which makes it easy to create dynamic apps without having to write a lot of code.
          </Typography>           


         <Typography variant="h5" marginTop={2}>6. Node.js</Typography>
          <Typography variant={'subtitle1'}>
          Node.js is a popular open-source platform that allows developers to create server-side applications using JavaScript. It's fast and scalable, making it a good choice for creating real-time or high-traffic apps. Node.js is also often used in conjunction with React Native for creating full-stack applications.
          </Typography>
            <Typography variant="h5" marginTop={2}>7. Laravel</Typography>
          <Typography variant={'subtitle1'}> Laravel is a popular PHP framework used for creating web applications. It comes with a lot of features and libraries that make development faster and easier, such as an ORM, routing, authentication, and templating. Laravel is a good choice if you're looking to create a complex app with a lot of functionality.         </Typography>

          <Typography variant={'subtitle1'}>
            These are just a few of the most popular technologies used for mobile app development in 2020. There are many other options to choose from, so be sure to do your research before deciding on the right one for your needs.
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
