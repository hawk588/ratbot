const Discord = require('discord.js');

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.author == client.user)
    {
        return
    }    

    if (message.author.bot)
    {
        return
    }
    
    if (needsCorrecting(message.content)) {

       message.reply("I think you meant to say \"" + Corrector(message.content) + "\"");

       }

    

});

function needsCorrecting(message)
{
    message = message.toLowerCase();
    let count = 0;
    let word = "";
    for(let i = 0; i < message.length; i++)
    {
        if(message.charAt(i) == ' ' && count == 3)
        {
            if(word != "rat")
            {
                return true;
            }
            else
            {
                word = "";
            }    
        }
        else if(message.charAt(i) == ' ')
        {
            count = 0;
            word = "";
        }
        else
        {
            count += 1;
            word += message.charAt(i);
        }
    } 
    if (count == 3 && word != "rat")
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
    let ratted = false;
    let notRatted = false;
    let needsCorrecting = true;
    for(let i = 0; i < message.length; i++)
    {
        if(message.charAt(i) == ' ' && count == 3)
        {
            count = 0;
            finalMessage += "rat ";
            if(word == "rat")
            {
                ratted = true;
            }
            if(word != "rat")
            {
                notRatted = true;
            }
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
    if(word == "rat")
    {
        ratted = true;
    }
    if(word != "rat")
    {
        notRatted = true;
    }
    if(ratted && !notRatted)
    {
        finalMessage = "Yes yes! Keep saying rat rat!"
    }
    else if(count == 3)
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

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
