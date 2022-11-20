import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import blog from './blog';
import tags from './tags';
import portfolio from './portfolio';
import jobs from './jobs';
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blog, tags, portfolio, jobs]),
});
