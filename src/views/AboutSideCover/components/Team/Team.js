import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const mock = [
  {
    name: 'President of Operations',
    title: 'Digital Marketing Company in Florida',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    about:
      "SOFTLIX was recommended by the software consultants we were working with. They told us it's a software company that had worked well for their previous clients in streamlining software and data operations. They were right.",
  },
  {
    name: 'Spokesperson',
    title: 'Video Marketing company in Chicago',
    avatar:
      "We've been trying to put together a functional website from quite a long while. I am happy to say we finally hired SOFTLIX team and they've worked closely with us throughout the process, staying on task, on target, and on budget. Their service is highly recommended!",
  },
  {
    name: 'Owner',
    title: 'Ecommerce Store in New York',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    about:
      'I am really impressed by the quality of services I received from SOFTLIX. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products. My revenue has increased because of SOFTLIX and I will definitely use your services again.',
  },
];

const Team = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          gutterBottom
          sx={{ fontWeight: 700, textAlign: 'center' }}
        >
          Our team
        </Typography>
        <Typography
          variant={'h6'}
          sx={{ textAlign: 'center', maxWidth: '80%', margin: '0 auto' }}
        >
          Our work life at SOFTLIX is not simply centered around work only; we
          also have fun. Here are the highlights of the events so far
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={Card}
              boxShadow={2}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <CardContent>
                <Box
                  component={Avatar}
                  src={item.avatar}
                  height={80}
                  width={80}
                />
                <Box marginTop={4}>
                  <ListItemText primary={item.name} secondary={item.title} />
                  <Typography variant={'subtitle2'} color={'text.secondary'}>
                    {item.about}
                  </Typography>
                  <Box marginTop={4}>
                    <IconButton size={'small'} color={'primary'}>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton size={'small'} color={'primary'}>
                      <GitHubIcon />
                    </IconButton>
                    <IconButton size={'small'} color={'primary'}>
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
