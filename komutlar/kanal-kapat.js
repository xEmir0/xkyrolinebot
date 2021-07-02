const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
  kod: "kapat",
  async run (bot, message,args) {
    let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "d!";
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      const codwaembed = new Discord.MessageEmbed()
        .setDescription("**Ne yazık ki bu komutu kullanmaya yetkin yok.**")
        .setColor("BLACK");
  
      message.channel.send(codwaembed);
      return;
    }
    let every = message.guild.roles.cache.find(r => r.name === "@everyone");
   message.channel.createOverwrite(every, {
      SEND_MESSAGES: false
    });
  
     const wynex = new Discord.MessageEmbed()
      .setAuthor("Huh")
      .setDescription(`Sohbet yazılamaz hale geldi`)
      .setFooter('Kanal Kapatıldı') 
      .setTimestamp()
      message.channel.send(wynex)
    }
  }