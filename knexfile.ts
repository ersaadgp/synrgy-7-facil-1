import type { Knex } from 'knex'

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      user: 'postgres.ngxxbyglkmjfqzuromvm',
      password: '17Agustus1945',
      port: 6543,
      host: 'aws-0-ap-southeast-1.pooler.supabase.com',
      database: 'postgres',
    },
  },
}

module.exports = config
