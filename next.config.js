module.exports = {
  async redirects() {
    return [
      {
        source: '/writings',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
