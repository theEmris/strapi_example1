module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bb7570ee3be8a9e5dc4d8a37f2fc9d5a'),
  },
});
