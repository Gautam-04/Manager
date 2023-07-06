const { Client, Events, GatewayIntentBits } = require("discord.js");

// Create a new client instance
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate" , (message)=>{
  if(message.author.bot) return;
  message.reply({
    content: 'Hi from bot'
  })
}),

//getting reply
client.on("interactionCreate" , (interaction)=>{
  interaction.reply({
    content:'Pong!',
  })
})


// Log in to Discord with your client's token
client.login(process.env.TOKEN);
