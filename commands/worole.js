exports.run = async (client, message) => { 
    mention = message.mentions.users.first();
    
    message.delete()
    message.channel.send(`**Welcome to Cow's Pasture ticket system.** \n\nHow may the staff team help you today? \n\nAlso, I noticed that you don’t have the Calves role, with what you can access the rest of this server. So head over to <#806322270514970634> and read the rules. After you're done reading them, click the green tick down the bottom on the channel to get access to the rest of the server! \n\n${mention}`)
    
}    



module.exports.config = {
        name: "worole",
        aliases: ['pong', 'pingpong'],
    } 
