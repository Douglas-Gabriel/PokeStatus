const { Client, Intents } = require('discord.js')
const { token } = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

const prefix = '='

client.on('message', function (message) {
  if (message.author.bot) return
  if (!message.content.startsWith(prefix)) return

  const commandBody = message.content.slice(prefix.length)
  const args = commandBody.split(' ')
  const command = args.shift().toLowerCase()

  if (command === 'ping') {
    const timeTaken = Date.now() - message.createdTimestamp
    message.reply('Pong!')
    message.reply(timeTaken)
    console.log('teste')
  }
})

client.login(token)
