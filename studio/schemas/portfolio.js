export default {
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Feature Image',
      name: 'featureImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
};
