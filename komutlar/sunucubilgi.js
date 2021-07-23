const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    kod: "sunucu-bilgi",
    async run (client, message, params) {
        if (!message.guild) {
    
            const ozelmesajuyari = new Discord.MessageEmbed()
            
            .setColor("RED")
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField("Uyarı","Bu Komutu Özel Mesajlarda Kullanamazsın!");
              
            return message.author.send(ozelmesajuyari);
            }
            
            if (message.channel.type !== "dm") {
              
            const guild = message.guild.id
            
            const wynex = new Discord.MessageEmbed()
              
            .setColor("GREEN")
              
            .setAuthor(message.guild.name, message.guild.iconURL)
              
            .addField("Sunucu Sahibi", message.guild.owner)
            .addField('Sunucu İsmi', message.guild.name)
            .addField('Sunucu İdsi', message.guild.id)
            .addField('Sunucu Bölgesi', message.guild.region)
            .addField('Üye Sayısı', message.guild.memberCount)
            .addField('Oluşturma tarihi:', message.guild.createdAt, true)
              
            .setThumbnail(message.guild.iconURL);
              
            return message.channel.send(wynex)
            }
            
            }
    }
