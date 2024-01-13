
const { Client, GatewayIntentBits, Collection, Partials } = require('discord.js');
const config = require('./config.json');
const {loadEvents} = require('./handlers/eventHandlers')
const {loadCommands} = require("./handlers/commandHandlers");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  partials: [Object.keys(Partials)],
});

client.commands = new Collection();

client.login(config.token).then(() => {
  loadEvents(client);
  loadCommands(client);
})


