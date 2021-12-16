const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    identificacion: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
        },
    rol: {
        type: String,
        required: true,
        enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
    },
    estado: {
        type: String,
        enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO'],
        default: 'PENDIENTE',
    },
});

module.exports = mongoose.model('Usuarios', UserSchema);