import schema from '../../db/schema.json';
import {createQuery} from '../libs/queries';

const schemaQueries = schema.map(({ table_name })=>{
  return createQuery(table_name);
}).join('\n');

export const queries = [
  `type Query {
    ${schemaQueries}
  }`
];
