const { MessageEmbed } = require("discord.js")

module.exports = {
  kod: "eğlence",
  async run (client, message, args) {
    const embed = new MessageEmbed()
    .setTitle('Yardım Paneli')
    .addField('??sahtemesaj', 'Sahte Mesaj Gönderir',)
    .addField('??change-my-mind', 'Change My Mind Memesini Yollar')
    message.channel.send(embed)

  }
}
