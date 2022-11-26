import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import schema from '../../graphql';
import connectDatabase from '../../graphql/utils/mongoose';
import apiConfig from '../../graphql/utils/config';

const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  await fn(req, res);
};

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
