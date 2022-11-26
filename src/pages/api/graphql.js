import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import schema from '../../graphql';
import connectDatabase from '../../graphql/utils/mongoose';
import apiConfig from '../../graphql/utils/config';

const microCors = require('micro-cors');

const cors = microCors({ allowMethods: ['PUT', 'POST'] });

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

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res }),
});

export default cors(handler);
