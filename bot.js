const Discord = require('discord.js');

const client = new Discord.Client();

const PREFIX = '=';

var version = '1.0.2.1';

 

client.on('ready', () => {

    console.log('I am ready!');

});

 client.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('ask again later when I am less busy with ur mum');
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Wersja ' + version);
            }else{
                message.channel.send('Nieprawidłowy argument!')
            }
            break;
        case 'author':
            message.channel.send('Autorem bota jest ^~^#4622! <3')
            break;
        case 'clear':
            if(!args[1]) return message.reply('Wystąpił błąd, dodaj drugi argument!')
            message.channel.messageDelete(args[1]);
            break;
        case 'help':
            message.channel.send('> Lista komend: help, info, author, clear, ping.')
            break;
        case 'penis':
            message.channel.send('Twój w porównaniu do mojego to taka mróweczka ziomuś.')
            break;

    }
})


 



client.login(process.env.BOT_TOKEN); 
