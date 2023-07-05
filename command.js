const {REST,Routes} = require('discord.js');

const commands = [
    {
        name: 'ping',
        description: 'Reply with pong!',
    },
];

const rest = new REST({ version: "10" }).setToken(process.env.BOTTOKEN);

(async () => {
    try{
        console.log("Started refreshing application(/)commands.");

        await rest.put(Routes.applicationCommands(process.env.CLIENTID) , {body: commands});

        console.log("Successfully reloaded application(/) commands")
    } catch(error){
        console.log(error);
    }
}) ();