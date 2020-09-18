const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();

const prefix = "!";

client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandfiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Kopasz bot is on');
})

client.on('message', (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const command = message.content.slice(prefix.length).toLowerCase();

    if(command === "kopasz"){
        client.commands.get('kopasz').run(message);
    }
});

client.login(tokenPlace);
