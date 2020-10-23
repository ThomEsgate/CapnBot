const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(client);


});

//client.on('raw', console.log);

client.on('messageReactionAdd', (reaction, user) => {
    console.log('a reaction has been added');
    console.log(user.username + " added " + reaction.emoji.name)
});

client.on('messageReactionRemove', (reaction, user) => {
    console.log('a reaction has been removed');
    console.log(user + " left " + reaction)
});


client.on('typingStart', msg => {
    //msg.channel.send('V this');

})

client.on('message', msg => {

    var randNum = Math.floor( Math.random() ) * 1;
    //msg.channel.send(randNum);

    if ( randNum == 0) {
        //msg.channel.send('I see' + ' ' + 'said the blind man ' + randNum);
        randNum == -1; //change it cos for some reason he says this 4 times
    }


    /**
     * Commands beginning with ~
     */

    if ( ((msg.content).toLowerCase()).substring(0, 1) === '~') {
        switch ((msg.content).toLowerCase()) {
            case '~play':
                const yashil = client.emojis.cache.get("720020530094276709");
                //const yashil = client.emojis.cache.find(emoji => emoji.name === "clappt");
                msg.channel.send('🐻💖🦊 Gregg rulez ok');
                msg.react('🇬');
                msg.react('🏎');
                msg.react('🍉');
                msg.react('⛏');
                msg.react('📦');
                msg.react("720020530094276709");//yashil emoji :clappt:
                msg.channel.messages.fetch("701574160211771462")
                    .then(message => console.log(message.content))
                    .catch(console.error);
                break;

            case '~handy':
                msg.channel.send(' ```CTRL + SHIFT + T = reopen closed tab\nWIN + SHIFT + S  = snip snip snipping tool\nCTRL + ALT + 4   = €\nCtrl-Shift-I,then Ctrl-Shift-C  = getting emoji IDs\nnodemon --inspect index.js``` ');
                break;

            case '~petardo':
            case '~p':
            case '~retardo':
            case '~r':
                msg.channel.send('https://tenor.com/view/petardo-gif-9055130');
                break;


            case '~todo':
                msg.channel.send('```stuff 2 do\nKyle stewart\nmake a data type called pp that has attributes for length, girth, colour\n  make videogame :)))\n   make it so the reaction to game emoji does something lol\n  have sex\n  go to uni\n Set a time limit to ~play\n     and then the one with the most emojjis is picked like ~play 30 minutes or something????\nremote todo list e.g. ~todo add "x" ```');
                break;

            case '~jizz':
                msg.channel.send('https://cdn.discordapp.com/attachments/502934190992654348/767836832976207962/maxresdefault.jpg');
                break;

            case '~swagrid':
                msg.channel.send('https://cdn.discordapp.com/attachments/502934190992654348/767837151382732820/swagrid.jpg');
                break;

            case '~2am':
                msg.channel.send('https://cdn.discordapp.com/attachments/502934190992654348/767837453918404698/20200630_220520.jpg');
                break;

            default:
                msg.channel.send('wrong command stoopid');
                break;

        }
    }

    /**
     * Other stuff
     */

    else {
        //___og
        if (((msg.content).toLowerCase()).substring((msg.content).length - 2, (msg.content).length) === 'og') {
            msg.reply(((msg.content).toLowerCase()) + '!!');

        }
        else {
            if ( ( (msg.content).toLowerCase() ).includes('og ') ){
                msg.reply('Lewis is proud of Yashil!!');
            }
        }

        //includes stuff
        const inclArray = [ ['gamer', 'gaming', 'bot-commands', 'bot commands'],
                            ['bot', 'robot'],
                            ['laugh'],
                            ['wage', 'regulation'],
                            ['cap\'n', 'capn', 'captain','🧢\'n', '🧢n', 'angus'],
                            ['gregg'],
                            ['cum', 'sex', 'penis', 'willy', 'dick', 'cock', 'porn', 'horny', 'yiff', 'hentai' , 'ben wilsons dad', 'butt', 'sperms'],
                            ['vore'] ];

        let i;
        let gotWord = "";
        for (i = 0; i < inclArray.length; i++) {
            let found = false;
            for (let j = 0; j < inclArray[i].length; j++) {

                var messageArray = ( (msg.content).toLowerCase() ).split(" ");
                for (let k = 0; k < messageArray.length; k++) {

                    if (inclArray[i].includes((messageArray[k]))) { //here
                        found = true;
                        console.log('Got somethin ' + i + ' ' + j);
                        gotWord = messageArray[k];


                        k = messageArray.length; //leaves for loop
                        break;
                    }
                }
            }
            if (found) {
                console.log('Someone got ' + (gotWord) + ' in ' + (msg.content) );
                break;
            }
        }

        switch (i) {
            case 0:
                msg.react('🇳');
                msg.react('🇴');
                break;

            case 1:
                msg.channel.send('Whaaaat no');
                break;

            case 2:
                msg.react('🍎');
                break;

            case 3:
                msg.channel.send('shut');
                break;

            case 4:
                msg.react('👀');
                break;

            case 5:
                msg.channel.send('🐻💖🦊');
                break;

            case 6:
                msg.react('🇭');
                msg.react('🇴');
                msg.react('🇷');
                msg.react('🇳');
                msg.react('🇾');
                break;

            case 7:
                //msg.channel.send('fuck you');
                msg.react('😋')
                break;

            case 8:
                //msg.channel.send('🐻💖🦊');
                break;

            default:
                //msg.channel.send('fuck');
                break;
        }
    }
 });

//do not show this to anyone !!!!
client.login('NzY3MzU0OTk2NTcxNTA0Njcy.X4wtBw.rbgdx6aa-81Qi-f7NJXU9g0QGjM');