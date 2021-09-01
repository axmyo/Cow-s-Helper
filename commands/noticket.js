const { Client, Message, MessageEmbed } = require('discord.js');
const permitted = require('../permitted.json');

module.exports.run = async (client, message, args) => {
    if (!permitted.includes(message.author.id)) return    
    if (!args[0]) return message.reply('Amongus, you need to mention someone', { allowedMentions: { repliedUser: false } });   
    message.guild.roles.fetch('881981815232008274')
            .then(role => {
                    let member = message.mentions.members.first();
                    member.roles.add(role).catch(console.error);
                })
            .catch(console.error);
        message.channel.send(`<@${message.author.id}> Done.`)
		}