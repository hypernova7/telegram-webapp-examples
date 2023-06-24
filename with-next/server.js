require('dotenv/config');
const next = require('next');
const express = require('express');
const { Telegraf } = require('telegraf');
const consola = require('consola');
const fs = require('fs');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const logger = consola.withTag('server');

const server = express();
const app = next({ dev });
const handle = app.getRequestHandler();
const bot = new Telegraf(process.env.BOT_TOKEN);

(async () => {
  try {
    await app.prepare();
  
    server.use(
      await bot.createWebhook({
        domain: 'mydomain.com'
      })
    );
  
    bot.start(async ctx => {
      await ctx.reply('Hi');
    })

    server.get('*', (req, res) => {
      handle(req, res)
    });

    server.listen(port, () => {
      logger.info(`Listening on HTTPS port ${port}`);
    });
  } catch (e) {
    logger.error(e);
  }
})();

