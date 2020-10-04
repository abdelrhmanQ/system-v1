const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://ny-iaaaa.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 
 //الكود


client.on('message',async message => {
    const moment = require('moment'); 
const ms = require('ms') 
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "gstart")) {





    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send("You dont have MANAGE_GUILD Permission!");
    message.channel.send("please send the room name..").then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send("couldnt find the room!");
        room = collected.first().content;
        collected.first().delete();
        msg.edit("Please send the time..").then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send("Wrong Time format EXample: \n1s / 1m /1h / 1d/ 1w");
            duration = collected.first().content
            collected.first().delete();
            msg.edit("please now send what do you want as a gift?").then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setColor("GREEN")
                  .setTitle(`${title}`)
                  .setDescription(`React With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  message.guild.channels.find("name" , room).send(' :tada: **Giveaway** :tada:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 1]
                       if(gFilter === undefined) { 
                       let endEmbed = new Discord.RichEmbed()
                       .setColor("RED")
                       .setTitle(title)
                       .setDescription(`Winners : no enough number of reaction so there is no winner`)
                       .setFooter("Ended at :")
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                     m.clearReactions();
                       } else {
                         let endEmbed = new Discord.RichEmbed()
                       .setColor("GREEN")
                       .setTitle(title)
                       .setDescription(`Winners : ${gFilter}`)
                       .setFooter("Ended at :")
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                       }
                       if(gFilter === undefined) { 

                       } else {
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**`) }
                }, ms(duration));
                     
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});


client.on('ready',  () => {
});

const developers = ['748248314327334935'];
const adminprefix = "$";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
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
client.on("message",msg=>{
 
if(msg.content =="هلا"){
msg.reply("هلا ولله");
 
}
})
client.on("message",msg=>{
 
if(msg.content =="السلام عليكم"){
msg.reply("وعليكم السلام ورحمة الله");
 
}
})
client.on("message",msg=>{
 
if(msg.content =="باك"){
msg.reply("ولكم");
 
}
})
client.on("message",msg=>{
if(msg.content =="باك"){
msg.reply("ولكم نورت/ي يا عسل");
 
}
})
client.on("message",msg=>{
 
if(msg.content =="يلا سلام"){
msg.reply("الله وياك/ي");
 
}
})
client.on("message",msg=>{
 
if(msg.content =="كيف الحال"){
msg.reply("بخير");
 
}
})
client.on("message",msg=>{
 
if(msg.content =="."){
msg.reply("اكتب ..");
 
}
})
client.on("message",msg=>{
 
if(msg.content ==".."){
msg.reply("اكتب ... ولك رتبة");
 
}
})
client.on("message",msg=>{
 
if(msg.content =="..."){
msg.reply("شايفها حلوا ؟");
 
}
})
client.on("message",msg=>{
 
if(msg.content =="...."){
msg.reply("خلصت الــ لعبه شفلك شي / لطلب المساعده توجه للدعم الفني");
 
}
})
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
    if (!message.channel.guild) return;
    message.channel
 message.channel.send('NINJA').then((msg) => {
   if (!message.channel.guild) return;
    message.channel
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });

client.on("message", message => { 
 
  if(message.author.bot) return;
 
  if(!message.content.startsWith(prefix)) return; //ExtremeBot
 
  if(!message.guild) return; 
  if(message.content === (prefix + "roles")) {
 
  let i = 0;
    let U = 1;
    let str = "";
    const roles = message.guild.roles.forEach(role => `${i++} ${str += `${U++} - ` + role.name + "\n"}`)
 
   let embed = new Discord.RichEmbed()
   .setColor("BLACK")
   .setAuthor(`Found ${i} roles this server`) //Mhmd
.setDescription(`${str}`)
   .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setTimestamp();
  message.channel.send(embed)
 
 
  }
  })
