module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/src/database/db.sqlite3`
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    useNullAsDefault: true
  },
  production: {
    client: "pg",
    connection: process.env.DB_URL,
    pool: { min: 0, max: 7 },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
  }
}
