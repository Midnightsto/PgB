// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setActivity("pg!help", {type: 'WATCHING'});
});

client.on('message', (message) => {
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
});
client.login('NDUzMjg3NTM5OTY1Njg5ODU2.Dfc7dg.L8k1PAyEgbZTOejvzeq-_jn24f0');

