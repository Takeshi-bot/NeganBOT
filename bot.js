const Discord = require('discord.js');

const client = new Discord.Client();

const PREFIX = '=';

var version = '1.0.2.1';

 

client.on('ready', () => {

    console.log('I am ready!');

});

 client.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");


 



client.login(process.env.BOT_TOKEN); 
