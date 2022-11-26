import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import schema from '../../graphql';
import connectDatabase from '../../graphql/utils/mongoose';
import apiConfig from '../../graphql/utils/config';
import allowCors from '../../utils/cors';

const apolloServer = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
  context: async () => {
    console.log('context ready');
    await connectDatabase(apiConfig.get('mongodb'));
    console.log('db connected');
  },
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res }),
});

export default allowCors(handler);
