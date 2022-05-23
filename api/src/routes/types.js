const { Router } = require('express');
const { Type } = require('../db.js')


const router = Router();

router.get('/', async (req, res, next) => {
    try {
        let allTypes = await Type.findAll({
            attributes: ['name'],
            order: [
                ['name', 'ASC']
            ]
        })

        allTypes = allTypes.map(t => t.name)

        res.send(allTypes)
    } catch (error) {
        next(error)
    }
})




module.exports = router;
