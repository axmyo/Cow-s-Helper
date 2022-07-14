const { MessageEmbed } = require("discord.js");



exports.run = async (client, message, args) => { 
        let logs = await client.channels.fetch('868645138770051152')
        const target = args[0];
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('I don\'t have permission to ban members!', { allowedMentions: { repliedUser: false } });
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You don\'t have permission to ban members!', { allowedMentions: { repliedUser: false } });
        if (isNaN(target)) return message.reply(`Please specify an ID`);
        if (check) return;
        if(target.id === message.author.id) return message.reply('Why you want to ban yourself?!', { allowedMentions: { repliedUser: false } });
        if(target.id === client.user.id) return message.reply('How dare you!', { allowedMentions: { repliedUser: false } });
        if(target.roles.cache.has("742803994816020503")) return message.reply("No banning mods please")});
        if(target.roles.cache.has("950383380334260285")) return message.reply("No banning trial mods please")});


 let reason = "No reason provided.";
    if (args[1]) reason = args.splice(1).join(" ");

            try {
                message.guild.members.ban(target, {reason: reason.length < 1 ? 'No reason supplied.': reason});            
                    message.delete()
            
            } catch (error) { console.log(error)}
    }
    module.exports.config = {
            name: "hackban",
            aliases: ['forceban', 'softban'],
            usage: "[hackban || forceban] <user ID>",
        }
