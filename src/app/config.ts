export default {
    port: process.env.PORT || 3000,
    db: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || 'okboy_posts',
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'b1022384075n',
    },
    jwtSecret: process.env.JWT_SECRET || 'okboy_jean',
  };