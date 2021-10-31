/* eslint-disable no-unused-vars */
const { Client, Message, MessageEmbed } = require('discord.js');
/**
 * JSDOC
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {String} args
 */
module.exports.run = async (client, message, args) => {
	let logs = await client.channels.fetch('868645138770051152')
if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You are not allowed to unban members!');
	if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I am not allowed to unban members!');
	if (!args[0]) return message.reply('Please provide a user id to unban!', { allowedMentions: { repliedUser: false } });
	const toUnBan = client.users.cache.get(args[0].match(/[1234567890]{18}/igm)[0]) || await client.users.fetch(args[0], true, true);
	if (!toUnBan) return message.reply('You didnt provide a valid user!', { allowedMentions: { repliedUser: false } });
	try {
		(await message.guild.fetchBan(toUnBan));
	}
	catch (err) {
		return message.reply('The user isnt banned!', { allowedMentions: { repliedUser: false } });
	}
	message.guild.members.unban(toUnBan);
	
	const unbanEmbed = new MessageEmbed()
	 .setColor("GREEN")
         .setFooter(message.guild.name, message.guild.iconURL())
         .addField("**Moderation**", "Unban")
         .addField("**Name**", `${toUnBan.username}`)
         .addField("**Unbanned By**", message.author.username)
         .addField("**Date**", message.createdAt.toLocaleString())
         .setTimestamp();
	logs.send(unbanEmbed)
};
module.exports.config = {
    name: "unban",
    description: "remove someones ban by id",
    aliases: ['removeban']
    }
