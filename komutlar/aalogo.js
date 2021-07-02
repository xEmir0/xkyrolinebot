const { MessageEmbed } = require("discord.js")

module.exports = {
  kod: "logo",
  async run (client, message, args) {
    const embed = new MessageEmbed()
    .addField('??alevlilogo', 'Bu Komut Alevli Logo Oluşturur.',)
    .addField('??arrowlogo', 'Bu Komut Oklu Logo Oluşturur.',)
    message.channel.send(embed)

  }
}