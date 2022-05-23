const { Pokemon, Type } = require('../db')

const getDbInfo = async () => {
    try {
        const dbPokes = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['name'],
                through: { attributes: [] }
            }
        })
        const pokeJson = dbPokes.map(poke => poke.toJSON())
        const pokesFull = pokeJson.map(poke =>{
            const type = poke.types.map(type => [type.name]);
            return {...poke, types: type.flat()}
        })
        return pokesFull;
        //return dbPokes;
    } catch (error) {
        console.log(error);

    }
}

module.exports = getDbInfo;