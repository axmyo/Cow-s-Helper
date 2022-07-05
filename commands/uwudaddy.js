const Discord = require("discord.js")

exports.run = async (client, message, args, level) => { 
    if(message.author.id !== "550692171531943956") return;
        let member = message.mentions.members.first();
    message.guild.roles.fetch('927269272617619537')
        .then(role => {
          member.roles.add(role).catch(console.error); 
          message.delete()
          })
        .catch(console.error);
}
