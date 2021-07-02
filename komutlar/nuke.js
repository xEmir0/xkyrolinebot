const Discord = require("discord.js")

module.exports = {
kod: "nuke",
async run (client, message, args) {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Yönetici İznine Sahip Olmalısın !')

  const onayembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setAuthor("Nuke")
  .setFooter("Onaylamak için 👍 emojisine, Red etmek içinse 👎 emojisine tıklayınız")
  .setDescription("**UYARI!** \n\nEğer Onaylarsanız Kanal Silinecek Ancak Tekrar Oluşturulacaktır\n\n Eğer Redderseniz Hiçbirşey Olmayacaktır")
  message.channel.send(onayembed).then(msg => {
msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
    return ['👎', '👍'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
      message.channel.clone({position: message.channel.position});
      message.channel.delete();
        } else {
            message.reply('İptal edildi!');
      msg.delete({timeout:3000})
        }
    })
    .catch(collected => {
        message.reply('Bir hatayla karşılaştık! Lütfen daha sonra tekrar deneyiniz.');
    });

})
 }
}
