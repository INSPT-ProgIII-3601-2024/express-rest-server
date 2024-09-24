
const express = require('express')

const router = express.Router()

const {getTodos, getById, deleteById, updateById, add} = require("../controllers/ingredientes");

router.get('/', getTodos);
router.get('/all', getTodos);
router.get('/:id', getById);
router.delete('/:id', deleteById);
router.put('/:id', updateById);
router.post('/', add);

module.exports = router;