const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "d";
var adminprefix = 'o'
const developers = ["270850850857943040"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`:envelope: By Ayman   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`:envelope: By Ayman   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`:envelope: By Ayman   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Ayman");
      message.channel.send(`:envelope: By Ayman`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on('guildMemberAdd', Sal => { //By Salto7#4595
    var embed = new Discord.RichEmbed()
    .setTitle('Welcome')
    .setDescription('***Welçømë Ťø __OBX Kingdom__ 🕊 🌸***')
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('508986501854396416') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });




client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
