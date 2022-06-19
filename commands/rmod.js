const Discord = require("discord.js")

exports.run = async (client, message, args, level) => { 
    if(message.author.id !== "550692171531943956") return;
        let member = message.mentions.members.first();
    message.guild.roles.fetch('742803994816020503')
        .then(role => {
          member.roles.remove(role).catch(console.error); 
          message.delete()
          })
        .catch(console.error);
      message.guild.roles.fetch('967688091269746688')
        .then(role => {
            member.roles.remove(role).catch(console.error); 
            })
            .catch(console.error);
     message.guild.roles.fetch('987972120350953476')
        .then(role => {
            member.roles.add(role).catch(console.error); 
            })
            .catch(console.error);
}
