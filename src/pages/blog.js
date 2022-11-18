import React from 'react';
import BlogView from 'views/BlogReachView';
import { Client } from '../lib/client';

const BlogPage = ({ blog }) => {
  return <BlogView blog={blog} />;
};

export default BlogPage;
export async function getStaticProps() {
  const blog = await Client.fetch(`*[_type == "blog"]{
    title,
    tags[]->{
      tag
    }, 
    excerpt,
  
    slug,
    releaseDate,
    featureImage{
      asset->{
        url
      }
    },
    
  }`);
  return {
    props: {
      blog,
    },
  };
}
