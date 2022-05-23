const axios = require('axios');
const { Type } = require('../src/db')

/* *************************** */
//Esta funcion se llama cuando se levanta el servidor y carga los types en la DB

module.exports = chargingTypesInDb = async () => {
    try {
        const typesApi = await axios.get('https://pokeapi.co/api/v2/type')
        const typesArray = await typesApi.data.results;
        typesArray.forEach(element => {
            Type.findOrCreate({
                where: { name: element.name }
            })
        });

    } catch (error) {
        console.log(error, 'Error en la carga de los Types');
    }
}