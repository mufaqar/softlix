import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Container from 'components/Container';

const mock = [
  {
    feedback:
      'SiteDesign was recommended by the software consultants we were working with. They told us it\'s a software company that had worked well for their previous clients in streamlining software and data operations. They were right.',
    name: 'President of Operations,',
    title: 'Digital Marketing Company in Florida',
    avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  {
    feedback:
      'We\'ve been trying to put together a functional website from quite a long while. I am happy to say we finally hired SiteDesign team and they\'ve worked closely with us throughout the process, staying on task, on target, and on budget. Their service is highly recommended!',
    name: 'Spokesperson',
    title: 'Video Marketing company in Chicago',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
  },
  {
    feedback:
      'I am really impressed by the quality of services I received from SiteDesign. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products. My revenue has increased because of SiteDesign and I will definitely use your services again.',
    name: 'Chary Smith',
    title: 'Owner',
    avatar: 'Ecommerce Store in New York',
  },
];

const WithHighlightedCard = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              marginTop: theme.spacing(1),
            }}
          >
            Rated 5 out of 5 stars by our customers!
          </Typography>
          <Typography variant="h6" color={'text.secondary'}>
            Companies from across the globe have had fantastic experiences using
            theFront.
            <br />
            Here’s what they have to say.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                width={1}
                height={1}
                component={Card}
                display={'flex'}
                flexDirection={'column'}
                boxShadow={i === 1 ? 4 : 0}
                bgcolor={i === 1 ? 'primary.main' : 'none'}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box marginBottom={1}>
                    <Box display={'flex'} justifyContent={'flex-start'}>
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Box key={item} color={theme.palette.secondary.main}>
                          <svg
                            width={18}
                            height={18}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Typography
                    color={
                      i === 1 ? theme.palette.common.white : 'text.secondary'
                    }
                  >
                    {item.feedback}
                  </Typography>
                </CardContent>
                <Box flexGrow={1} />
                <CardActions sx={{ paddingBottom: 2 }}>
                  <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                    <ListItemAvatar>
                      <Avatar src={item.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={item.name}
                      secondary={item.title}
                      primaryTypographyProps={{
                        color:
                          i === 1 ? theme.palette.common.white : 'text.primary',
                      }}
                      secondaryTypographyProps={{
                        color:
                          i === 1
                            ? theme.palette.common.white
                            : 'text.secondary',
                      }}
                    />
                  </ListItem>
                </CardActions>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default WithHighlightedCard;
