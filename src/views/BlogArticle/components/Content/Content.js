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
            src={'/images/outsourcing-in-India-is-it-the-right-decision-for-your-business.png'}
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
      <Typography variant="h5">1. Define the Scope of Work and Deliverables   </Typography>
        <Typography variant={'subtitle1'}>
        The first best practice when outsourcing work for your IT project is to be very clear about what you expect from the professional you hire. This means creating a detailed scope of work that outlines every deliverable you expect, as well as any deadlines or milestones associated with each one. The more specific you can be about the work you need completed, the better. This will help ensure that everyone is on the same page from the start of the project and avoid any misunderstandings or miscommunications down the road.
        </Typography>
        <Typography variant="h5" marginTop={2}>2. Discuss Company Culture and Goals   </Typography>
        <Typography variant={'subtitle1'}>
          In order for an outsourced professional to accurately represent your company’s goals and culture, it is important to provide them with more than just a simple project scope. Meet with your experts before the work begins to discuss not only the details of what you want done, but also any other requirements that are necessary for success. If there are certain standards or processes that must be followed in order to achieve your desired outcomes, make sure your team is aware of these before they get started. This will minimize the risk of errors and help ensure that everyone is working towards the same objectives.
         </Typography>
         <Typography variant="h5" marginTop={2}>3. Set Clear Communication Expectations   </Typography>
          <Typography variant={'subtitle1'}>
          One of the most important aspects of successful outsourcing is clear communication between you and your team. In order to avoid any misunderstandings, make sure you set clear expectations for how and when you will communicate with each other. For example, will you communicate via email, phone, or video chat? How often do you need updates on project progress? By setting these expectations from the start, you can avoid any confusion or frustration down the road.
          </Typography>
          <Typography variant="h5" marginTop={2}>4. Use a Project Management Tool  </Typography>
          <Typography variant={'subtitle1'}>
          Using a project management tool to oversee and organize your IT project work is another excellent best practice can help ensure a smooth process. This will give you easy access to the information you need, such as deadlines, budgets, and task status updates. It can also help by providing an avenue for regular communication between your team members that is convenient for all involved.
          </Typography>
          <Typography variant="h5" marginTop={2}>5. Hire an Experienced Outsourcing Provider  </Typography>
          <Typography variant={'subtitle1'}>
          Finally, one of the best ways to ensure a successful outsourcing experience is to hire an experienced provider. This means working with a company that has a proven track record of successful IT projects. It also means ensuring that the team you work with has the necessary skills and knowledge to carry out the work you need, as well as experience working in your industry. This will help make it easy to find a company that is willing and able to complete the specific types of projects you have in mind.
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
