import schema from '../../db/schema.json';
import {createMutation} from '../libs/mutations';

const schemaMutations = schema.map(({ table_name, columns })=>{
  return createMutation(table_name, columns);
}).join('\n');

export const mutations = [
  `type Mutation {
    ${schemaMutations}
  }`
];
