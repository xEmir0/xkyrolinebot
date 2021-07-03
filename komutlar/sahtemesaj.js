module.exports = {
    kod: "sahtemesaj",
    async run (client, message , args) {
        const user = message.mentions.users.first()
        if (!user) return message.channel.send("Bir Kullanıcı Etiketle.")
        if (user.bot) return message.channel.send("Botları Etiketlemeyiniz. Normal Bir Kullanıcı Etiketleyiniz")
        if (!args[1]) return message.channel.send("Bir Mesaj Giriniz")
        const mesaj = args.slice(1).join(" ")
        const webhook = await message.channel.createWebhook(user.username, {
            reason: "Eğlence",
            avatar: user.displayAvatarURL()
        })
        webhook.send(mesaj)
        setTimeout(() => {
            webhook.delete()
        }, 5000)
    }
}