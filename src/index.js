const TelegramBot = require("node-telegram-bot-api");

const { TOKEN } = require("./config.js");

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", (msg) => {
  //   const userId = msg.from.id;
  const chatId = msg.chat.id;
  //   const { username } = msg.chat;

  const { text } = msg;

  if (text !== "/richlist") {
    return bot.sendMessage(chatId, "Please Input the command correctly.");
  }
  // send a message to the chat acknowledging receipt of their message
});
