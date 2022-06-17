const Discord = require("discord.js")

exports.run = async (client, message, args, level) => { 
    if(message.author.id !== "550692171531943956") return;
       message.guild.roles.fetch('987301284698812426')
            .then(role => {
                    console.log(`The role color is: ${role.color}`);
                    console.log(`The role name is: ${role.name}`);
                    let member = message.mentions.members.first();
                    member.roles.remove(role).catch(console.error); 
                    message.channel.send("remov: reason: sexi")
                })
            .catch(console.error);

}
