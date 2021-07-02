const { MessageEmbed } = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
const os = require('os')
module.exports = {
  kod: "istatistik",
  async run (client, message) {
    const bos = []
    client.guilds.cache.forEach((item, i) => {
      bos.push(item.memberCount)
    });
    const uptime = moment.duration(client.uptime).format(" D [Gün] H [Saat] M [Dakika], S [Saniye]")
    const embed = new MessageEmbed()
    .setTitle('✅ İstatistik')
    .addField('💂🏽 Toplam Kullanıcı', client.users.cache.size)
    .addField('📈 Toplam Sunucu', client.guilds.cache.size)
    .addField('🔍 Toplam Kanal', client.channels.cache.size)
    .addField(`✨ Pingim` ,`${client.ws.ping}ms`,true)
    .addField(`🎄 Node.js`, `${process.version}`, true)
    .setColor('BLUE')
    message.channel.send(embed)
  }
}