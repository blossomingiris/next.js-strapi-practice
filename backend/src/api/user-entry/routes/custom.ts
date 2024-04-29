module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/users/:slug',
      handler: 'user-entry.findOne',
      config: {
        auth: false,
      },
    },
  ],
}
