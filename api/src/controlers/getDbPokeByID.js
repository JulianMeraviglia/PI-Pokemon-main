const { Pokemon, Type } = require('../db')

const getDbPokeById = async (id) => {
    try {
        const dbPokeById = await Pokemon.findByPk(id, {
            include: {
                model: Type,
                attributes: ['name'],
                through: { attributes: [] }
            }
        })

        const pokeJson = dbPokeById.toJSON()

        const type = pokeJson.types.map(type => [type.name]);

        return { ...pokeJson, types: type.flat() }

        //return pokeByIdFull;

        //return dbPokeById;
    } catch (error) {
        console.log(error);

    }
}




module.exports = getDbPokeById;