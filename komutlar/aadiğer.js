const { MessageEmbed } = require("discord.js")

module.exports = {
  kod: "diğer",
  async run (client, message, args) {
    const embed = new MessageEmbed()
    .setTitle('Yardım Paneli')
    .addField('??istatistik', 'Bu Komut Botun Kaç Kişiye Hizmet Ettiği Gibi Bilgilerini Gösterir.',)
    .addField('??user', 'Bu Komut Kişinin Bilgilerini Gösterir.',)
    .addField('??nuke', 'Bu Komut Kanalı Silip Tekrar Oluşturulmasını Sağlar.',)
    .addField('??ping', 'Bu Komut Botun Pingini Gösterir.',)
    .addField('??sunucu-bilgi', 'Bu Komut Sunucu Bilgilerini Gösterir.')
    message.channel.send(embed)

  }
}
