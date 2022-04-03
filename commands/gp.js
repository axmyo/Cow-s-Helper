const { MessageEmbed } = require("discord.js");


exports.run = async (client, message) => { 
    const allowedDevs = ['550692171531943956'];
	if (!allowedDevs.includes(message.author.id)) {
		return message.reply('This is a dev only command.', { allowedMentions: { repliedUser: false } });
	}
  let args = message.content.split(" ").slice(1);
     message.delete();
     message.channel.send(args.splice(0).join(" ")).then(msg=>msg.delete())
    }

    module.exports.config = {
            name: "gp",
            aliases: ['ghostping'],
        }
