const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (needsCorrecting(message.content)) {

       message.reply('pong');

       }

});

function needsCorrecting(message)
{
    let count = 0;
    for(let i = 0; i < message.length; i++)
    {
        if(message.charAt(i) == ' ' && count == 3)
        {
            return true;
        }
        else if(message.charAt(i) == ' ')
        {
            count = 0;
        }
        else
        {
            count += 1;
        }
    } 
    if (count == 3)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function Corrector(message)
{
    let count = 0;
    let word = "";
    let finalMessage = "";
    for(let i = 0; i < message.length; i++)
    {
        if(message.charAt(i) == ' ' && count == 3)
        {
            count = 0;
            finalMessage += "rat ";
            word = "";
        }
        else if(message.charAt(i) == ' ')
        {
            count = 0;
            finalMessage += word;
            finalMessage += ' ';
            word = "";
        }
        else
        {
            count += 1;
            word += message.charAt(i);
        }
    }
    if(count == 3)
    {
        finalMessage += "rat";
    }
    else
    {
        finalMessage += word;
    }
    return finalMessage
}
 

// THIS  MUST  BE  THIS  WAY

client.login(NzYxNjI5MTY4MTE0MzM1NzY1.X3dYcA.u4AZiWcp9VQpzQXNkRUEoH_kIQc);//BOT_TOKEN is the Client Secret