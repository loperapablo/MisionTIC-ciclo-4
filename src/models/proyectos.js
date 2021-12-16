const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProyectoSchema = new Schema({
    nombre: { type: String, required: true },
    lider: { type: Object, required: true },
    fase: { type: String, required: true },
    estado: { type: Boolean, required: true },
    inscripciones: { type: Array, required: true },
    avances: { type: Array, required: true },
});

module.exports = mongoose.model('Proyectos', ProyectoSchema);