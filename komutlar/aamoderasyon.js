const { MessageEmbed } = require("discord.js")

module.exports = {
  kod: "moderasyon",
  async run (client, message, args) {
    const embed = new MessageEmbed()
    .setTitle('Yardım Paneli')
    .addField('??aç', 'Bu Komut Kanalı Açmanıza Yarar.',)
    .addField('??kapat', 'Bu Komut Kanalı Kapatmanıza Yarar.',)
    .addField('??sil', 'Bu Komut Belirlediğiniz Sayı Kadar Mesaj Siler. (Max 100 Minimum 2)',)
    .addField('??toplam-kod', 'Bu Komut Toplam Kaç Komut Olduğunu Gösterir.',)
    .addField('??ban', 'Bu Komut Bir Kişiyi Sunucudan Yasaklamanızı Sağlar .',)
    .addField('??kick', 'Bu Komut Bir Kullanıcıyı Sunucudan Atmanızı Sağlar.',)
    .addField('??snipe', 'Bu Komut Silinen Son Mesajı Gösterir.',)
    .addField('??idban', 'Bu Komut ID İle Bir Kişiyi Banlamanıza Yarar.',)
    message.channel.send(embed)

  }
}
