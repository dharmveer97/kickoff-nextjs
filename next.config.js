/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async headers() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       headers: [
  //         { key: 'Access-Control-Allow-Credentials', value: 'true' },
  //         {
  //           key: 'Access-Control-Allow-Origin',
  //           value: 'https://studio.apollographql.com',
  //         },
  //         {
  //           key: 'Access-Control-Allow-Methods',
  //           value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  //         },
  //         {
  //           key: 'Access-Control-Allow-Headers',
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
