
const express = require('express')

const router = express.Router()

const {getTodos, getById, deleteById, updateById, add} = require("../controllers/ingredientes");

const {validarJwt, validarRol} = require("../middlewares/validations");

router.get('/', getTodos);
router.get('/all', getTodos);
router.get('/:id', [validarJwt], getById);
router.delete('/:id', [validarJwt, validarRol], deleteById);
router.put('/:id', updateById);
router.post('/', add);

module.exports = router;