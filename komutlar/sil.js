module.exports = {
    kod: "sil",
    async run (client, message, args){
        if (isNaN(args)) return message.reply('Lütfen 2-100 Arası Mesaj Giriniz');
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Yetkiye Sahip Değilsin !')
        message.channel.bulkDelete(Number(args))
        const { MessageEmbed} = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Başarıyla Belirttiğiniz Mesaj Sayısı Kadar Mesaj Silindi')
        .setDescription('Silinen Mesaj Sayısı: ' + args)
        message.channel.send(embed).then(mesaj => {
            setTimeout(function() {
                mesaj.delete()
            }, 5000);
        })
    }
}