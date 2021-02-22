import { Client } from 'discord.js';

export default async (client: Client) => {
  console.log(`Ready as ${client.user.tag}`);
};
