const { MessageEmbed } = require("discord.js")

module.exports = {
  kod: "yardım",
  async run (client, message, args) {
    const embed = new MessageEmbed()
    .setTitle('Yardım Paneli')
    .addField('??moderasyon', 'Moderasyon Komutları',)
    .addField('??logo', 'Logo Komutları',)
    .addField('??emoji', 'Emoji Komutları',)
    .addField('??eğlence', 'Eğlence Komutları',)
    .addField('??diğer', 'Diğer Komutlar',)
    .addField('**BAĞLANTILAR**', '[Davet Et](OTMwMTM3MjE0MjgzODEyODc0.YdxfyA.NyckdsKIalwtbEsHwNdM3WmJhu8)')
    message.channel.send(embed)

  }
}