client.on("message", message => {
     const args = message.content.split(' ');
    let avt = `${message.author.avatarURL}`;
    let id1 = `https://images-ext-1.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif`
    if(message.guild.channel) return;
                 if (message.content === (prefix + 'u') || message.content === (prefix + "u")) {
const mention = message.mentions.users.first() || message.author;
            let embed = new Discord.RichEmbed() 
.addField(`**Username :**`,`\n ${mention.tag}`)
 
.addField('**User ID :**', `\n${mention.id}`)
 
.addField('**User Created At :**', `\n${moment(mention.createdTimestamp).format('YYYY/MM/DD HH:mm')}`)
 
.addField('**User Joined At :**', `\n${moment(mention.joinedTimestamp).format('YYYY/MM/DD HH:mm')}`)
 
.setThumbnail(`${mention.avatarURL}` , ({format : "png" , dynamic : true , size : "1024"}))
.setFooter(`${mention.tag}`,`${id1}`)
 
message.channel.send(embed);
}
});
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
 
  if (message.content.startsWith(prefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(prefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(prefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(prefix + 'st')) {
    client.user.setGame(argresult, "");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
}
});
client.on('guildMemberAdd', (member) => {
  const moment = require("moment")
        const welcomer = member.guild.channels.cache.find(
            (d) => d.name == 'general'
        );
        if (!welcomer) return;
        if (welcomer) {
            moment.locale('en');
            var m = member.user;
            let Discord = require('discord.js');
 
            member.guild.fetchInvites().then((guildInvites) => {
                setTimeout(() => {
                    const invite = guildInvites.find((i) => i.uses);
 
                    let embed = new Discord.MessageEmbed()
                        .setAuthor(member.tag, member.user.avatarURL())
                        .setTitle('**New Member Join**')
                        .setThumbnail(member.user.avatarURL())
                        .setTimestamp()
                        .setDescription(
                            `Member: ${member}\nInviter: <@${
                                invite.inviter.id
                            }>\nUrl: https://discord.gg/${invite.code}\nAge: ${moment(
                                member.user.createdTimestamp
                            ).fromNow()}`
                        );
 
                    welcomer.send(embed);
                }, 2000);
            });
        }
});
client.on('message', wolf => {
  if (wolf.content === prefix + "help") {////هنا  الامر
let embed = new Discord.RichEmbed()
.setColor("Red")////لون الامبد
.setDescription(`**${prefix}help ( للمساعدة )**

**${prefix}u ( لمعرفة معلومات الحساب)**
 
**${prefix}ping (لمعرفة بنق البوت)**
 
**${prefix}tax (لمعرفة ضريبة البروبوت )**
 
**${prefix}new (لفتح تكت)**
 
**${prefix}FO (للخط)**
   
**${prefix}sug (لقتراح اقتراح او تقيم)**

**${prefix}server (لعرض معلومات السيرفر)**

**${prefix}helpT (لمساعدة التكت)**

**${prefix}id (يعرض لك كل معلومات زياده عنك)**

**${prefix}bot (لاظهار معلومات البوت)**
         
**${prefix}avatar (لاظهار صورتك)**
		 
**${prefix}savatar : (لاظهار صوره السيرفر)**

** Owner Server <@748248314327334935> & <@718177837533757620> **
`)////هنا الاوامر
wolf.channel.send({embed:embed});
}
});  
client.on("message", message => {
  var args = message.content.split(" ");
  var command = args[0];
  var num = args[1];
  var tax = 5.4; //غير قيمة الضريبة من هنا
  if (command == prefix + "tax") {
    let nume = new Discord.RichEmbed()
      .setColor('RED')
      .setDescription(command + " <number>");
    if (!num) {
      return message.channel.send(nume);
    }
    var numerr = Math.floor(num);
    if (numerr < 0 || numerr == NaN || !numerr) {
      return message.reply("**The value must be correct.**");
    }
    var taxval = Math.floor(numerr * (tax / 100));
    var amount = Math.floor(numerr - taxval);
    var amountfinal = Math.floor(numerr + taxval);
    let taxemb = new Discord.RichEmbed()
      .setTitle("[TAX]")
      .setColor('Random')
      .setThumbnail(client.user.displayAvatarURL)
      .setDescription(`Principal amount: **${numerr}**\nTax: **${tax}%**\nTax amount: **${taxval}**\nAmount with tax: **${amount}**\nAmount to be paid: **${amountfinal}**`)
      .setTimestamp()
      .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL);
    message.channel.send(taxemb);
  }
});
const category = "760009718944759838";
let mtickets   = true;
let tchannels  = [];
let current    = 0;
 
