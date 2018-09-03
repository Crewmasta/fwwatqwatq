const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});





  client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user} هاهاهاا , كشفتك وانت تكتب ي اوف لاين`)
        .then(msg => {
            msg.delete(10000)
        })
    }
})


var prefix = ".";
  client.on('message', message => {
  if(message.content.startsWith(prefix + "اقتراح")) {
   message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("475289649820991488").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })
  

 
var prefix = ".";
client.on('message', message => {
        let reason = message.content.split(" ").slice(2).join(" ")
        let muterole = message.guild.roles.find("name", "muted")
        let men = message.mentions.users.first()

        if(message.content.startsWith(prefix + "mute")) {
            if(!men) return message.channel.send("**Do you want me to mute you 🤔 ?, please @mention someone. `Ex. #mute @xRokz bad boy`**");
            if(!reason) return message.channel.send("**Do you want me to mute " + men.username + " with no reason ?, `Ex. #mute @xRokz bad boy` or just use `none` for no reason **`")
            if(!muterole) {
                message.guild.createRole({name: "muted", color:"#505f74", permissions: [1115136]})

            }
            message.guild.member(men).addRole(muterole)
                message.channel.send("**" + men.username + " has been muted! :zipper_mouth:**")
        }

        if(message.content.startsWith(prefix + "unmute")) {
            if(!men) return message.channel.send("**please @mention someone. `Ex. #unmute <@!298732816995319809> bad boy`**");

            if(!muterole) {
                message.guild.createRole({name: "muted", color:"#505f74", permissions: [1115136]})

            }
            message.guild.member(men).removeRole(muterole)
                message.channel.send("**" + men.username + " has been unmuted! 😀 **")
        }
    })

const figlet = require('figlet');
client.on('message', message => {
if (message.content.startsWith("." + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```") //  عدل على النقاط وحطهم 3 من الجهتين مثل`` كذا تزيد واحد
           })
}
});



 

 


  
 

var prefix = ".";
const sql = require("sqlite");
client.on("message", message => {
    if (message.content.startsWith(prefix + "at")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("**اكتب محتوي الانجاز**");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
    }
});

client.on('message', message => {
    var prefix = "."
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas-prebuilt')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});

client.on('message' , message => {
     if (message.content === prefix + "servers") {
if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***The bot is in ${client.guilds.size} servers \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});

client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'not activated'));
});



client.on('message', message => {
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'active')) {
        let modlog = client.channels.find('name', 'activating');
       if(!message.channel.guild) return message.channel.send('**This is for servrs only**').then(m => m.delete(5000));
       message.channel.sendMessage(`Click on the :white_check_mark: to get activated`).then(msg => {


        msg.react('✅')
       .then(() => msg.react('✅'))



       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

       let active = msg.createReactionCollector(activeFilter, { time: 15000 });


                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Members"));
                                   message.member.removeRole(message.guild.roles.find("name", "not activated"));
                                   msg.delete();
                                   message.channel.send(`**Done have fun , Dora Gamers**`).then(m => m.delete(1000));

                                   })
                                   })
                                   }
                                   });
                                   
                                   
                                   











const translate = require('google-translate-api');
const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
if (message.content.startsWith(prefix + 'translate')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {

        const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setDescription("**ترجمة الكتابة.**\استعمل: `+translate <الكمة لتبي> <االغة>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send("**ترجمة الكتابة.**\استعمل: `+translate <الكمة لتبي> <االغة>`");

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", client.user.displayAvatarURL)
                    .addField(`Input`, `\`\`\`${args}\`\`\``)
                    .setColor("#42f4c8")
                    .addField(`Output`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});






client.on('message', msg => {
	var prefix = ".";
	  if(!msg.guild) return;
		if (msg.content.startsWith(prefix +'channels')) {
		 let args = msg.content.split(" ").slice(1);
		if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
	let eyadandr3d = new Discord.RichEmbed()
	.setThumbnail(msg.author.avatarURL)
	.setDescription(`                         ان كنت تريد انشاء روم صوتي اظغط علي الايموجي🎤                                                                                                                                                                                          الان كنت تريد انشاء مستند اضغط علي الايموجي   📝
	 ✏ان كنت تريد انشاء شات كتابي اظغط علي الايموجي `)
	.setFooter('لديك دقيقه للاختيار')
	msg.channel.send(eyadandr3d).then(message => {


	 message.react('✏').then(r=>{
	 message.react('🎤').then(r=>{

	 message.react('📝').then(r=>{



	let Category = (reaction, user) => reaction.emoji.name === '📝' && user.id === msg.author.id;
	let Text = (reaction, user) => reaction.emoji.name === '✏' && user.id === msg.author.id;
	 let Voice = (reaction, user) => reaction.emoji.name === '🎤' && user.id === msg.author.id;

	let cy = message.createReactionCollector(Category, { time: 60000 });
	let tt = message.createReactionCollector(Text, { time: 60000 });
	 let ve  = message.createReactionCollector(Voice, { time: 60000 });

	ve.on("collect", r => {
	msg.guild.createChannel(args.join(' '), 'voice');
		msg.channel.send(`☑ تم انشاء روم صوتي بنجاح : \`${args}\``)
		msg.delete();
	})
tt.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'text');
    msg.channel.send(`☑ تم انشاء شات كتابي بنجاح : \`${args}\``)
	msg.delete();
})
cy.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'category');
    msg.channel.send(`☑ تم انشاء المستند بنجاح : \`${args}\``)
	msg.delete();
})
})
})
})
})
}
});

