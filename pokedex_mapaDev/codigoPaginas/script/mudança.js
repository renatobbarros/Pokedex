const listaPokemon = document.querySelectorAll(".pokemon")
const pokemoncard = document.querySelectorAll(".cartao-pokemon")

listaPokemon.forEach(pokemon =>{
    pokemon.addEventListener('click' , () =>{
        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const guardarPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        guardarPokemonParaAbrir.classList.add('aberto')


        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
        const pokemonNalistagem = document.getElementById(idPokemonSelecionado)
        pokemonNalistagem.classList.add('ativo')

    })
})