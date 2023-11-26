import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {
  polling: true,
  // request: {
  //   agentclass: agent,
  //   agentoptions: {
  //     sockshost: process.env.proxy_socks5_host,
  //     socksport: parseint(process.env.proxy_socks5_port),
  //     // if authorization is needed:
  //     // socksusername: process.env.proxy_socks5_username,
  //     // sockspassword: process.env.proxy_socks5_password
  //   },
  // },
});

export default function handler(req, res) {
  // console.log(process.env.TELEGRAM_TOKEN);
  bot.sendMessage(process.env.TELEGRAM_CLIENTID, JSON.stringify(req.body));
  res.status(200).json({ message: "Hello from Next.js!" });
}
