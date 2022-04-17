exports.run = async (client, message) => { 
    mention = message.mentions.users.first();
    
    message.delete()
    message.channel.send(`**Welcome to Cow's Pasture ticket system.** \n\nHow may the staff team help you today?\n\n||${mention}||`)
    
}    



module.exports.config = {
        name: "wrole",
        aliases: ['woticket'],
    } 
