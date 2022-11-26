import { NextSeo } from 'next-seo';

import { gql, useQuery } from '@apollo/client';
import Layout from '../components/Layout';
import Hero from '../components/home/Hero';

const allHerosQuery = gql`
query {
  me {
    email
    name
  }
}
`;

function Index({ heros }) {
  const { data } = useQuery(allHerosQuery);
  console.log(data);

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
