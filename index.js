const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('ping', () => 'PONG');

bot.startPolling();