import React from 'react';
import BlogArticle from 'views/BlogArticle';
import { Client } from '../../lib/client';
// Queray
const query = ` *[ _type == "blog" && slug.current == $pageSlug ][0]{
  title,
  _id,
  tags[]->{
      tag
  },

  excerpt,
  content,
  slug,
  metatitle,
  metadescription,
  metatags[],
  releaseDate,
  featureImage{
    asset->{
      url
    },
    caption
  }  
}`;

const LatestBlogs = `*[_type == "blog"]{
  title,
  slug,
  releaseDate,
  featureImage{
    asset->{
      url
    },
    caption
  } 
}`;

const BlogArticlePage = ({ blog, latestBlogs }) => {
  console.log(blog);
  return <BlogArticle blog={blog} latestBlogs={latestBlogs} />;
};

export default BlogArticlePage;

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const blog = await Client.fetch(query, { pageSlug });
  const latestBlogs = await Client.fetch(LatestBlogs);

  return {
    props: {
      blog,
      latestBlogs,
    },
  };
};
