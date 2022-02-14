const express = require('express');
const petStoreController = require('../controller/petShop.controller');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'Hi, welcome !'});
});

router.get('/petShop/', petStoreController.listPetStore);
router.post('/petShop/', petStoreController.insertPetStore);
router.put('/petShop/:id', petStoreController.updatePetStore);
router.delete('/petShop/:id', petStoreController.deletePetStore);

module.exports = router;    
