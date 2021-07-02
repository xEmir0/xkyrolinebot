module.exports = {
  kod: "ping",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle('Ping Tablosu')
    .addField('Botun Pingi:', client.ws.ping + ' ms')
    .addField('Mesaj Gecikme Süresi:', `${Date.now() - message.createdTimestamp} ms`)
    .setThumbnail("https://cdn.discordapp.com/attachments/807305443063365673/810921303829119006/636163263145125849.png") // sağ üstte bulunan resim
    .setImage("https://cdn.discordapp.com/attachments/807305443063365673/810922673059790858/2Q.png") // altta bulunan kocaman resim
    message.channel.send(embed)
  }
}
