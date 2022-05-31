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
            src={'/images/how-to-choose-right-dev.jpeg'}
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
        In order to find the right web development company, you need to be able to identify the qualities that make a good one. This can include things like:
         </Typography>

      <Typography variant="h5">1. Experience in your field.  </Typography>
        <Typography variant={'subtitle1'}>
        It’s important to find a development company that has experience working with businesses just like yours and understands what it takes to create a high-quality website for clients in your specific industry.
        </Typography>
        <Typography variant="h5" marginTop={2}>2. Professionalism.   </Typography>
        <Typography variant={'subtitle1'}>
          A professional developer will treat you as a client, not just another number or project on their list. They should be respectful of your time and budget, and work hard to keep both aspects in mind when creating your website.
          </Typography>
         <Typography variant="h5" marginTop={2}>3. Communication skills. </Typography>
          <Typography variant={'subtitle1'}>
           In order for the web development process to go smoothly, communication is key. Make sure that the company you choose is good at communicating both verbally and written so that there are no misunderstandings along the way.
           </Typography>
          <Typography variant="h5" marginTop={2}>4. Creativity. </Typography>
          <Typography variant={'subtitle1'}>
  
            A web development company should be able to take your ideas and turn them into a beautiful, functional website that meets all of your expectations. The developers should also be open to hearing your suggestions and feedback so that they can make changes as needed.
            </Typography>
                 


         <Typography variant="h5" marginTop={2}>5. Flexibility.</Typography>
          <Typography variant={'subtitle1'}>
           Last but not least, it’s important to find a company that is willing to be flexible with their services. Things change, and sometimes you may need to add or remove features from your website as time goes on. Choose a development team that is willing to work with you to make changes and to meet your needs as they evolve.
           </Typography>
           

           <Typography variant={'subtitle1'} marginTop={1}>
          The right web development company should have experience in your field, be professional, have great communication skills, be creative, and be flexible. If you find a team that has all of these qualities, you can rest assured knowing that your website is in good hands.
          </Typography>

           <Typography variant={'subtitle1'} marginTop={1}>
           Don’t settle for anything less than the best when it comes to choosing a web development company – make sure you take the time to find one that meets all of your criteria. With a little bit of research, you’re sure to find the perfect team for your project. Contact us today to get started!
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
