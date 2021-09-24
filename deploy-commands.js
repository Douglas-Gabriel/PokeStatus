const { SlashCommandBuilder } = require('@discordjs/builders')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { clientId, guildId, token } = require('./config.json')

const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Retorna pong'),
  new SlashCommandBuilder()
    .setName('server')
    .setDescription('Retorna informações do servidor'),
  new SlashCommandBuilder()
    .setName('user')
    .setDescription('Retorna informações do usuario')
].map(command => command.toJSON())

const rest = new REST({ version: '9' }).setToken(token)

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log('Comandos da aplicação registrados com sucesso'))
  .catch(console.error)
