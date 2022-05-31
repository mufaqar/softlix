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
            src={'/images/10-tech-trendsthat-will-influence.jpg'}
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
      <Typography variant="h5">1. The continued rise of mobile:   </Typography>
        <Typography variant={'subtitle1'}>
        By 2022, mobile devices will account for nearly 75% of all internet traffic. This means that if your marketing strategy isn't mobile-friendly, you're missing out on a huge potential customer base. Make sure your website is responsive and your ads are easily viewable on smaller screens.
        </Typography>
        <Typography variant="h5" marginTop={2}>2. The growth of social media:   </Typography>
        <Typography variant={'subtitle1'}>
          Social media usage is expected to continue growing at a rapid pace. In fact, by 2022 there will be more than 3 billion social media users around the world. This presents a huge opportunity for businesses to reach their target audiences through these platforms.
          </Typography>
         <Typography variant="h5" marginTop={2}>3. The rise of video content:   </Typography>
          <Typography variant={'subtitle1'}>
          Video is one of the most popular types of content online, and it's only going to become more popular in the future. In fact, by 2022, nearly 80% of all internet traffic will be related to video content. If you want to capture the attention of your target audience and stand out from your competition, investing in video marketing should be an essential part of your strategy.
          </Typography>
          <Typography variant="h5" marginTop={2}>4. The growth of digital assistants:  </Typography>
          <Typography variant={'subtitle1'}>
         Digital assistants like Siri and Alexa are becoming increasingly common, with nearly three-quarters of adults reporting that they have used one at least once. This presents a huge opportunity for marketers who can create voice-enabled ads that interact with consumers in a natural and intuitive way.
          </Typography>
          <Typography variant="h5" marginTop={2}>5. Augmented reality: </Typography>
          <Typography variant={'subtitle1'}>
          In addition to virtual reality (VR), augmented reality is poised for massive growth over the next few years. By 2022, augmented reality is expected to account for nearly half of all mobile internet traffic. Marketers can capitalize on this trend by creating AR ads that combine the physical and digital worlds in new and exciting ways.
           </Typography>
            <Typography variant="h5" marginTop={2}>6. The rise of artificial intelligence:</Typography>
          <Typography variant={'subtitle1'}>
          In addition to VR and AR, artificial intelligence will also play a major role in online marketing over the next few years. AI technology can help marketers better personalize their campaigns, evaluate customer feedback more accurately, and figure out which marketing methods are most effective at reaching different audiences.
           </Typography>

            <Typography variant="h5" marginTop={2}>7. Growth of voice search: </Typography>
             <Typography variant={'subtitle1'}>
            Thanks to developments in conversational interfaces, voice-enabled searches will become increasingly common over the next few years. This presents a huge opportunity for marketers who want to ensure their ads are easily found by consumers using voice search.
           </Typography>
           <Typography variant="h5" marginTop={2}>8. The rise of the connected home: </Typography>
             <Typography variant={'subtitle1'}>
            The number of devices connected to the internet is expected to grow exponentially over the next few years. By 2022, there will be nearly 21 billion internet-connected devices around the world. This trend presents a huge opportunity for marketers to reach consumers through new channels and touchpoints.
           </Typography>
           <Typography variant="h5" marginTop={2}>9. Increased focus on data privacy: </Typography>
             <Typography variant={'subtitle1'}>
            In the wake of major data breaches like the one that occurred at Equifax in 2017, there has been a renewed focus on data privacy. This means that businesses will need to be more careful than ever about how they collect, store, and use customer data. Those who fail to protect consumer data could face severe consequences in the long run.
           </Typography>
           <Typography variant="h5" marginTop={2}>10. The continued rise of automation: </Typography>
             <Typography variant={'subtitle1'}>
           Automated marketing technologies are growing in popularity, with nearly a quarter of all businesses reporting that they currently use some form of automation technology for marketing purposes. Marketers should keep an eye on this trend to ensure their campaigns remain relevant and effective over the next few years.
           </Typography>
             <Typography variant={'subtitle1'} marginTop={1}>
            As you can see, there are a number of trends that will shape the marketing landscape in 2022. By staying on top of these trends and adapting your strategy accordingly, you will be well positioned to capture the attention of your target audiences and outperform your competitors. Remember, it's always better to be prepared than get caught off guard!
           </Typography>

            <Typography variant="h4" marginTop={2}>Conclusion </Typography>
             <Typography variant={'subtitle1'}>
            Marketing is constantly changing as new technologies emerge and old ones become obsolete. And while some marketers feel overwhelmed by these changes, others view them as an exciting way to enhance their campaigns and stand out from the competition. It's important for modern marketers to stay up-to-date with emerging trends so they can take advantage of these opportunities when they arise. In this post, we've shared 10 tech trends that will shape marketing in 2022. By staying on top of these trends and adapti


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
