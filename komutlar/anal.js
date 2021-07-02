const Discord = require("discord.js");;
const superagent = require('superagent');

module.exports = {
kod: "anal",
async run (client, message, args) {  // Beyefendi Kod Paylaşım

    var beyefendikod = new Discord.MessageEmbed()
                .setDescription(`**Bu Kanal NSFW Kanalı Değil!**`)
                .setColor('RED')
    if (!message.channel.nsfw) return message.channel.send(beyefendikod)

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'anal'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(message.author.username,message.author.avatarURL())
                .setTitle(':underage: Gitmek İçin Tıkla :underage:')
                .setURL(response.body.message)
                .setImage(response.body.message)

    message.channel.send(embed_nsfw);
        })
}
}
