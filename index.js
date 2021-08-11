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
  

client.login(config.token)