client.on("message", message => {
 
  if(message.author.bot) return;
 
  if(!message.content.startsWith(prefix)) return;
 
  if(message.content === (prefix + 'helpT')) {
 
     message.channel.send(`** قائمه اوامر التكت 
 
\`\`${prefix}new\`\` | لفتح تكت
 
\`\`${prefix}close\`\` | لغلق التكت
 
\`\`${prefix}mtickets enable/disable\`\` | لتعطيل وعدم تعطيل التكت
 
\`\`${prefix}cleartickets\`\` | لمسح جميع التكتات **`) 
 
     } 
})
client.on('message',async message => {
    if(message.author.bot || message.channel.type === 'dm') return;
    let args = message.content.split(" ");
    let author = message.author.id;
        if(message.content.startsWith(prefix + 'لاتلعب بذا اساس تشغيل')) {
            let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setColor("#36393e")
			.addField(`تم التطوير من قبل بترولي`)
            .addField(`تم التطوير من قبل بترولي`)
            .addField(`تم التطوير من قبل بترولي`)
			.addField(`تم التطوير من قبل بترولي`)
            .addField(`تم التطوير من قبل بترولي`)
            await message.channel.send(``);
            await message.channel.send(embed);
    } else if(args[0].toLowerCase() === `${prefix}new`) {
        if(mtickets === false) return message.channel.send(`:tools: , **تم ايقاف هذه الخاصية من قبل احد ادارة السيرفر**`);
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`:tools: , **البوت لا يملك صلاحيات لصنع الروم**`);
		console.log(current);
		let openReason = "";
		current++;
    	message.guild.createChannel(`ticket-${current}`, 'text').then(c => {
		tchannels.push(c.id);
		c.setParent(category);
		message.channel.send(`**:tickets: تـم فــتــح تــذكــره.**`);
		c.overwritePermissions(message.guild.id, {
			READ_MESSAGES: false,
			SEND_MESSAGES: false
		});
		c.overwritePermissions(message.author.id, {
			READ_MESSAGES: true,
			SEND_MESSAGES: true
		});
 
		if(args[1]) openReason = `\nسبب فتح التكت , " **${args.slice(1).join(" ")}** "`;
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setColor("#36393e")
		.setDescription(`**انتظر قليلا الى حين رد الادارة عليك**${openReason}`);
		c.send(`${message.author}`);
		c.send(embed);
	});
    } else if(args[0].toLowerCase() === `${prefix}mtickets`) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:tools: , **أنت لست من ادارة السيرفر لتنفيذ هذا الأمر.**`);
		if(args[1] && args[1].toLowerCase() === "enable") {
			mtickets = true;
			message.channel.send(`:white_check_mark: , **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
		} else if(args[1] && args[1].toLowerCase() === "disable") {
			mtickets = false;
			message.channel.send(`:white_check_mark: , **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
		} else if(!args[1]) {
			if(mtickets === true) {
			mtickets = false;
			message.channel.send(`:white_check_mark: , **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
			} else if(mtickets === false) {
			mtickets = true;
			message.channel.send(`:white_check_mark: , **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
			}
		}
    } else if(args[0].toLowerCase() === `${prefix}close`) {
		if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:tools:, **أنت لست من ادارة السيرفر لتنفيذ هذا الأمر.**`);
		if(!message.channel.name.startsWith('ticket-') && !tchannels.includes(message.channel.id)) return message.channel.send(`:tools:, **هذا الروم ليس من رومات التكت.**`);
 
		message.channel.send(`:white_check_mark:, **سيتم اغلاق الروم في 3 ثواني من الاَن.**`);
		tchannels.splice( tchannels.indexOf(message.channel.id), 1 );
		setTimeout(() => message.channel.delete(), 3000);
	} else if(args[0].toLowerCase() === `${prefix}restart`) {
		if(!devs.includes(message.author.id)) return message.channel.send(`:tools:, **أنت لست من ادارة السيرفر لأستخدام هذا الأمر.**`);
		message.channel.send(`:white_check_mark:, **جارى اعادة تشغيل البوت.**`);
		client.destroy();
	} else if(args[0].toLowerCase() === `${prefix}deletetickets`) {
		let iq = 0;
		for(let q = 0; q < tchannels.length; q++) {
			let c = message.guild.channels.get(tchannels[q]);
			if(c) {
				c.delete();
				tchannels.splice( tchannels[q], 1 );
				iq++;
			}
			if(q === tchannels.length - 1 || q === tchannels.lengh + 1) {
				message.channel.send(`:white_check_mark:, **تم مسح \`${iq}\` من التكتات.**`);
			}
		}
	}
});
client.login("");


