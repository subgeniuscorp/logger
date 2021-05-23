const pino = require('pino');

const serializers = { err: pino.stdSerializers.err };

module.exports = pino({
  level: process.env.LOG_LEVEL || 'info',
  serializers,
})
