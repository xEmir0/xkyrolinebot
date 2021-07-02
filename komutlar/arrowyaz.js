module.exports = {
kod: "arrowlogo",
async run (client, message, args) {

const Discord = require('discord.js');

  const yazi = args.slice(0).join('+');

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :Yldz:`)
  const kayra = `https://dynamic.brandcrowd.com/asset/logo/1a2ebc7a-1b24-466a-bee7-9a0e8f5d8395/logo?v=4&text=${yazi}`
  .replace(' ', '+')


  const embed = new Discord.MessageEmbed()
  .setTitle("Logo Yapım")
  .setColor("BLUE")
  .setImage(kayra)
  .setFooter('Logonuz Hazır')
  message.channel.send(embed)

}
}
