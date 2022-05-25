import { Client } from "discord.js";
const client = new Client()

let rng = Math.floor(Math.random() * 6);
let response = '';
switch(rng){
    case 1:
    response === "cum";
    break;
    case 2:
    response === "The White Liquid?";
    break;
    case 3:
    response === "HE SAID THE WORD";
    break;
    case 4:
    response === "SIUUUU";
    break;
    case 5:
    response === "Milk";
    break;
    case 6:
    response === "Your Mother";
    break;
    default:
    response === "more cum";
    break;
}


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

//if some degenerate says cum it'll respond with some fun words
client.on("message", msg => {
  if (msg.content === "Cum") {
    msg.reply(response);
  }
})


//replace token with the bot token
client.login(process.env.TOKEN)