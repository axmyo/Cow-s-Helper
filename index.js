const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client({
  disableEveryone: true
});
const fs = require("fs");

let roles = {
  40 : "978316797294047233",
  30 : "978199772307546172",
  15 : "978199670486618192",
  7 : "978199389405327390"
}

let openTickets = {

}

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
  
  client.on("message", async message => {
    
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
    
    if((message.author.bot) && (message.channel.name.includes('closed')) && (message.author.id === "557628352828014614")){
      for (let embed of message.embeds) {
        if(embed){
          await new Promise(r => setTimeout(r, 5000));
         if(embed.description.includes('Support team ticket controls')){   
            message.channel.send("$transcript") 
          }
          
          await new Promise(r => setTimeout(r, 2000));
          if(embed.description.includes('Transcript')){   
            message.channel.delete();
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

})
  

const bwords = [ 
    "M2H_W6R87mdfZP1",
    "FreePokege", 
    "https://tenor.com/view/repost-if-add-fart-channel-gif-19348669",
    "exceptionalindividuals.com",
    //im planning to use babe, reason why im removing
   // also removed axmo, as it's not used anymore.
    "axmto",
    "axmtoe",
] 







 //!!!!!!!!!!!! NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD !!!!!!!!!!!!


















const BannedWords = [
    "nigger",
    "nigga",
    "niger",
    "niggga",
    "niggger", 
    "n1gger",
    "nigg3r",
    "n1gg3r", 
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
    "kill your self",
    "kys" //kinda dumb
  ]

 //client.on("message", message => {
    // var content = message.content
     //var stringToCheck = content.replace(/\s+/g, '')
 //    let reason = "Banned words";
   //  
   //  for (var i = 0; i < BannedWords.length; i++) {
   //      if (content.includes(BannedWords[i])){  
    //       message.delete()
    //       message.member.send("Hello, you were banned from **Cow's Pasture**. if you would like to appeal the ban, use the link provided below \n\nhttps://docs.google.com/forms/d/e/1FAIpQLSdAvqXurSNVDUDdtxlVR5I6h9PemE5W92p1hKydEM69vv7gjg/viewform") // steak
     //        .then ( 
     //      message.member.ban({ reason: reason })
     //     )
    //         break
  //       }
   //  }
 //  })

 // does not work at all bro

client.on("guildMemberUpdate", (oldMember, newMember) =>{
  if(newMember.roles.cache.size > oldMember.roles.cache.size){
    if(!oldMember.roles.cache.has("742803994816020502") && newMember.roles.cache.has("742803994816020502")){
      console.log(openTickets);
      for(let user of Object.keys(openTickets)){
        if(user == newMember.id){
          setTimeout(() => {
            bot.channels.cache.get(openTickets[user]).delete();
            delete(openTickets[user]);
          }, 600000)
        }
      }
    }
  }
})

client.on("message", message => {
    var content = message.content
    var stringToCheck = content.replace(/\s+/g, '')
    
    for (var i = 0; i < bwords.length; i++) {
        if (content.includes(bwords[i])){  
          message.delete()
            break
        }
    }
  })


client.login(config.token)
