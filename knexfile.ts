import type { Knex } from 'knex'

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: 'admin',
      port: 5433,
      host: '127.0.0.1',
      database: 'CH_5_ORM',
    },
  },
}

module.exports = config
