const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ ann:[]})
    .write()
var bot = new Discord.Client();
var prefix = ("_");
var activ = ("créer un monde sans limite");
var values = ("empty");
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: activ}});
    var annonce = db.get(`ann`).map('annonce').value();
    console.log("Le bot est prêt");
    
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()){

        case "say":
        var value = message.content.substr(4);
        bot.channels.get('452800422655033365').send(value);
        break;
        //message.reply("```Bonjour je me présente je suis un bot```");
        console.log('salope');
        case "parler":
        var author = message.member.displayName;
        var value = message.content.substr(7);
        bot.channels.get('454265924036460555').send(author + " vous dit depuis l'autre serveur : " + value);
        break;
        case "relrap":
        var author = message.member.displayName;
        var value = message.content.substr(7);
        bot.channels.get('441664261454823446').send(author + " vous dit depuis l'autre serveur : " + value);
        break;
        case "author":
        var author = "oui";
        var author = message.member.displayName;
        console.log(author);
        message.channel.send(author);
        break;
    }

    if (message.content === "truc"){
        
    }
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Ceci est une commandes :\n -/help pour les commandes");
        console.log("Comme help prises");
    }
    if (message.content === prefix + "frite"){
        var activ = ("Je mange une frite");
        bot.user.setPresence({ game: { name: activ}});
        console.log("tu fais quoi là");
        console.log(activ);
    }
        if (message.content === prefix + "patate"){
            var activ = ("Je mange une SCANDALE");
            bot.user.setPresence({ game: { name: activ}});
            console.log("tu fais quoi là");
            console.log(activ);
    }

});
