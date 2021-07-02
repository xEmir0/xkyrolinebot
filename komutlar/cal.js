const Discord = require('discord.js');

module.exports = {
    kod: "çal",
    async run (client, message, args) {
        if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(!args[0] && !message.attachments.first()) return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.addField('Bu komut eğer emoji sunucusu yapıyorsanız veya emojiyi indirmeden direkt sunucuya eklemek istiyorsanız tam sizlik bir komutdur')
.addField('Kullanım', `??çal <emoji>
??çal <emojinin linki>`)
.addField('Örnek', `??çal 😀
??çal https://discord.com/assets/7c010dc6da25c012643ea22c1f002bb4.svg
??çal <Emoji Dosyası>`)
.setFooter('Komutu Kullanan Kişi '+message.author.username, message.author.avatarURL({ dynamic: true })));


if(message.attachments.first()) {
  try {

    return message.guild.emojis.create(message.attachments.first().url, message.attachments.first().name.split('.')[0], { reason: `Responsible moderator: `+message.author.tag }).then(emoji => message.channel.send(`Uploaded: ${message.guild.emojis.cache.get(emoji.id)}`))

  } catch(error) {
    console.log(error);
    return message.channel.send(`Bir sorun oldu bunları deneyebilirsiniz ; 
1. - Sunucunun emoji kapasitesi dolmuştur.
2. - GIF veya PNG kullanabilirsiniz.
3. - Emoji-Dosya 256kb'dan daha büyüktür.`);
  }
} else {
  if(args.slice(0).join(' ').startsWith('https://') && args.slice(0).join(' ').includes('discord')) {
    try {

      return message.guild.emojis.create(args.slice(0).join(' '), args.slice(0).join(' ').split('/')[4].split('.')[0], { reason: `Responsible moderator: `+message.author.tag }).then(emoji => message.channel.send(`Uploaded: ${message.guild.emojis.cache.get(emoji.id)}`)).catch(err => message.channel.send(`Bir sorun oldu bunları deneyebilirsiniz ; 
      1. - Sunucunun emoji kapasitesi dolmuştur.
      2. - GIF veya PNG kullanabilirsiniz.
      3. - Emoji-Dosya 256kb'dan daha büyüktür.`))
    
    } catch(error) {
      console.log(error);
      return message.channel.send(`Bir sorun oldu bunları deneyebilirsiniz ; 
      1. - Sunucunun emoji kapasitesi dolmuştur.
      2. - GIF veya PNG kullanabilirsiniz.
      3. - Emoji-Dosya 256kb'dan daha büyüktür..`);
    };
  } else {
const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
  try {
    
    let animated = false;
    if(s.startsWith('<a:')) animated = true;
    var url = '';
    var isim = '';

    if(animated === false) {
     url = 'https://cdn.discordapp.com/emojis/'+s.split(':')[2].split('>')[0]+'.png?v=1';
     isim = s.split('<:')[1].split(':')[0];
    } else {
     url = 'https://cdn.discordapp.com/emojis/'+s.split(':')[2].split('>')[0]+'.gif?v=1';
     isim = s.split('<a:')[1].split(':')[0];
    };

    return message.guild.emojis.create(url, isim, { reason: `Responsible moderator: `+message.author.tag }).then(emoji => message.channel.send(`Uploaded: ${message.guild.emojis.cache.get(emoji.id)}`));

  } catch(error) {
    console.log(error);
    return message.channel.send(`Bir sorun oldu bunları deneyebilirsiniz ; 
    1. - Sunucunun emoji kapasitesi dolmuştur.
    2. - GIF veya PNG kullanabilirsiniz.
    3. - Emoji-Dosya 256kb'dan daha büyüktür.`);
  
};
  };
};




}
    }