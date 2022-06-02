const { Pokemon, Type } = require('../db')

const getDbInfo = async () => {
    try {
        function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }


        const dbPokes = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['name'],
                through: { attributes: [] }
            }
        })
        const pokeJson = dbPokes.map(poke => poke.toJSON())
        const pokesFull = pokeJson.map(poke => {
            const type = poke.types.map(type => [type.name]);
            const name = capitalizeFirstLetter(poke.name)
            return { ...poke, types: type.flat(), name:name }
        })
        return pokesFull;
        //return dbPokes;
    } catch (error) {
        console.log(error);

    }
}

module.exports = getDbInfo;