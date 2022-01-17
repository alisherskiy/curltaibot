const TelegramBot = require('node-telegram-bot-api');

const token = '5076772026:AAHcI_v8M_lAb22m0ukEx1lvL9jtbZ_nJJs';

const bot = new TelegramBot(token, {polling: true});

const arrMessageBot = ['Привет', 'Хай', 'Здравствуй'];

const roundMatch = (max, min) => {
    return Math.round(min = 0.5 + Math.random() * (max = min + 1));
}

bot.on('message', msg => {
    const {id: id, first_name: userName} = msg.chat;

    if (/Привет/gi.test(msg.text)) {
        bot.sendMessage(id, `${arrMessageBot[roundMatch(2, 0)]} ${userName}`)
    }
})

