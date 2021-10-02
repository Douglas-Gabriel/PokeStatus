const { SlashCommandBuilder } = require('@discordjs/builders')
const axios = require('axios')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pokemon')
    .setDescription('Retorna pikimin')
    .addStringOption(option =>
      option
        .setName('pikomon')
        .setDescription('PORRRRRRRRRRRRRRRRRRA')
        .setRequired(true)
    ),
  async execute(interaction) {
    const pika = interaction.options.get('pikomon')

    const res = await axios.get(
      `http://pokeapi.co/api/v2/pokemon/${pika.value}`
    )

    console.log(res.data)

    //!(Todo) Passar a resposta da api para o comando do discord
    let pokemon = {
      nome: res.data.name
    }
    return interaction.reply(JSON.stringify(pokemon))
  }
}
