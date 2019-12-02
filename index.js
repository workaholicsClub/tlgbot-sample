const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.hears('ping', (ctx) => {
    ctx.reply('PONG');
});

bot.startPolling();