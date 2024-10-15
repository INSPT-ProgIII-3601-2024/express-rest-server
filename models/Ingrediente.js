// models/Ingrediente.js

const mongoose = require('mongoose');

const IngredienteSchema = new mongoose.Schema({
    // Se asume que el Schema tiene un atributo _id autogenerado por MongoDB
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    foto: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true,
        match: /^#([0-9A-F]{3}){1,2}$/i // Asegura que sea un código de color hexadecimal
    }
}, {
    collection: 'ingredientes', // Nombre de la colección especificado,
    timestamps: true // Añade campos de createdAt y updatedAt
});

module.exports = mongoose.model('Ingrediente', IngredienteSchema);
