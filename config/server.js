module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzc2Noam52ZWJjbHZoaHRqYXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxODM4NDUsImV4cCI6MjAyOTc1OTg0NX0.XJhaVslRLblIUeeI2k8CeSzd3ISb0aF2XrDtYelhM9k'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

