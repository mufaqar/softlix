import React from 'react';
import CareerOpening from 'views/CareerOpening';
import { Client } from '../../lib/client';
// Queray
const query = ` *[ _type == "jobs" && slug.current == $pageSlug ][0]{
  title, 
  content,
  slug,
  position
  
}`;

const CareerOpeningPage = ({ job }) => {
  console.log(job);
  return <CareerOpening job={job} />;
};

export default CareerOpeningPage;

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const job = await Client.fetch(query, { pageSlug });
  return {
    props: {
      job,
    },
  };
};
