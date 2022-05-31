import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  SearchBox,
  FeaturedArticle,
  LastStories,
  CaseStudies,
  PopularArticles,
  Newsletter,
} from './components';

const BlogReachView = () => {
  const theme = useTheme();
  return (
    <Main colorInvert={true}>
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <Hero />
        <Container
          sx={{
            marginTop: '-5rem',
            position: 'relative',
            zIndex: 3,
            paddingY: '0 !important',
          }}
        >
          <SearchBox />
        </Container>
       
        <Container paddingTop={'20px !important'}>
          <LastStories />
        </Container>
        
        
        
      </Box>
     
    </Main>
  );
};

export default BlogReachView;
