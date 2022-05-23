const { Router } = require('express');
const { Pokemon, Type } = require('../db');
const getAllInfo = require('../controlers/getAllInfo')



const router = Router();

router.get('/', async (req, res, next) => {
    const { name } = req.query;
    const totalPokes = await getAllInfo();

    try {
        if (name) {
            const pokeName = totalPokes.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));

            pokeName.length ?
                res.status(200).send(pokeName) :
                res.status(404).send('Poke not found');
        } else {
            res.status(200).send(totalPokes)

        }
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    //console.log(req.params)
    try {
        const totalPokes = await getAllInfo();
        if (id) {
            const pokeId = await totalPokes.filter(el => el.id === parseInt(id))

            pokeId.length ?
                res.status(200).send(pokeId) :
                res.status(404).send('No existe un poke con ese id')
        }
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    const { img, name, types, hp, attack, defense, speed, weight, height, fromDb } = req.body;
    try {
        let newPoke
            = await Pokemon.create({
                img, name, types, hp, attack, defense, speed, weight, height, fromDb
            });
        let typeDb = await Type.findAll({
            where: { name: types }
        });
        newPoke.addType(typeDb)
        res.send('Poke created successfully')

    } catch (error) {
        console.log(error)
    }
})



module.exports = router;
