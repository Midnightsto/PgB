// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.reply('Must specify an amount to delete!');
if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
client.on('ready', () => {
    client.user.setActivity("pg!help", {type: 'WATCHING'});
});

client.on('message', (message) => {
       if(message.content == "pg!RD Vega") {
        message.channel.send({embed: {
            color: 3447003,
            title: "RD available in vega:",
            fields: [
              { name: "Name",   value: "Standard\nEnhanced\nPower\nEnhanced Power\nVega\nVega Ancient\nVega Ancient Long\nVega Ancient Strong", inline: true},
              { name: "Cryo",   value: "49\n77\n149\n270\n540\n621", inline: true},
              { name: "Energy", value: "16\n20\n26\n30\n30\n32", inline: true},
              { name: "Rank",   value: "5\n8\n10\n12", inline: true},
              { name: "Planet", value: "Kalabesh\nLyris\nLyris/Aurora\nAurora\nAurora\nR5", inline: true},
              { name: "Mantis", value: "R6Sentinel\nR10Sentinel\nR11Sentinel\nR13,15Sentinel\nSentinel\nR82 Boss", inline: true},
            ]
            }
        });
}});

client.login('NDUxNDUxMjk1OTg4MDU2MDY1.DfKGfg.9HA9SGuJKsP31RdOUWu04VEtlyY');

