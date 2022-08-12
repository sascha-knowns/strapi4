module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapiknownsdb"),
        username: env("DATABASE_USERNAME", "strapi_user1"),
        password: env("DATABASE_PASSWORD", "G5TifKq7huq8Va8svlQv9"),
      },
      options: {},
    },
  },
});
