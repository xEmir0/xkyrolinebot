module.exports = {
kod: "alevlilogo",
async run (client, message, args) {

const Discord = require('discord.js');

  const yazi = args.slice(0).join('+');

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :Yldz:`)
  const kayra = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${yazi}`
  .replace(' ', '+')


  const embed = new Discord.MessageEmbed()
  .setTitle("Logo Yapım")
  .setColor("BLUE")
  .setImage(kayra)
  .setFooter('Alevli Logonuz hazır!')
  message.channel.send(embed)

}
}
