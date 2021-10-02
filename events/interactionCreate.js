module.exports = {
  name: 'interactionCreate',
  execute(interaction, args) {
    if (!interaction.isCommand()) return

    console.log(
      `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`
    )
  }
}
