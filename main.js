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
    console.log('Informatikus Szaktanács bot is on');
    /*client.channels.cache.get('756462364211282011').send({embed: {
        fields: [
            {name: 'Szabályzat',
        value:"Sziasztok @everyone\n\n Kérlek olvassátok el a szabályzatot mielőtt használatba veszitek a szervert, és reagáljatok az üzenetre egy ✅-al!\n\n ➡️ Discord szobákat próbáljuk meg rendeltetésszerűen használni!\n\n ➡️ Káromkodás engedélyezett mindaddig amíg az nem egymás sértegetésére/degradálására irányul, személyes konfliktusokat NE ITT rendezzétek!\n\n ➡️ Ha bárki észlelt bármi szabálytalanságot vagy problémát, akkor az privátban nyugodtan keressen egy dc  moderátort és rendezzük a dolgokat!\n\n ➡️ Fogadjuk el egymás véleményét, még ha teljesen ellentétes is a sajátunkkal. Ez egy nagyon fontos dolog ahhoz, hogy sikeresen tudjunk egymással kommunikálni!", inline:true}
        ]
    }});*/
})

client.on('message', (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const command = message.content.slice(prefix.length).toLowerCase();

    if(command === "kopasz"){
        client.commands.get('kopasz').run(message);
    }
});

client.on("messageReactionAdd", (reaction, user) => {
    if(reaction.message.channel.id === '756462364211282011' && reaction.emoji.name === '✅'){
        let role = reaction.message.guild.roles.cache.get('756525568748552302');
        reaction.message.guild.member(user).roles.add(role);
    }
})

client.login(token);
