import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs, resolvers } from './mergeTools';

const graphqlSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default graphqlSchema;
