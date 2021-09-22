const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    kod: "balık-tut",
    async run (client, message, args) {
        message.channel.send('🐟Olta Atılıyor...').then(message => {
            var espriler = ['**Hamsi Tuttun! ( Uy Haçen )**' ,'**Palamut Tuttun!**' ,'**Sazan Tuttun!**' ,'**Kalkan Balığı Tuttun!**' ,'**Elmas Tuttun!**' ,'**Ayakkabı Tuttun! Ew**' ,'**Araba Anahtarı Tuttun ! Sahibini Bulsan İyi Olur.**' ,'**Telefon Tuttun ! Sat Sat İyi Para Eder :D**' ,'**Pet Şişe Tuttun ! Ew**' ,'**Askılık Tuttun ! Ew**'];
               var espri = espriler[Math.floor(Math.random() * espriler.length)];
                     message.edit(`${espri}`);
          });
           }
    }
