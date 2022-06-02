const Discord = require('discord.js');

const client = new Discord.Client();
const date = new Date();

 client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

  const Answers = [
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
      let randomNumber = Math.floor(Math.random()*Answers.length);
      msg.reply(Answers[randomNumber]);
    }
  })

  client.on("message", msg => {
    if (msg.content === "#cock") {
      let randomNumber = Math.floor(Math.random()*Answers.length);
      msg.reply(Answers[randomNumber]);
    }
  })

  client.on("message", msg => {
    if (msg.content === "#Countdown") {
      
    let countDownDate = new Date("Jun 24, 2022 12:30:00").getTime();

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  msg.reply(`it's ${seconds} Seconds, ${minutes} Minutes, ${hours} Hours, ${days} Days Before School Ends`);

  }

  
  })

client.login(TOKEN)