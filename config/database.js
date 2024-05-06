const path = require('path');

module.exports = ({ env }) => ({
  connections: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'aws-0-us-west-1.pooler.supabase.com'),
      port: env.int('DATABASE_PORT', '5432'),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres.qsschjnvebclvhhtjaqx'),
      password: env('DATABASE_PASSWORD', '8PiUYriyk95pKfyF'),
      ssl: env.bool('DATABASE_SSL', false)
    },
    useNullAsDefault: true,
  }
});