client.on('message', msg => {  
    if (msg.content === 'كسمك') {  
      msg.delete()
    }
  });
 
client.on('message', msg => {  
    if (msg.content === 'كلب') {  
      msg.delete()  
    }
  });
 
client.on('message', msg => {  
    if (msg.content === 'حمار') {  
      msg.delete()  
    }
  });
 
  client.on('message', msg => {  
    if (msg.content === 'بهيم') {  
      msg.delete()  
    }
  });
 
  client.on('message', msg => {  
    if (msg.content === 'جموسا') {  
      msg.delete()  
    }
  });
 
  client.on('message', msg => {  
    if (msg.content === 'ورع') {  
      msg.delete()  
    }
  });
 
   client.on('message', msg => {  
    if (msg.content === 'كس امك') {  
      msg.delete() 
    }
  });
 
     client.on('message', msg => {  
    if (msg.content === 'كل زق') {  
      msg.delete() 
    }
  });
 
       client.on('message', msg => {  
    if (msg.content === 'كس') {  
      msg.delete() 
    }
  });
 
client.on('message', msg => {  
    if (msg.content === 'قحبة') {  
      msg.delete()  
    }
  });
 
  client.on('message', msg => {  
    if (msg.content === 'انيك امك ليل ونهار') {  
      msg.delete()  
    }
  });
 
    client.on('message', msg => {  
    if (msg.content === 'شرموط') {  
      msg.delete()  
    }
  });
 
    client.on('message', msg => {  
    if (msg.content === 'بنيج اهلك') {  
      msg.delete()  
    }
  });
 
      client.on('message', msg => {  
    if (msg.content === 'انيك اهلك ليل ونهار') {  
      msg.delete()  
    }
  });
 
        client.on('message', msg => {  
    if (msg.content === 'انيك اهلك') {  
      msg.delete()  
    }
  });
 
          client.on('message', msg => {  
    if (msg.content === 'fuck') {  
      msg.delete()  
    }
  });
 
            client.on('message', msg => {  
    if (msg.content === 'FUCK') {  
      msg.delete()  
    }
  });
 
            client.on('message', msg => {  
    if (msg.content === 'طيزك حلوه يا عرص كس امك') {  
      msg.delete()  
    }
  });
 
            client.on('message', msg => {  
    if (msg.content === 'كس') {  
      msg.delete()  
    }
  });
 
              client.on('message', msg => {  
    if (msg.content === 'شرموطة') {  
      msg.delete()  
    }
  });
 
                client.on('message', msg => {  
    if (msg.content === 'شرموطه') {  
      msg.delete()  
    }
  });
 
                  client.on('message', msg => {  
    if (msg.content === 'شرموطه') {  
      msg.delete()  
    }
  });
 
                    client.on('message', msg => {  
    if (msg.content === 'يا كلب') {  
      msg.delete()  
    }
  });
 
                client.on('message', msg => {  
    if (msg.content === 'بزاز') {  
      msg.delete()  
    }
  });
 
                client.on('message', msg => {  
    if (msg.content === 'نيك') {  
      msg.delete()  
    }
  });
 
                client.on('message', msg => {  
    if (msg.content === 'طيز') {  
      msg.delete()  
    }
  });
 
                client.on('message', msg => {  
    if (msg.content === 'زب') {  
      msg.delete()  
    }
  });
 
                client.on('message', msg => {  
    if (msg.content === 'زق') {  
      msg.delete()  
    }
  });
 
                client.on('message', msg => {  
    if (msg.content === 'fuck') {  
      msg.delete()  
    }
  });
 
