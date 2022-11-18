import { createClient } from 'next-sanity';
const config = {
  projectId: '9u5rj9av',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: false,
};

export const Client = createClient(config);
