import schema from '../../db/schema.json';
import {
  createResolverQueries,
  createResolverMutations
} from '../libs/resolvers';

const schemaResolversQueries = schema.reduce((acc, { table_name })=>{
  return {
    ...acc,
    ...createResolverQueries(table_name)
  };
}, {});

const schemaResolversMutations = schema.reduce((acc, { table_name })=>{
  return {
    ...acc,
    ...createResolverMutations(table_name)
  };
}, {});

export const resolvers  = {
  Query: schemaResolversQueries,
  Mutation: schemaResolversMutations
};
