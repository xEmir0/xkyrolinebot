const { MessageEmbed } = require("discord.js")

module.exports = {
  kod: "emoji",
  async run (client, message, args) {
    const embed = new MessageEmbed()
    .setTitle('Yardım Paneli')
    .addField('??çal', 'Bu Komut Belirttiğiniz Emojiyi Kendi Sunucunuza Ekler.',)
    .addField('??emoji', 'Bu Komut Belirttiğiniz Emojinin Bilgilerini Gösterir.',)
    message.channel.send(embed)

  }
}