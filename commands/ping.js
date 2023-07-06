const { REST, Routes } =require('discord.js');

const commands = [
{
  name:'ping',
  description: 'replies with Pong!',
},
];

const rest = new REST({ version: "10" }).setToken(
  
);

(async()=> {
try{
  console.log('Started refreshing application(/)');
  await rest.put(Routes.applicationCommands("Client_ID"), {
    body: commands,
  });
} catch(error){
  console.error(error);
}

}) ();