client.on('message', msg => {  
    if (msg.content === 'shit') {  
      msg.delete()  
    }
  });
 
                client.on('message', msg => {  
    if (msg.content === 'tits') {  
      msg.delete()  
    }
  });
 
                client.on('message', msg => {  
    if (msg.content === 'anal') {  
      msg.delete()  
    }
  });
 
              client.on('message', msg => {  
    if (msg.content === 'عرص') {  
      msg.delete()  
    }
  });
 
                client.on('message', msg => {  
    if (msg.content === 'ابن طيز') {  
      msg.delete()  
    }
  });
 
                  client.on('message', msg => {  
    if (msg.content === 'ابن وسخه') {  
      msg.delete()  
    }
  });
 
                  client.on('message', msg => {  
    if (msg.content === 'ابن عرص') {  
      msg.delete()  
    }
  });
 
                    client.on('message', msg => {  
    if (msg.content === 'ابن خول') {  
      msg.delete()  
    }
  });
 
                    client.on('message', msg => {  
    if (msg.content === 'خول') {  
      msg.delete()  
    }
  });
 
                      client.on('message', msg => {  
    if (msg.content === 'فاك') {  
      msg.delete()  
    }
  });
 
    client.on('message', msg => {  
    if (msg.content === 'معرص') {  
      msg.delete()  
    }
  });
 
   client.on('message', msg => {  
    if (msg.content === 'ابن كلب') {  
      msg.delete()  
    }
  });
 
   client.on('message', msg => {  
    if (msg.content === 'ابن طيز') {  
      msg.delete()  
    }
  });
 
    client.on('message', msg => {  
    if (msg.content === 'معفن') {  
      msg.delete()  
    }
  });

    client.on('message', msg => {  
    if (msg.content === 'ابن معفن') {  
      msg.delete()  
    }
  });

   client.on('message', msg => {  
    if (msg.content === 'وسخ') {  
      msg.delete()  
    }
  });

   client.on('message', msg => {  
    if (msg.content === 'ابن وسخ') {  
      msg.delete()  
    }
  });

 client.on('message', msg => {  
    if (msg.content === 'وسخه') {  
      msg.delete()  
    }
  });

 client.on('message', msg => {  
    if (msg.content === 'ابن وسخه') {  
      msg.delete()  
    }
  });
client.on('message', msg => {
if (msg.author.bot) return;
if (msg.content === "$FO") {
msg.delete(100);
msg.channel.sendFile('https://cdn.discordapp.com/attachments/757242876647440535/759921314487336980/SSSS.PNG');
}
});
client.on('message', wolf => {
  if (wolf.content === prefix + "helpA") {////هنا  الامر
let embed = new Discord.RichEmbed()
.setColor("Red")////لون الامبد
.setDescription(`**${prefix}help or $helpT ( للمساعدة )**

**${prefix}gcreate ( لئنشاء قف اوياي)**
 
**${prefix}cleartickets (لمسح جميع التكتات)**
 
**${prefix}create (لئنشاء روم  )**
 
**${prefix}close (لقفل تكت)**
 
**${prefix}mtickets enable/disable (لتعطيل وعدم تعطيل التكت)**
   
**${prefix}mute (لإعطاء ميوت)**

**${prefix}kick (لإعطاء كيك)**

**${prefix}ban (لإعطاء باند)**

**${prefix}hide (لإعطاء الشات)**

**${prefix}role (لإعطاء رتبه)**

**${prefix}clear (لمسح الشات)**

** Owner Server <@748248314327334935> & <@718177837533757620> **
`)////هنا الاوامر
wolf.channel.send({embed:embed});
}
});

