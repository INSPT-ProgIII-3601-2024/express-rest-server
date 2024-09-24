const arrayDeIngredientes = require('../data/ingredientesFake')

const getTodos = () => {
    return arrayDeIngredientes;
}

const getById = (id) => {
    return arrayDeIngredientes.find( ing => ing._id === id );
}

const deleteById = (id) => {
    // TODO...
}
const updateById = (id) => {
    // TODO...
}
const add = (ingrediente) => {
    // TODO...
}

module.exports = {
    getTodos,
    getById,
    deleteById,
    updateById,
    add
}