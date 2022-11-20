import React from 'react';
import CareerListing from '../views/CareerListing/CareerListing';
import { Client } from '../lib/client';
const career = ({ jobs }) => {
  return (
    <div>
      <CareerListing jobs={jobs} />
    </div>
  );
};

export default career;

export async function getStaticProps() {
  const jobs = await Client.fetch(`*[_type == "jobs"]{
    title,    
    position,  
    slug,
    content       
  }`);
  return {
    props: {
      jobs,
    },
  };
}
