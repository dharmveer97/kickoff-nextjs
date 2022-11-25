import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs, resolvers } from './test';

const graphqlSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default graphqlSchema;