client.on("message", message => {
if(message.content.startsWith(prefix + "nick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`**• | Usage:** ${prefix}setnick \`\`@Name\`\` nickname`);
message.guild.member(user.user).setNickname(`${nick}`);
message.channel.send(`Successfully changed **${user}** nickname to **${nick}**`);
}
});
client.on('message', message => {
      if(message.content === prefix + "hide") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! ✅  ')
 }
});
 
client.on('message', message => {
      if(message.content === prefix + "unhide") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done ✅ ')
 }
});
client.on("message", msg => {
  if(msg.content === '$' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
      msg.channel.send({embed: embed})
  }
});
client.on('message',function(message) {
	let prefix = "$";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`${args}`);
}
});
client.on('message', function(msg) {

  if(msg.content.startsWith (prefix + 'server')) {
    if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`${msg.guild.name}`,true)
    .addField(':id: **Server ID:**',`${msg.guild.id}`,true)
    .addField('📅** Created On**',msg.guild.createdAt.toLocaleString())
    .addField('👑** Owned By**',`${msg.guild.owner}`,true)
    .addField(':busts_in_silhouette:  **Members **' + `[ ${msg.guild.memberCount} ]`,`**${msg.guild.members.filter(m=>m.presence.status == 'online').size}**` + ' Online')
    .addField(':speech_balloon: Channels ' + `[ ${msg.guild.channels.size} ]`,`**${msg.guild.channels.filter(m => m.type === 'text').size}**` + ' Text | ' + `**${msg.guild.channels.filter(m => m.type === 'voice').size}**` + ' Voice')//tt
    .addField(':earth_africa: Others','**Region: **' + `${msg.guild.region}` + ' **Verification Level:** ' + `${msg.guild.verificationLevel}`)
    .addField(':closed_lock_with_key:** Rules **' + `[ ${msg.guild.roles.size} ]`,'To see a list with all roles use **$roles**');
    msg.channel.send({embed:embed});
  }
});
client.on('message', async message =>{
  if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} لقد اخذت ميوت كلامي 
[ ${reason} ] : السبب
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});
client.on("message", message => {
        let roleembed = new Discord.RichEmbed()
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
      var args = message.content.split(' ').slice(1);
      var msg = message.content.toLowerCase();
      if( !message.guild ) return;
      if( !msg.startsWith( prefix + 'role' ) ) return;
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
      if( msg.toLowerCase().startsWith( prefix + 'roleembed' ) ){
          if( !args[0] ) return message.channel.sendEmbed(roleembed)
          if( !args[1] ) return message.channel.sendEmbed(roleembed)
          var role = msg.split(' ').slice(2).join(" ").toLowerCase();
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطاءها الى الشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().addRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء الى **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.addRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البشريين رتبة**');
          }  
      } else {
          if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
          if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
          var role = msg.split(' ').slice(2).join(" ").toLowerCase();
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().addRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.addRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
          }
      }
  });
client.on('message', message => {
    if (message.content.startsWith(prefix + 'sug')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react(':x:')})
        var args =  message.content.split(' ').slice(1).join(' ')
        if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})
        let Room = message.guild.channels.find(`name`, "suggestions")
        if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react(':x:'))
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)
       .addField('**Suggestion**',`${args}`)
       .setThumbnail(message.author.avatarURL)
       .setFooter(`ID: ${message.author.id}`)
       Room.sendEmbed(embed).then(c => {
           c.react(':white_check_mark:').then(() =>
               c.react(':x:'))
           
       }).catch(e => console.error(e)
       )
   }
  });
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');   
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");
  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});
