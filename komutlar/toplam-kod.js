const Discord = require('discord.js')
module.exports = {
  kod: "toplam-kod",
  async run(client, message, args) {
    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setFooter(`xEmir#0001`)
    .setColor("RANDOM")
    .addField(`Botta Bulunan Toplam Komut Sayısı`,`${client.commands.size}`)
      message.channel.send(embed)
    }
  }
