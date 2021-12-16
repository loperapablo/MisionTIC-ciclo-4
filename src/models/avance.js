const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Usuarios } = require('./usuarios')
const { Proyectos } = require('./proyectos')

const avanceSchema = new Schema({
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: Proyectos,
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: Usuarios,
    required: true,
  },
});

module.exports = mongoose.model('Avance', avanceSchema);