client.on("message", message => { 
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith("مسح")) {
                  if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "تــم مسح الشات",
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  });
client.on('message' , message => {
    ;
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});
client.on('message', message => {    
            if (message.content.startsWith(prefix + "cto")) {
                if(!message.channel.guild) return;
                if (!message.member.hasPermission("MANAGE_CHANNEL"))  return;
      var a= message.content.split(' ').slice(1).join("  ");
      if (!a) return message.reply("اكتب كلام لوضعه في التوبيك!")
      message.channel.setTopic(`${a}`)
      .then(newChannel => message.channel.send(`تم تغيير التوبيك لـ **${a}**`))
      .catch(console.error);
            }
        });
client.on("message", message => {
  const msg = message;
  var s1 = msg.content.split(" ")[1];
  var s2 = message.content.split(" ").slice(2).join(" ");
if (message.content.startsWith(prefix + "create")){
if(!s1 || !s2) return message.channel.send("❌ I can't found room name/status")
else if(s1 !== "text" && s1 !== "voice") return message.channel.send("❌ only voice + text") 
      if(!message.guild.me.hasPermissions("MANAGE_CHANNELS")) return msg.reply("**I don't have MANAGE_CHANNELS Permission**");
      if(!msg.member.hasPermissions("MANAGE_CHANNELS")) return msg.reply("**You don't have MANAGE_CHANNELS Permission**");
else message.guild.createChannel(s2,s1).then(channel =>{
var room = `<#${channel.id}>`
if(s1 === "voice") room = ``
msg.reply(`Done ${room}`);
})}}
)
client.on("message", message => { 
    let args = message.content.split(" ");
    if (message.author.bot) return;
    if (
      args[0].toLowerCase() == `${prefix}clear` ||
      args[0].toLowerCase() === `${prefix}Clear`
    ) {
      if (!message.channel.guild)
        return message.reply("⛔ | This Command For Servers Only!"); 
      if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send(
          "⛔ | You dont have **MANAGE_MESSAGES** Permission!"
        );
      if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
        return message.channel.send(
          "⛔ | I dont have **MANAGE_MESSAGES** Permission!"
        );
      let args = message.content.split(" ").slice(1); 
      let messagecount = parseInt(args);
      if (args > 99)
        return message
          .reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**")
          .then(messages => messages.delete(5000));
      if (!messagecount) args = "100";
      message.channel
        .fetchMessages({ limit: messagecount + 1 })
        .then(messages => message.channel.bulkDelete(messages)); 
      message.channel
        .send(`\`${args}\`  __Message Cleared__ `)
        .then(messages => messages.delete(5000));
    }
  }); 
client.on("message", message => {
  if(message.content.startsWith(prefix + "ibot")) {
    var mbot = message.mentions.members.first()
    message.channel.send(`https://discordapp.com/api/oauth2/authorize?client_id=${mbot.id}&permissions=0&scope=bot`)
  }
});
client.on('message', PuP => {
  let args = PuP.content.split(" ").slice(1).join(" ")
  if (PuP.content.startsWith(`${prefix}sr`)) {
                if (!PuP.member.hasPermission("MANAGE_SERVER"))  return;
                if(!args) return PuP.channel.send(' ``` يرجي ادخال اسم السيرفر الجديد 🙄```');
                PuP.guild.owner.send(`**تم تغيير اسم السيرفر الى 📝 ${args}
                بواسطة : <@${PuP.author.id}>**`)
                PuP.guild.setName(args)
                PuP.channel.send(`**تم تغير اسم السيرفر الى 📝 : __${args}__ **`);
                
       }
 
       });
