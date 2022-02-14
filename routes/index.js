const express = require('express');
const petShopController = require('../controller/petShop.controller');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'Hi, welcome !'});
});

router.get('/petShop/', petShopController.listPetShop);
router.post('/petShop/', petShopController.insertPetShop);
router.put('/petShop/:id', petShopController.updatePetShop);
router.delete('/petShop/:id', petShopController.deletePetShop);

module.exports = router;    
