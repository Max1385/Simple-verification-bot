
// verify bot made by Max#1385

const {MessageEmbed } = require('discord.js')
const Discord = require ("discord.js")
const db = require("quick.db");
const prefix = "!";

const client = new Discord.Client({
  intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES
  ]
});








// bot start

client.on('ready', () => {
    client.user.setActivity(`${prefix}verify | Bot made by Max#1385`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/twitch"
      });

    console.log("I am logged in!  This bot was created by Max#1385. Check out the open source code on his Github: https://github.com/Max1385 He has a lot more good bot code there that you can code well with! ;) Then use the command !verify in your channel and you're done!");
});




client.on("message", async message =>{
  if (message.content.startsWith(prefix + "verify")) {
      let guildembed = new Discord.MessageEmbed()
      .setAuthor("× Verify Here", "https://cdn.discordapp.com/emojis/761784312244338709.webp?size=96&quality=lossless")
      .setDescription(`By pressing the Verify-✅ button, you agree to the rules of the server. After you have pressed the button, you can experience the server with all its channels and language channels! Have fun on the server, ${client.username} , and always stick to the rules!`)
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(`© Verify-System`,"https://cdn.discordapp.com/emojis/925543349874733096.gif?size=96&quality=lossless")
          

      message.channel.send({embeds: [guildembed]}).then(embedMessage => {
        embedMessage.react("✅");

        
    });

      
  }

});

client.on("messageReactionAdd", async (reaction, user)=> {
  if(!reaction.message.guild) return;
  if(reaction.message.channel.id === "904790128935972874"){
      if(reaction.emoji.id === "<:gc_rot:908046536909406278>"){
          await reaction.message.guild.members.cache.get(user.id).roles.add("920379771018412072")
      }
  }
})




client.login("YOUR TOKEN")
