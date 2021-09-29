const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Retorna informações do usuario'),
  async execute(interaction) {
    return interaction.reply(
      `Nome: ${interaction.user.username} \nId: ${interaction.user.id}`
    )
  }
}
