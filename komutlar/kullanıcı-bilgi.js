const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment");

module.exports = {
    kod: "user",
    async run (client, message, args, tools) {
        let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);
       
    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
    
    .setThumbnail(user.avatarURL)
    
    .setTitle(`${user.username}#${user.discriminator} Kullanıcı Bilgi'si`)
    
    .addField("İsim :",`${user.username}#${user.discriminator}`, true)
    .addField("İd :", `${user.id}`, true)
    .addField("Discord Tag :", `#${user.discriminator}`, true)
    .addField("Hesap Oluşturma Tarihi :", `${moment.utc(user.createdAt).format('dddd, MMMM Do  YYYY, ')}`, true)
    .addField("Sunucuya Katılma Tarihi :", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY')}`, true)
    message.channel.send({embed});
    }

    }