client.on('message' , message => {
    var prefix = '$';
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'id2') {
     const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    let user = message.mentions.users.first() || message.author;
    message.delete();
   
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }

    let game;
    if (user.presence.game === null) {
        game = 'None.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'None.';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = 'Online';
    } else if (user.presence.status === 'dnd') {
        status = 'DND';
    } else if (user.presence.status === 'idle') {
        status = 'Idle';
    } else if (user.presence.status === 'offline') {
        status = 'Offline';
    }
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    moment.locale('En-ly');
                    message.guild.fetchInvites().then(invs => {
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let Invites = invs.filter(i => i.inviter.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    const embed = new Discord.RichEmbed()
  .addField('Discord Info : ', `Name : ${user.username}\n Discriminator: #${user.discriminator}\nID : ${user.id} \nJoinedDiscord : ${moment(heg.createdTimestamp).fromNow()}\nBot :  ${user.bot}\nPlaying : ${game}\nStatus : ${status}`,true)
  .addField('Server Info :', `LastMessage : ${messag}\nJoined :  ${moment(h.joinedAt).fromNow()} \n Invites :  ${inviteCount} Invite(s) \nRoles : `+message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .setAuthor(`${user.username}`, user.displayAvatarURL)
  .setColor('#200272ff')
    .setThumbnail(user.displayAvatarURL)
    message.channel.send({embed})
  .catch(e => logger.error(e));
 })
}
 });
 client.on('message', message => {
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
 }
   });
client.on('message', message => {

  if(message.content === `${prefix}lock`) {
                      if(!message.channel.guild) return message.reply('** This command only for servers ❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("** ✅ | تـم قفـل الشـات  **")
         });
           }

if(message.content === `${prefix}unlock`) {
                   if(!message.channel.guild) return message.reply('** This command only for servers ❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('** You dont have `MANAGE_CHANNELS` permission **');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("**✅ | تـم فتـح الشـات **")
         });
           }
           
    
  
});
client.on('message', message => {
  if (message.content.startsWith( prefix + "bot")) {
  message.channel.send({
  embed: new Discord.RichEmbed()
     .setAuthor(client.user.username,client.user.avatarURL)
     .setThumbnail(client.user.avatarURL)
     .setColor('RANDOM')
     .setTitle('``Info The Bot`` ')
     .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
     .addField('``servers``', [client.guilds.size], true)
     .addField('``channels``' , `[ ${client.channels.size} ]` , true)
     .addField('``Users``' ,`[ ${client.users.size} ]` , true)
     .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
     .addField('``My ID``' , `[ ${client.user.id} ]` , true)
           .addField('``My Prefix``' , `[ $ ]` , true)
           .addField('``My Language``' , `[ JavaScript ]` , true)
           .addField('``Bot Version``' , `[ v0.1 ]` , true)
           .setFooter('By | <@Your Id>')
  })
  }
  });
client.on("message",message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
    if(message.content.startsWith(prefix + "avatar")){
  const mention = message.mentions.users.first()
  
  if(!mention) return console.log("") 
  let embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
  .setTitle("Avatar Link")
  .setURL(`${mention.avatarURL}`)
  .setImage(`${mention.avatarURL}`)
  .setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
      message.channel.send(embed)
  }
  })
  client.on("message", message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(message.content.startsWith(prefix + "savatar")) {
      let doma = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setTitle("Avatar Link")
      .setURL(message.guild.iconURL)
      .setImage(message.guild.iconURL)
      .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
      message.channel.send(doma)
    } else if(message.content.startsWith(prefix + "avatar")) {
      let args = message.content.split(" ")[1]
  var avt = args || message.author.id;    
      client.fetchUser(avt).then(user => {
       avt = user;
    let embed = new Discord.RichEmbed() 
    .setColor("BLACK")
    .setAuthor(`${avt.tag}`, avt.avatarURL)
    .setTitle("Avatar Link")
    .setURL(avt.avatarURL)
    .setImage(avt.avatarURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(embed) 
      })
    }
  });