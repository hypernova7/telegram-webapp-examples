import 'dotenv/config';
import express from 'express';
import consola from 'consola';
import { Telegraf } from 'telegraf';

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);
const logger = consola.withTag('server');

(async () => {
  try{
    app.use(await bot.createWebhook({
      domain: 'yourdomian.com'
    }));
  } catch (e) {
    logger.error(e);
  }
})

bot.start(async ctx => {
  await cxt.reply('Hi');
})

export default defineEventHandler(({ node }) => {
  app.handle(node.req, node.res);
});
