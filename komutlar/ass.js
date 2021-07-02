const Discord = require("discord.js");;
const superagent = require('superagent');

module.exports = {
kod: "ass",
async run (client, message, args) {

    var bikod = new Discord.MessageEmbed()
                .setDescription(`**Bu Kanal NSFW Kanalı Değildir**`)
                .setColor('RED')
    if (!message.channel.nsfw) return message.channel.send(bikod)

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'ass'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(message.author.username,message.author.avatarURL())
                .setTitle(':underage: Gitmek İçin Tıkla:underage:')
                .setURL(response.body.message)
                .setImage(response.body.message)

    message.channel.send(embed_nsfw);
        })
}
}
