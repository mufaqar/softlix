import React from 'react';
import PortfolioPage from 'views/PortfolioPage';
import { Client } from '../lib/client';

const AgencyPage = ({ portfolio }) => {
  return <PortfolioPage portfolio={portfolio} />;
};

export default AgencyPage;

export async function getStaticProps() {
  const portfolio = await Client.fetch(`*[_type == "portfolio"]{
    title,
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
      portfolio,
    },
  };
}
