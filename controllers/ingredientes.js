const Ingrediente = require('../models/Ingrediente');

// Obtener todos los ingredientes
const getTodos = async (req, res) => {
    try {
        const ingredientes = await Ingrediente.find();
        console.log(ingredientes)
        res.json(ingredientes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener los ingredientes' });
    }
};

// Obtener un ingrediente por ID
const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const ingrediente = await Ingrediente.findById(id);
        if (ingrediente) {
            res.json(ingrediente);
        } else {
            res.status(404).json({
                id,
                encontrado: false
            });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el ingrediente' });
    }
};

// Eliminar un ingrediente por ID
const deleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await Ingrediente.findByIdAndDelete(id);
        if (resultado) {
            res.json({
                msg: 'Ingrediente eliminado',
                id
            });
        } else {
            res.status(404).json({
                msg: 'Ingrediente no encontrado',
                id
            });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el ingrediente' });
    }
};

// Actualizar un ingrediente por ID
const updateById = async (req, res) => {
    const { id } = req.params;
    const { nombre, foto, color } = req.body;
    try {
        const ingredienteActualizado = await Ingrediente.findByIdAndUpdate(
            id,
            { nombre, foto, color },
            { new: true, runValidators: true } // `new: true` devuelve el documento actualizado
        );
        if (ingredienteActualizado) {
            res.json(ingredienteActualizado);
        } else {
            res.status(404).json({
                msg: 'Ingrediente no encontrado',
                id
            });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el ingrediente' });
    }
};

// Agregar un nuevo ingrediente
const add = async (req, res) => {
    const { nombre, foto, color } = req.body;
    try {
        const nuevoIngrediente = new Ingrediente({ nombre, foto, color });
        await nuevoIngrediente.save();
        res.status(201).json(nuevoIngrediente);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el ingrediente' });
    }
};

module.exports = {
    getTodos,
    getById,
    deleteById,
    updateById,
    add
};
