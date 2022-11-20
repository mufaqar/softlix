import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PortableText from 'react-portable-text';

const Main = ({ job }) => {
  console.log(job);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box>
          <Typography fontWeight={700} variant={'h4'} gutterBottom>
            {job.title}
          </Typography>
          <Typography variant={'h6'}>Position : {job.position}</Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button variant="contained" color="primary" size="large">
            Apply now
          </Button>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          >
            Refer a friend
          </Box>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <PortableText
              // Pass in block content straight from Sanity.io
              content={job.content}
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h6: ({ children }) => (
                  <Typography variant={'h6'} fontWeight={700} gutterBottom>
                    {children}
                  </Typography>
                ),
                h5: ({ children }) => (
                  <Typography variant={'h5'} fontWeight={700} gutterBottom>
                    {children}
                  </Typography>
                ),

                h4: ({ children }) => (
                  <Typography variant={'h4'} fontWeight={700} gutterBottom>
                    {children}
                  </Typography>
                ),
                h3: ({ children }) => (
                  <Typography variant={'h3'} fontWeight={700} gutterBottom>
                    {children}
                  </Typography>
                ),
                h2: ({ children }) => (
                  <Typography variant={'h6'} fontWeight={700} gutterBottom>
                    {children}
                  </Typography>
                ),
                h1: ({ children }) => (
                  <Typography variant={'h5'} fontWeight={700} gutterBottom>
                    {children}
                  </Typography>
                ),
                p: ({ children }) => (
                  <Typography component={'p'}>{children}</Typography>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-2 list-disc list-inside">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-lg font-normal font-interRegular md:text-xl text-skin-primary">
                    {children}
                  </li>
                ),
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={isMd ? 4 : 2} direction="column">
            <Grid item xs={12} data-aos="fade-up">
              <Box component={Card} bgcolor={'primary.main'}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="text.primary"
                    sx={{ color: 'common.white' }}
                  >
                    You like what you’re reading?
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ color: 'common.white' }}
                  >
                    Get free online programing tips and resources delivered
                    directly to your inbox.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <Box component={Card}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="text.primary">
                    Interactive decision support system
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    View all
                  </Button>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
