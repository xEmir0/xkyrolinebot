const Discord = require("discord.js");

module.exports = {
    kod: "aç",
    async run (client, message, args) {
        let every = message.guild.roles.cache.find(r => r.name === "@everyone");
        message.channel.createOverwrite(every, {
           SEND_MESSAGES: null
         });
       
        const wynex = new Discord.MessageEmbed()
           .setAuthor("Huh")
           .setDescription(`Sohbet yazılabilir hale geldi`)
           .setFooter('Yazılabilir') 
           .setTimestamp()
           message.channel.send(wynex)
         }
    }
