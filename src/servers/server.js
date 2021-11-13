const Koa = require('koa');
const koaBodyParser = require('koa-bodyparser');
const { appConfig } = require('../config/configEnv');
const { receivedMessages } = require('../services/serviceImpl')
let app;

const startApp = async () => {
  const config = appConfig();

  app = new Koa();

  app.use(async (ctx, next) => {
    ctx.config = config;
    await next();
    return ctx;
  });
  app.use(koaBodyParser());

  await receivedMessages(config);

  app.listen(config.port, () => {
    console.log('Server running on http://localhost:3001');
  });

  return app;
};

module.exports = {
  startApp,
};
