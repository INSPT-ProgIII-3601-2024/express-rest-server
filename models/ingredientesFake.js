const arrayDeIngredientes = require('../data/ingredientesFake')

const getTodos = () => {
    return arrayDeIngredientes;
}

const getById = (id) => {
    return arrayDeIngredientes.find( ing => ing._id === id );
}

module.exports = {
    getTodos,
    getById
    // Faltan las demás...
}