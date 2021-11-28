exports.run = async (client, message) => { 
        message.channel.send(`Ping: **${client.ws.ping}ms**`) 
}    


 
    module.exports.config = {
            name: "ping",
            aliases: ['pong', 'pingpong'],
        } 
