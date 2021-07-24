const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client({
  disableEveryone: true
});

client.on("ready", () => {
    function randomStatus() {
      let status = ["h", `1 server`]
      let rstatus = Math.floor(Math.random() * status.length);
      
      client.user.setActivity(status[rstatus], {type: "WATCHING"});
    }; setInterval(randomStatus, 250000)
    console.log(`Logged in as ${client.user.tag}!`)
  })

  client.on('guildMemberAdd', async (member) => {
    client.channels.cache.get('868567522570539018').send(`<a:mariostar:868574927920431104> ***Welcome to Cow's Pasture!!*** <a:mariostar:868574927920431104>\nYou're currently **unverified!** \nPlease check <#806322270514970634> to verify yourself! \n||<@${member.id}>||`);
  });

client.login(config.token)