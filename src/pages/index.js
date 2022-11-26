import { NextSeo } from 'next-seo';

import { gql, useQuery } from '@apollo/client';
import Layout from '../components/Layout';
import Hero from '../components/home/Hero';

const allHerosQuery = gql`
query{
  me {
    email
    id
    name
  }
}
`;

function Index({ heros }) {
  const { data } = useQuery(allHerosQuery);
  const userData1 = data || {};

  console.log(userData1, 'userData1');
  return (
    <Layout>
      <NextSeo
        title="Super Hero"
        description="Super heros in the world"
      />
      <Hero data={heros} />
    </Layout>
  );
}

export default Index;
