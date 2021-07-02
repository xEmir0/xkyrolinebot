const { MessageEmbed } = require("discord.js")

module.exports = {
  kod: "nsfw",
  async run (client, message, args) {
    const embed = new MessageEmbed()
    .addField('??ass', 'Bu Komut Kıç Fotoğrafı Gösterir.',)
    .addField('??anal', 'Bu Komut Anal Fotoğrafı Gösterir.',)
    message.channel.send(embed)

  }
}