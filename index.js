const { Client, Intents, Interaction } = require('discord.js')
const { token } = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.once('ready', () => {
  console.log('Ready!')
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return

  const { commandName } = interaction

  if (commandName === 'ping') {
    await interaction.reply('pong!')
  } else if (commandName === 'server') {
    await interaction.reply(
      `Nome do servidor: ${interaction.guild.name}\nTotal de membros: ${interaction.guild.memberCount}`
    )
  } else if (commandName === 'user') {
    await interaction.reply(
      `Name tag: ${interaction.user.tag} \nId: ${interaction.user.id}`
    )
  }
})

client.login(token)
