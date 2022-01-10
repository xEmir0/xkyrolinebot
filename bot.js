const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar

client.commands= new Discord.Collection(); // komutları alıyoruz

const prefix = "??"

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on('ready', () => {
    console.log('Botumuz Aktif')
    const durumlar = [
      "Prefix: gg??",
      "??yardım",
      "Da Giga Chad Mağarası İçin Çalışıyorum.",
    ]
    setInterval(function () {
      let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
      client.user.setActivity(durum)
    }, 10000);
  });

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return message.channel.send(`Komutlarıma Bakılırsa  **${command}** Üzere Adlanmış Bir Komut Bulamadım. **??yardım** Komutunu Yazarak Hepsini Bulabilirsiniz 👀`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.on('message', message => {
  if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
   message.reply(`Prefix'im: **??**, Yardım için: **??yardım**`)
  }
  });

  client.snipe = new Map();
client.on("messageDelete", function(message, channel) {
  client.snipe.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});

//KOMUTLAR BURADADIR BURAYA HERHANGİ BİR TANIMLAMA YAZMAK YASAKTIR//

require('discord-reply');
client.on('message', async message => {
  if (message.content.toLowerCase() === 'sa') {
    message.lineReply('Aleykümselam Hoşgeldin 👋');
  }
});

require('discord-reply');
client.on('message', async message => {
  if (message.content.startsWith('yanıtla')) {
    message.lineReply('tamam');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase === '!sa') {
    msg.reply('as');
  }
});

client.login('OTMwMTM3MjE0MjgzODEyODc0.YdxfyA.NyckdsKIalwtbEsHwNdM3WmJhu8')
