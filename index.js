const Discord = require('discord.js');
const discordTranscripts = require('discord-html-transcripts');
const config = require("./config.json");

const client = new Discord.Client({
  disableEveryone: true
});
const fs = require("fs");
const bwords = [ 
  "M2H_W6R87mdfZP1",
  "FreePokege", 
  "https://tenor.com/view/repost-if-add-fart-channel-gif-19348669",
  "exceptionalindividuals.com",
  "axmto",
  "axmtoe",
] 
let roles = {
  40 : "978316797294047233",
  30 : "978199772307546172",
  15 : "978199670486618192",
  7 : "978199389405327390"
}
let openTickets = {}

client.on("ready", () => {
    function randomStatus() {
      let status = ["among us"]
      let rstatus = Math.floor(Math.random() * status.length);
      
      client.user.setActivity(status[rstatus], {type: "WATCHING"});
    }; setInterval(randomStatus, 250000)
    console.log(`Logged in as ${client.user.tag}!`)
  })

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
  
  async function transcript(channel){
    const attachment = await discordTranscripts.createTranscript(channel);
    client.channels.cache.get("864780780109692969").send({files: [attachment]});
  }

  client.on("messageCreate", async message => {
    
    if((message.author.id == "159985870458322944") && (message.channel.id == "977785008125251634") && (message.mentions) && (message.content.includes("level"))){
    
      let member = message.mentions.members.first();
      var index = message.content.indexOf("level");
      var text = message.content.substr(index + 1);
      var textArr = text.match(/\d/g);
      var level = textArr.join('');
      var levelNum = parseInt(level);
      for (let role in roles) {
        let roleNum = parseInt(role);
        if(roleNum <= levelNum){
          member.roles.add(roles[roleNum]);
        }
      }
    }

    if((message.author.bot) && (message.channel.name.includes('ticket')) && (message.mentions.users) && (message.author.id === "557628352828014614")){
      for (let embed of message.embeds) {
        if(embed.description.includes('Support will be with you shortly.')){
          let member = message.mentions.members.first();
          if (!member.roles.cache.some(role => role.name === 'Calves')){
            message.channel.send("Hello <@" + message.mentions.users.first().id + ">, \n\nI see that you don't have the **Calves** role, which is required to access the rest of this server. So please head on over to the <#806322270514970634> channel and react with :white_check_mark:. \n\nIf that's all, you can close this ticket, but if you need more help, feel free to ping a staff member. \n\n**Please DO NOT ping offline staff.**");
            openTickets[message.mentions.members.first().id] = message.channel.id;
          } 
          else{
            message.channel.send("Please state your issue and one of our staff members will assist you shortly! if you opened the ticket by mistake, or don't need help anymore, please do feel free to close it! @here");
          }
        }
      }
    }
    
    if((message.author.bot) && (message.author.id === "557628352828014614") && ((message.channel.name.includes('ticket')) || (message.channel.name.includes('closed')))){
      for (let embed of message.embeds) {
        console.log(embed);
        if(embed){
          if(embed.description.includes('Ticket Closed by')){ 
            transcript(message.channel);
          }
        }
      }
    }

    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = ("<");
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(client,message,args)

    var content = message.content
    var stringToCheck = content.replace(/\s+/g, '')
    
    for (var i = 0; i < bwords.length; i++) {
        if (content.includes(bwords[i])){  
          message.delete()
            break
        }
    }
})
  
client.on("guildMemberUpdate", (oldMember, newMember) =>{
  if(newMember.roles.cache.size > oldMember.roles.cache.size){
    if(!oldMember.roles.cache.has("742803994816020502") && newMember.roles.cache.has("742803994816020502")){
      for(let user of Object.keys(openTickets)){
        if(user == newMember.id){
          setTimeout(() => {
            client.channels.cache.get(openTickets[user]).delete();
            delete(openTickets[user]);
          }, 600000)
        }
      }
    }
  }

  if(newMember.id === "943587026370973746"){
    newMember.setNickname("emoball")
  }
})

client.login(config.token)