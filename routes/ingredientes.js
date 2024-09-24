
const express = require('express')

const router = express.Router()

const {getTodos, getById} = require("../controllers/ingredientes");

router.get('/', getTodos);
router.get('/all', getTodos);
router.get('/:id', getById);
// Faltan otros endpoints

module.exports = router;