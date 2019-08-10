const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel => channel.name === "welcome-mat")
    if(!channel) return;
    channel.send(`Hey there, killer. ${member}, right? Rumor has it that you were thinkin' of joining the ranks of the Crimson Raiders. If that's true, go ahead and read our rules page before stopping by introductions to tell us a little bit about yourself. Nothin' to worry about though, it's just a precaution to keep out any bandits, corporate goons, cultists-- I'm sure you get the picture. After that, doors'll open to Sanctuary.`)
});

bot.on('message', (message) => {
    if(message.content == 'i hate handsome jack') {
        message.reply('Heh, you and me both, killer.');
    }


});
bot.on('message', (message) => {

    if(message.content == 'hey lilith') {
        message.reply('Sup, killer.');
    }


});
bot.on('message', (message) => {

    if(message.content == 'fuck hyperion') {
        message.channel('Seriously. Fuck Hyperion.');
    }


});
bot.on('message', (message) => {

    if(message.content == 'roland deserved better') {
        message.reply('Yeah, he really did...');
    }

});

bot.login('NjA4ODE4NzExNTgyNzM2NDM0.XUunLg.XjHZv7NEGueoJf6_wbAygbU4ouM');