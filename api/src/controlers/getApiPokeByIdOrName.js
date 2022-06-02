const axios = require('axios');

const getApiPokeByidOrName = async (idName) => {
    try {

        function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
            }

        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idName}`);
        return {
            id: pokemon.data.id,
            name: capitalizeFirstLetter(pokemon.data.name),
            hp: pokemon.data.stats[0].base_stat,
            attack: pokemon.data.stats[1].base_stat,
            defense: pokemon.data.stats[2].base_stat,
            speed: pokemon.data.stats[5].base_stat,
            height: pokemon.data.height * 10, // a cms
            weight: pokemon.data.weight / 10, // a kgs
            img: pokemon.data.sprites.other.home.front_default,
            types: pokemon.data.types.map(pokeTypes => pokeTypes.type.name)
        }

        
    } catch (error) {
        console.log(error);
    }
}




module.exports = getApiPokeByidOrName;