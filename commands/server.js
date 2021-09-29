const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Retorna informações do servidor'),
  async execute(interaction) {
    return interaction.reply(
      `Nome do servidor: ${interaction.guild.name}\nTotal de membros: ${interaction.guild.memberCount}`
    )
  }
}
