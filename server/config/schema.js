import { makeExecutableSchema } from 'graphql-tools';

import { types } from '../types';
import { resolvers } from '../resolvers';
import { queries } from '../queries';
import { mutations } from '../mutations';

const typeDefs = [
  ...queries,
  ...mutations,
  ...types
];

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
