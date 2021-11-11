const { MessageEmbed } = require("discord.js");



exports.run = async (client, message, args) => { 
        let logs = await client.channels.fetch('868645138770051152')
        const target = args[0];
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('I don\'t have permission to ban members!', { allowedMentions: { repliedUser: false } });
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You don\'t have permission to ban members!', { allowedMentions: { repliedUser: false } });
        if (isNaN(target)) return message.reply(`Please specify an ID`);
       


 let reason = "No reason provided.";
    if (args[1]) reason = args.splice(1).join(" ");

            try {
                message.guild.members.ban(target, {reason: reason.length < 1 ? 'No reason supplied.': reason});            
                    message.delete()
            const embed = new MessageEmbed()
                .setColor("#ff0000")
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderation**", "HackBan")
                .addField("**ID**", `${target}`)
                .addField("**Banned By**", message.author.username)
                .addField("**Reason**", `${reason || "**No Reason**"}`)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();
            logs.send(embed)
            
            } catch (error) { console.log(error)}
    }
    module.exports.config = {
            name: "hackban",
            aliases: ['forceban', 'softban'],
            usage: "[hackban || forceban] <user ID>",
        }
