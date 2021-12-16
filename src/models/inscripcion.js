const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Usuarios } = require('./usuarios')
const {Proyectos} = require('./proyectos')

const InscripcionSchema = new Schema({
  estado: {
    type: String,
    enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],
    default: 'PENDIENTE',
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: false,
  },
  fechaEgreso: {
    type: Date,
    required: false,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: Proyectos,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: Usuarios,
    required: true,
  },
});

module.exports = mongoose.model('Inscripciones', InscripcionSchema);