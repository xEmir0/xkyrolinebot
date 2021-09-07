const { MessageEmbed } = require("discord.js")

module.exports = {
  kod: "yardım",
  async run (client, message, args) {
    const embed = new MessageEmbed()
    .setTitle('Yardım Paneli')
    .addField('??nsfw', 'NSFW komutları',)
    .addField('??moderasyon', 'Moderasyon Komutları',)
    .addField('??logo', 'Logo Komutları',)
    .addField('??emoji', 'Emoji Komutları',)
    .addField('??eğlence', 'Eğlence Komutları',)
    .addField('??diğer', 'Diğer Komutlar',)
    .addField('**BAĞLANTILAR**', '[Davet Et](https://discord.com/api/oauth2/authorize?client_id=785825104210821140&permissions=8&scope=bot)')
    message.channel.send(embed)

  }
}
