const { Client, Message, MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
        let logs = await client.channels.fetch('868645138770051152')
	if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('I don\'t have permission to ban members!', { allowedMentions: { repliedUser: false } });
        if(!message.member.hasPermission('BAN_MEMBERS') && message.author.id != "550692171531943956") return message.reply("no, get ban perms man");
	if (!args[0]) return message.reply('Provide someone to ban!', { allowedMentions: { repliedUser: false } });
	let check = false;
	const target = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(e => {
		check = true;
		return message.reply('Can\'t find specefied member! Provide a valid id', { allowedMentions: { repliedUser: false } });
	});
	if (check) return;
	if(target.id === message.author.id) return message.reply('Why would you want to ban yourself?!', { allowedMentions: { repliedUser: false } });
	if(target.id === client.user.id) return message.reply('Why would you want to ban me?!', { allowedMentions: { repliedUser: false } });
        if(target.roles.cache.has("742803994816020503")) return message.reply("That's a mod, no.")

    let reason = "No reason provided.";
    if (args[1]) reason = args.splice(1).join(" ");
	if (!target.bannable) return message.reply('Can\'t ban specified member! Make sure I\'m above them in the heirarchy', { allowedMentions: { repliedUser: false } });
         message.delete()
			await target.ban({ reason: reason });
			const banEmbed = new MessageEmbed()
				 .setColor("#ff0000")
                                 .setFooter(message.guild.name, message.guild.iconURL())
                                 .addField("**Moderation**", "Ban")
                                 .addField("**Name**", `${target.user.tag}`)
                                 .addField("**Banned By**", message.author.username)
                                 .addField("**Reason**", `${reason || "**No Reason**"}`)
                                 .addField("**Date**", message.createdAt.toLocaleString())
                                 .setTimestamp();
			logs.send(banEmbed)
		}
	

		module.exports.config = {
			name: "ban",
			description: "bans someone",
			aliases: ['forceban']
		  }
