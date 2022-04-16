const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client({
  disableEveryone: true
});
const fs = require("fs");

client.on("ready", () => {
    function randomStatus() {
      let status = ["steak"]
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
    "axmo", //fuck you steak
    "AXMO",  //fuck you steak
    "AAXMO",  //fuck you steak
    "AAAXMO",  //fuck you steak
    "exceptionalindividuals.com",
    "babe", //fuck fuck you steak
] 







 // NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD NWORDS AHEAD


















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
