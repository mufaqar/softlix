import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Content,
  FooterNewsletter,
  Hero,
  SidebarArticles,
  SidebarNewsletter,
  SimilarStories,
} from './components';

const BlogArticle = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true);
    }, 5000);
  }, []);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main colorInvert={true}>
      <Box>
        <Hero />
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Content />
            </Grid>
            <Grid item xs={12} md={4}>
              {isMd ? (
                <Box marginBottom={4}>
                  <SidebarArticles />
                </Box>
              ) : null}
            </Grid>
          </Grid>
        </Container>
        {isDisplayed && (
          <Box
            sx={{
              position: 'sticky',
              bottom: '0px',
              left: '0px',
              background: 'white',
              color: 'black',
              padding: '20px 10px 20px 10px',
              transition: 'all 1.5s linear',
            }}
          >
            <FooterNewsletter />
          </Box>
        )}
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </Main>
  );
};

export default BlogArticle;
