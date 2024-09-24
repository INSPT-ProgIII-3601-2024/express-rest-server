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

module.exports = {
    getTodos,
    getById
    // Faltan las demás...
}