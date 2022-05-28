const Discord = require('discord.js');

const client = new Discord.Client();
const TOKEN = '';

 client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})


const stringarray = [
      'cum',
      'The White Liquid?',
      'HE SAID THE WORD',
      'SIUUUU',
      'Milk',
      'Your Mother',
      'Gulp',
      'mmm... soup',
      'more lean',
];


client.on("message", msg => {
  if (msg.content === "cum") {
    let randomNumber = Math.floor(Math.random()*stringarray.length);
    msg.reply(stringarray[randomNumber]);
  }
})

client.login(TOKEN)