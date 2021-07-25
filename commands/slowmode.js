const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  if (message.author.bot) return;
  if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.channel.send(
      'You need `MANAGE_MESSAGES` permission to execute this command.',
    );
    if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('I need the `MANAGE_CHANNELS` permission to execute this command.') 
  const messageArray = message.content.split(' ');
  const args = messageArray.slice(1);
  const seconds = args[0];
  const MAX_SECONDS = 21600;

  if (isNaN(seconds)) {
    return message.channel.send('You need to specify time in seconds!');
  }

  if (seconds > MAX_SECONDS) {
    return message.channel.send(
      `The maximum number of seconds is ${MAX_SECONDS}.`,
    );
  }

  try {
    await message.channel.setRateLimitPerUser(seconds);
    message.channel.send(`Slowmode is now ${seconds}s`);
  } catch (error) {
    message.channel.send('Oops, there is a problem with that command');
    console.log(error);
  }
}


module.exports.config = {
    name: "sm",
    aliases: ['slowmode']
}