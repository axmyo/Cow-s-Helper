const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client({
  disableEveryone: true
});
const fs = require("fs");

client.on("ready", () => {
    function randomStatus() {
      let status = ["h", `1 server`]
      let rstatus = Math.floor(Math.random() * status.length);
      
      client.user.setActivity(status[rstatus], {type: "WATCHING"});
    }; setInterval(randomStatus, 250000)
    console.log(`Logged in as ${client.user.tag}!`)
  })

  client.on('guildMemberAdd', async (member) => {
    client.channels.cache.get('874694781882744852').send(` <a:mariostar:868574927920431104> <@${member.id}> Welcome to Cow's pasture! \nMake sure to go to <#874694997805518938> to choose your roles! <a:mariostar:868574927920431104>`);
  });
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();

  
  fs.readdir("./commands/", (err, files) => {
    if (err) {
      console.log(err);
      return console.log('Error while trying to get the commmands.');
    }
    files.forEach((file) => {
      const command = require(`./commands/${file}`);
      const commandName = file.split('.')[0];
  
      client.commands.set(commandName, command);
    });
  });
  
  client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = ("<");
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(client,message,args)

})
  
const BannedWords = [
    "nigger",
    "nigga",
    "niger",
    "niggga",
    "niggger",
    "n1gg",
    "n1g",
    "n1gger",
    "nigg3r",
    "n1gg3r",
    "n1ga", 
    "niga",
    "niggar",
    "negro",
    "n1gg4r",
    "negr0",
    "n3gr0",
    "ni🅱🅱a",
    "n1🅱🅱a",
    "n1🅱🅱er",
    "ni🅱🅱er",
    "n1🅱🅱3r",
    "ni🅱🅱3r",
    "ni🇧🇧a",
    "n1🇧🇧a",
    "n1🇧🇧er",
    "ni🇧🇧er",
    "n1🇧🇧3r",
    "ni🇧🇧3r",
    "Nigga",
    "nIgga",
    "niGga",
    "nigGa",
    "niggA",
    "NIgga",
    "NIGga",
    "NIGGa",
    "NIGGA",
    "NIGGGA",
    "Nigger",
    "nIgger",
    "niGger",
    "nigGer",
    "niggEr",
    "niggeR",
    "NIgger",
    "NIGger",
    "NIGGer",
    "NIGGEr",
    "NIGGER",
    "nigger",
    "fuck you all",
    "fuck yall",
    "go die",
    "kys",
    "kill your self",
    "ya'll will die",
    "retard",
    "retarded"
  ]

client.on("message", message => {
    var content = message.content
    var stringToCheck = content.replace(/\s+/g, '')
    let reason = "Banned words";
    
    for (var i = 0; i < BannedWords.length; i++) {
        if (content.includes(BannedWords[i])){  
          message.delete()
          message.member.ban({ reason: reason })
            break
        }
    }
  })


client.login(config.token)
