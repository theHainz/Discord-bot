const Discord = require('discord.js');

const client = new Discord.Client();
const date = new Date();
const TOKEN = '';

 client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

  const stringarray = [
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
    if (msg.content === "#Cum") {
      let randomNumber = Math.floor(Math.random()*stringarray.length);
      msg.reply(stringarray[randomNumber]);
    }
  })


  let day = date.getDay();
  let month = date.getMonth();
  let hour = date.getHours();
  const theday = 25;
  const themonth = 6;

  client.on("message", msg => {
    if (msg.content === "#Countdown") {
      if (day >= 25 && month == 6 || day == 31 && month == 8){
        msg.reply("No More School!");
      }
      else {
        
      }
    }
  })

client.login(TOKEN)