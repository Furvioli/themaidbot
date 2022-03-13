const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "-Dammi roba mlmlml"){
        message.reply("https://e621.net/%22")
    }
    

})

const welcomeChannelId = "952504192507973662"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Benvenuto nel server, abbia una piacevole permanenza! uwu`,
        files: [img]
    })
})

client.login(process.env.TOKEN)
