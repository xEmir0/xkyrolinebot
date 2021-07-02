module.exports = {
    kod:"idban",
    async run (client, message, args) {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Bu komutu kullanmak için **Üyeleri Yasakla** iznine sahip olmalısın!")
        let wen = args[0];
        if(wen == message.author.id) return message.reply("Kendini mi banlayacaksın, hmm...")
        let samita = args.slice(1).join(" ");
        if(isNaN(wen)) return message.reply("IDler sadece sayılardan oluşabilir!") //AntiCode Development 🖤
        if(message.guild.members.cache.get(wen)) {
            let neiva = message.guild.members.cache.get(wen);
            if(neiva.hasPermission("BAN_MEMBERS")) return message.reply("Yetkilileri banlayamazsın, belki de banlayabilirsin. Neyse...")
            message.guild.members.ban(wen, { reason: samita})
            .then(() => message.channel.send(`**${neiva.username}#${neiva.discriminator}** sunucudan başarıyla yasaklandı! Sebep: ${samita}`)) //by WenSamita Neiva
            .catch(e => {
                console.log(e)
            })
        } else {
            message.guild.members.ban(wen, { reason: samita})
            .then(() => message.channel.send(`**${wen}** IDli kullanıcı sunucudan başarıyla yasaklandı! Sebep: ${samita}`)) //by WenSamita Neiva
            .catch(e => {
                if(e == "DiscordAPIError: Unknown User") message.reply(`Bu IDye sahip bir kullanıcı yok!`)
                else console.log(e)
            })
        }
    }
    }