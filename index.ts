import { Client, Collection } from 'discord.js';
import { readdirSync, readdir } from 'fs';
import { token } from './config.json';

const client: Client & { commands: any } = <any> new Client();
client.commands = new Collection();

const commandFiles = readdirSync('./commands').filter((file) => file.endsWith('.js'));
commandFiles.forEach((file) => {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const command = require(`./commands/${file}`);
  console.log(`Command: ${command.name} set!`);
  client.commands.set(command.name, command);
});

readdir('./events/', (err, files) => {
  if (err) { return console.error; }
  files.forEach((file) => {
    if (!file.endsWith('.js')) return;
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const evt = require(`./events/${file}`);
    const evtName = file.split('.')[0];
    client.on(evtName, evt.bind(null, client));
  });
});

client.login(token);