const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };

  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });




  client.on('message', message => {
         if(message.content.startsWith(prefix + "e")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }

  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });

client.on('message',  (message) => {
        if(message.content.startsWith('.slap')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    "https://cdn.weeb.sh/images/HkJ6-e91z.gif",
	"https://cdn.weeb.sh/images/rJgTQ1tvb.gif",
    "http://i.imgur.com/32TM2xW.gif",
	"http://i.imgur.com/4CZe0Jb.gif",
	"http://i.imgur.com/6ySfvg5.gif",
	"https://cdn.discordapp.com/attachments/421988810650550282/458077295035416586/slap-r1VF-lcyz.gif",
	"http://i.imgur.com/6QLFD1m.gif",
	"http://i.imgur.com/h3HNFHe.gif",
    "http://i.imgur.com/aVDQEfA.gif",
    "https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif",
    "https://media.giphy.com/media/8UHRbvmsFVyS2VXJKU/giphy.gif",
    "https://media.giphy.com/media/XriT1FPiR1RRe/giphy.gif",
    "https://cdn.weeb.sh/images/Byjqm1tDW.gif",
    "https://media.giphy.com/media/10Am8idu3qBYRy/giphy.gif",
    "https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif",
    "https://media.giphy.com/media/81kHQ5v9zbqzC/giphy.gif"
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} Slapped ${user.username} In the face !`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }
});

client.on('message', message => {
    if (message.content.startsWith(".hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);

                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```Mention someone to hack```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle(' ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓���▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('Im the russian hacker , I hacked his account haha.')
           }, 33000)
           });
         }
 })

client.on('message',  (message) => {
        if(message.content.startsWith('.hug')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let hugs = [
    "http://i.imgur.com/g8aNdqN.gif",
	"http://i.imgur.com/Z8eQKOZ.gif",
	"http://i.imgur.com/N4CPwjr.gif",
	"http://i.imgur.com/JwU3EPy.gif",
	"http://i.imgur.com/6bJxUOb.gif",
	"http://i.imgur.com/kpMgkn1.gif",
	"http://i.imgur.com/fP0FnXi.gif",
	"http://i.imgur.com/WgdUyyJ.gif",
	"http://i.imgur.com/vcQm1YL.gif",
	"http://i.imgur.com/2qlVdBY.gif",
    "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
    "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
    "https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif",
    "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif",
    "https://media.giphy.com/media/iMrHFdDEoxT5S/giphy.gif",
    "https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif"
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} Hugged ${user.username}! That's cute! `,
      image: {
        url: hugs[Math.floor(Math.random() * hugs.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }
});


client.on('message',  (message) => {
        if(message.content.startsWith('.ratewaifu')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let rates = [
    "https://blognumbers.files.wordpress.com/2010/09/1.jpg",
	"https://images-na.ssl-images-amazon.com/images/I/41HwdEjD4XL._SY355_.jpg",
	"https://blognumbers.files.wordpress.com/2010/09/3.jpg",
	"https://vignette.wikia.nocookie.net/opartshunter/images/d/d0/4.jpg/revision/latest?cb=20130603053105",
	"http://i.imgur.com/6bJxUOb.gifhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUigB147tUe_nProOV4LyZ4r0HqwWw6mNZ-gqi992d6Rbv-jyK",
	"http://i.imgur.com/kpMgkn1.gifhttps://upload.wikimedia.org/wikipedia/commons/8/8a/6_tag.png",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd4ufkn1vPp6CrFotmvbf2hvjD3HGhnbC9vZqHhFbpPe1Z5To5",
	"https://blognumbers.files.wordpress.com/2010/09/81.jpg",
	"https://s12085.pcdn.co/wp-content/uploads/2013/10/B-9-1000x1000.jpg",
	"http://i.imgur.com/2qlVdBY.gifhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYwKFooBjCqvYQ8CqSpSzbsvxsep18vtVg55awuvZkdRF80laUw"
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} I will rate your waifu AKA ${user.username}! `,
      image: {
        url: rates[Math.floor(Math.random() * rates.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }
});


client.on('message', omar => {
var prefix = ".";
if(omar.content.split(' ')[0] == prefix + 'delchannel') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});
}




if(omar.content.split(' ')[0] == prefix + 'delroles') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});
omar.reply("`**All roles got deleted successufely**`")
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "say")) {

        let args = message.content.split(" ").slice(1)
        let text = args.join(' ').replace('$userid', message.author.id).replace('server-name', message.guild.name)
        message.channel.send(text)
    }
});

client.on("message", msg => {
    var prefix = ".";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**:x: Sorry but this commands is only for servers **');
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  The name", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  ID", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  Case', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   Playing', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(':military_medal:  Roles', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField(':robot:  Is he a bot?', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});








client.on('message', message => {
    if (message.content === ".croles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner", color: "RANDOM", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "RANDOM", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "RANDOM", permissions: [] })
                     message.guild.createRole({ name: "Co-Leader", color: "RANDOM", permissions: [] })
                     message.guild.createRole({ name: "King", color: "RANDOM", permissions: [] })
                     message.guild.createRole({ name: "Queen", color: "#492348", permissions: [] })
                     message.guild.createRole({ name: "Highness", color: "RANDOM", permissions: [] })
                     message.guild.createRole({ name: "Pros", color: "RANDOM", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "RANDOM", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "RANDOM", permissions: [] })
                     message.guild.createRole({ name: "Actve", color: "RANDOM", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "RANDOM", permissions: [] })


message.channel.sendMessage('**Wait for the roles because im still making the roles is still making it **')
}
});



client.on('message', msg => {
if (msg.content.startsWith(`.report`)) {

   let args = msg.content.split(" ").slice(1);

  if (!msg.mentions.members.first()) return msg.reply(`Mention someone`)

  if (!args[1]) return msg.reply(`What's the reason?`)

  if (msg.guild.channels.find('name', 'report')) {

    msg.guild.channels.find('name', 'report').send(`
 Report to : ${msg.mentions.members.first()}
  The person who reported : ${msg.member}
  Reason : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
  `)
  }
}
})


const adminprefix = ".";
const devs = ['307898780588703744'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} My game is now **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : The bot name is changed to`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : Done look at my new good avatar :sunglasses:`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**My twitch is now :  ${argresult}**`)
}

});





 const child_process = require("child_process");
  client.on('ready' , function (){
var time = 7200000;
client.setInterval(function() {
    client.destroy();
        child_process.fork(__dirname + "/c.js");
  }, time);
});

client.on("message", message => {
    var prefix = ".";
 if (message.content.startsWith (prefix + "help")) {
 message.channel.sendMessage(`**__Commands-List!__**
 __**.help**__ لأظهار هذة الرسالة
 __**.help-en**__ لأظهار اوامر البوت باللغة الأنجليزية
 __**.help-ar**__ لأظهار اوامر البوت باللغة العربية`)
 var embed = new Discord.RichEmbed();
} 
});




  client.on("message", message => {
    var prefix = "."; 
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "|| THE PROS ||" 
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


client.on('message', message => {
    if (message.content === ".crooms") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);


     message.guild.createChannel('「 O W N E R 」', 'voice')
     message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
     message.guild.createChannel('「ADMINSTRATOR」', 'voice')
     message.guild.createChannel('𖦲₁PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('✬ʝuşτ-1✬', 'voice')
 message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
     message.guild.createChannel('😴sleep', 'voice')
          message.guild.createChannel('༆كَبّـآرَ آلَشّـخٌـصِـيّآتُ༆', 'voice')
     message.guild.createChannel('welcome', 'text')
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('bot', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('Youtube', 'text')
     message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('party', 'text')
     message.guild.createChannel('pic', 'text')


message.channel.sendMessage('**Please wait because im still making the rooms**')
}
});

client.on('message', message => {
    if (message.content === ".crooms2") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
		
     message.guild.createChannel('announcment', 'text')
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('update status', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('other language chat', 'text')
     message.guild.createChannel('one word for a good day', 'text')
     message.guild.createChannel('roleplay', 'text')


message.channel.sendMessage('**Please wait because im still making the rooms**')
}
});


client.on('message', message => {
    if (message.content === ".crooms3") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
		
     message.guild.createChannel('memes', 'text')
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('update status', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('other language chat', 'text')
     message.guild.createChannel('one word for a good day', 'text')
     message.guild.createChannel('roleplay', 'text')
	 message.guild.createChannel('Memes talking :D', 'voice')
     message.guild.createChannel('Admins only motherfocker', 'voice')
     message.guild.createChannel('Music 1', 'voice')
     message.guild.createChannel('Music 2', 'voice')
     message.guild.createChannel('Music 3', 'voice')
     message.guild.createChannel('Music 4', 'voice')
     message.guild.createChannel('AFK', 'voice')


message.channel.sendMessage('**Please wait because im still making the rooms**')
}
});

var prefix = "."
client.on('message', message => {
  if (message.author.shyboy_05) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have a Permission to kick**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have a Permission to kick**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**Mention someone**");
  if(!reason) return message.reply ("**Type the reason**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I cant kick someone is higher than my role**");

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
    var prefix = ".";
  if(message.content.startsWith(prefix + "bc")) {
    if(message.author.id === client.user.id) return;
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;

    var args = message.content.split(' ').slice(1).join(' ');
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':eight_pointed_black_star: » انت لا تملك الخصائص اللازمة , يجب توفر خاصية `التحكم بأعدادات السيرفر`');
    if(!args) return message.channel.send(':eight_pointed_black_star: » انت لم تقم بكتابة الرسالة');

    try {
      // By: iAmHeRo¹⁵ ☤#1705
      var i = message.guild.memberCount;
      args = args.replace('[sender]', message.author);
      args = args.replace('[server]', message.guild.name);
      message.channel.send(':information_source: » جاري ارسال الرسالة .. __يرجى الانتظار__');
      setTimeout(() => {
        message.channel.send(`:white_check_mark: » تم ارسال البرودكاست .. تم الارسال لـ ${i} شخص`);
      }, message.guild.members.size * 1000);
      message.guild.members.forEach(m => {
        var bcEmbeed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(':eight_pointed_black_star: » السيرفر', `[** __${message.guild.name}__ **]`,true)
        .addField(':eight_pointed_black_star: » المرسل', `[** __${message.author.username}__ **]`,true)
        .addField(':eight_pointed_black_star: » الرسالة', args.replace('[user]' , m))
        .setFooter(`${client.user.username} :: ${new Date().toLocaleString()}`, client.user.avatarURL)
        .setColor('BLACK');
        m.send(bcEmbeed).catch(e => i--);
      });
      // message.channel.send(`[** __Error Detected__ **] : ${e} , ${m}`)
    } catch(e) {
      if(e) {
        return message.channel.send(`[** __Error Detected__ **] : ${e}`);
      }
    }
  }
});



client.on('message', message => {
     var prefix = "."
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis')
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor('RANDOM')
            .setDescription(List)
            .setFooter(message.guild.name)
        message.channel.send(EmojiList)
    }
});


client.login(process.env.BOT_TOKEN); 
