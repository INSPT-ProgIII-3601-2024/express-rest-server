const ingredientesModel = require("../models/ingredientesFake");

const getTodos = (req, res) => {    
    res.json( ingredientesModel.getTodos() );
}

const getById = (req, res) => {
    let {id} = req.params;
    const idEntero = parseInt(id);

    const ingrediente = ingredientesModel.getById(idEntero);

    //res.send(`El id es ${id}`)
    if (ingrediente) {
        res.json(ingrediente);
    } else {
        res.status(404).json({
            id,
            encontrado: false
        });
    }
}

const deleteById = (req, res) => {
    res.status(200).json({
        msg: "Borrado (?"
    })
}
const updateById = (req, res) => {
    // TODO...
}
const add = (req, res) => {
    // TODO...
}

module.exports = {
    getTodos,
    getById,
    deleteById,
    updateById,
    add
}