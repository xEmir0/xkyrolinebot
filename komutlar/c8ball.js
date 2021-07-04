const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    kod: "8ball",
    async run (client, message, args) {
        message.channel.send('🎱Ayarlanıyor...').then(message => {
            var espriler = ['**Dilediğin En Yakın Zamanda Gerçekleşecek**' ,'**Dilediğin Olacak Ama Belirli Bir Zamanı Yok**' ,'**Belki**' ,'**Uğraşırsan Evet**' ,'**Çok Uğraşman/Çalışman Lazım**' ,'**Hayır Olmayacak**' ,'**Uğraşma Bile :D?**' ,'**Hiç Burnuna Sokma Bile**' ,'**Bakarız**' ,'**Azıcık Düzgün Şeyler Dilesen ?**'];
               var espri = espriler[Math.floor(Math.random() * espriler.length)];
                     message.edit(`${espri}`);
          });
           }
    }