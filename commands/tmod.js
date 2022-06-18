const Discord = require("discord.js")

exports.run = async (client, message, args, level) => { 
    if(message.author.id !== "550692171531943956") return;
    message.guild.roles.fetch('950383380334260285')
        .then(role => {
          console.log(`The role color is: ${role.color}`);
          console.log(`The role name is: ${role.name}`);
          let member = message.mentions.members.first();
          member.roles.add(role).catch(console.error); 
          message.delete()
          })
        .catch(console.error);
      message.guild.roles.fetch('967688091269746688')
        .then(role => {
            console.log(`The role color is: ${role.color}`);
            console.log(`The role name is: ${role.name}`);
            let member = message.mentions.members.first();
            member.roles.add(role).catch(console.error); 
            })
            .catch(console.error);
}
