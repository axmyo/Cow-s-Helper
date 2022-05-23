const Discord = require("discord.js")

exports.run = async (client, message, args, level) => { 
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;  
                   const helpmenu = new Discord.MessageEmbed();
                   helpmenu.setColor("PINK");
                   helpmenu.setTitle ('Command List')
}
