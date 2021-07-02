module.exports = {
    kod:"sunucu-bilgi",
    async run (client, message, args) {
        const { MessageEmbed } = require('discord.js')
        var guild = message.guild
        var kanallar = guild.channels.cache
        var üyeler = guild.members.cache
        var emojiler = guild.emojis.cache
        var roller = guild.roles.cache
        var embed = new MessageEmbed()
        .setTitle(`${guild.name} Adlı Sunucunun Bilgileri`)
        .addField('**Temel Bilgiler**', [
            `**Sunucu Adı:** ${guild.name}`,
            `**Sunucu ID'si:** ${guild.id}`,
            `**Sunucu Sahibi:** <@${guild.owner.id}>`,
            `**Sunucu Sahibinin Tagı:** ${guild.owner.user.tag}`
        ])
        .addField(`**İSTATİSTİK**`, [
            `**Üye Sayısı:** ${guild.memberCount}`,
            `**Bot Olmayan Kişi Sayısı:** ${üyeler.filter(üye => !üye.user.bot).size}`,
            `**Bot Sayısı:** ${üyeler.filter(üye => üye.user.bot).size}`,
            `**Emoji Sayısı:** ${emojiler.size}`,
            `**Rol Sayısı:** ${roller.size}`,
            `**Kanal Sayısı:** ${kanallar.size}`,
            `**Metin Kanalları Sayısı:** ${kanallar.filter(kanal => kanal.type === 'text').size}`,
            `**Ses Kanalları Sayısı:** ${kanallar.filter(kanal => kanal.type === 'voice').size}`,
            `**Kategori Sayısı:** ${kanallar.filter(kanal => kanal.type === 'category').size}`,
        ])
        .addField('**DURUMLAR**', [
            `**Çevrimiçi:** ${üyeler.filter(üye => üye.presence.status === 'online').size}`,
            `**Boşta:** ${üyeler.filter(üye => üye.presence.status === 'idle').size}`,
            `**Rahatsız Etme:** ${üyeler.filter(üye => üye.presence.status === 'dnd').size}`,
            `**Çevrimdışı:** ${üyeler.filter(üye => üye.presence.status === 'offline').size}`,
        ])
        .setTimestamp(guild.created.Timestamp)
        message.channel.send(embed)
    }
}