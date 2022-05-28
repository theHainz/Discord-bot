const Discord = require('discord.js');

const client = new Discord.Client();
const TOKEN = '';

import { response } from './botresponses';

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "lean") {
    msg.reply(response);
  }
})

client.login(TOKEN)