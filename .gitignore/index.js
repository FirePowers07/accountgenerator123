const Discord = require('discord.js')
const client = new Discord.Client()


client.login('Njc5OTc4MTA3MzM1NDc1Mjgz.Xk5Nhg.o-mO3aC9DpX0Z0YDOEBzCLic-Po')

client.on('ready', function () {
    client.user.setGame('Ajout de compte')
})

var randnum = 0


client.on('message', function (message) {
    if (message.content === "/g-minecraft") {
        random();

        if (randnum == 0){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('vapekyle@Gmail.com:shea1985 ( Compte Minecraft )')   
            });
        }
        
        if (randnum == 1){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('nootslol@gmail.com:whatever1  ( Compte Minecraft )')  
            });
        }

        if (randnum == 2){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('rl120825@gmail.com:458458as  ( Compte Minecraft )')  
            });
        }

        if (randnum == 3){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('charlotte.soane@hotmail.com:pizza888  ( Compte Minecraft )')  
            });
        }
        if (randnum == 4){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('charliejamessamuel@hotmail.co.uk:jerry201  ( Compte Minecraft )')  
            });
        }  
        if (randnum == 5){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('chaotic.crackers@gmail.com:Crackers8028  ( Compte Minecraft )')  
            });
        }  
        if (randnum == 6){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('cdag@live.com:Sharper99  ( Compte Minecraft )')  
            });
        }  
        if (randnum == 7){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('catsanddogs99@live.com:monkey99  ( Compte Minecraft )')  
            });
        }  
        if (randnum == 8){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('ralle3d@gmail.com:schlein123  ( Compte Minecraft )')  
            });
        }  
        if (randnum == 9){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('cdietrich0106@hotmail.com:Coolguy533  ( Compte Minecraft )')  
            });
        }  
        if (randnum === 10){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('cdplayerz@hotmail.com:0524235807a ( Compte Minecraft')
            });
        }
        if (random === 11){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('chalizardmisadon@yahoo.com:khoi12 ( Compte Minecraft')
            });
        }
        if (random === 12){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('cbrossy@yahoo.com:charles510 ( Compte Minecraft )')
            });
        }
        if (random === 13){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('chaoticsuperboy@gmail.com:JamDem4264 ( Compte Minecraft )')
            });
        }
        if (random === 14){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('chaoticjtr@gmail.com:Galaxy15 ( Compte Minecraft )')
            });
        }
    
    }
});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(10);
    randnum = Math.floor(Math.random() * (max - min +1) + min)
}

client.on('message', function (message) {
    if (message.content === "/g-spotify") {
        random();

        if (randnum == 0){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('zeynepdag__@hotmail.com:232500akss  ( Compte Spotify )')   
            });
        }
        
        if (randnum == 1){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('thegreateststorm@gmail.com:yougetnolove  ( Compte Spotify )')  
            });
        }

        if (randnum == 2){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('naomi1892@hotmail.com:imoansgg  ( Compte Spotify )')  
            });
        }

        if (randnum == 3){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('chadparker322@live.com:maya13006   ( Compte Spotify )')  
            });
        }
        if (randnum == 4){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('trinigarciac@gmail.com:chik1116  ( Compte Spotify )')  
            });
        }  
        if (randnum == 5){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('wayne.sheppard@gmail.com:wmlr6769  ( Compte Spotify )')  
            });
        }  
        if (randnum == 6){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('robert_good@hotmail.com:beatriz2  ( Compte Spotify )')  
            });
        }  
        if (randnum == 7){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('gnbbflorindo@hotmail.com:inavoig  ( Compte Spotify )')  
            });
        }  
        if (randnum == 8){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('direngrey89@msn.com:dyingliv3  ( Compte Spotify )')  
            });
        }  
        if (randnum == 9){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('kaaaathj@gmail.com:52845336  ( Compte Spotify )')  
            });
        }  
        if (randnum == 10){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('vikash_mirchi@hotmail.com:Rotterdam09 ( Compte Spotify )')  
            });
        }  
        if (randnum == 11){
            message.channel.send('**Compte envoyer par mp !**');
            message.author.createDM().then(channel => {
                channel.send('afernandezorosa@gmail.com:Elena244 ( Compte Spotify )')  
            });
        }  
    }
});
