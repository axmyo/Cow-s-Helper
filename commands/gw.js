exports.run = async (client, message) => { 
    mention = message.mentions.users.first();
    
    message.delete()
    message.channel.send(`**Welcome to Cow's Pasture ticket system.** \n\n If you want to participate in giveaways, make sure you check a channel named giveaways (<#906929378997448704>).\n\n${mention}`)
    
}    



module.exports.config = {
        name: "gw",
        aliases: ['giveaways', 'giveaway'],
    } 
