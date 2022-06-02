const axios = require('axios');
const getApiPokeByIdOrName = require('../controlers/getApiPokeByIdOrName')
const { Pokemon, Type } = require('../db')

const getPokeByName = async (name) => {


    try {
        const nameLowerCase = name.toLowerCase()

        function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }



        const pokemon = await Pokemon.findOne({
            where: { name: nameLowerCase },
            include: {
                model: Type,
                attributes: ['name'],
                through: { attributes: [] }
            }
        });


        if (pokemon) {
            const pokeJson = pokemon.toJSON()
            let name =  capitalizeFirstLetter(pokeJson.name)

            const type = pokeJson.types.map(type => [type.name]);

            return [{ ...pokeJson, types: type.flat(), name:name }]


        }

        const pokemonApi = await getApiPokeByIdOrName(nameLowerCase);
        if (pokemonApi) {

            return [pokemonApi]

        } else { return [] }


    } catch (error) {
        console.log(error);
    }
}

module.exports = getPokeByName;