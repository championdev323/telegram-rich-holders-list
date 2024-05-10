const TelegramBot = require("node-telegram-bot-api");

const { TOKEN } = require("./config.js");

const bot = new TelegramBot(TOKEN, { polling: true });

// import apis
const { getTokenHolders } = require("./api.js");

const tokenList = [
  {
    name: "4WMM",
    address: "0x8bf45680485b2ac15e452a9599e87b94c5a07792",
    decimal: 1000000000000000000,
  },
  {
    name: "WBTC",
    address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    decimal: 100000000,
  },
  {
    name: "GRO",
    address: "0x997e3ADb550A85895F5BECF54a2751E6dF24edC8",
    decimal: 1000000000000000000,
  },
];

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  const { text } = msg;

  if (text !== "/richlist") {
    return bot.sendMessage(chatId, "Please Input the command correctly.");
  }

  tokenList.forEach(async (token) => {
    const accounts = await getTokenHolders(token.address);

    let holders = "";

    holders += `\n<a href="https://scan.mypinata.cloud/ipfs/bafybeih3olry3is4e4lzm7rus5l3h6zrphcal5a7ayfkhzm5oivjro2cp4/#/address/${token.address}">${token.name}-LICHLIST</a>\n\n`;

    accounts.map(
      (account, index) =>
        (holders += `${
          index + 1
        }. <a href="https://scan.mypinata.cloud/ipfs/bafybeih3olry3is4e4lzm7rus5l3h6zrphcal5a7ayfkhzm5oivjro2cp4/#/address/${
          account.address
        }">${account.address}</a> ${(
          parseInt(account.value) / parseInt(token.decimal)
        ).toFixed(2)} ${token.name}\n`)
      //   console.log(account.value)
    );

    bot.sendMessage(chatId, holders, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
    });
  });

  // send a message to the chat acknowledging receipt of their message
});
