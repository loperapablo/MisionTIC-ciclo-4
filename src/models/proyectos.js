const mongoose = require('mongoose');
const { Schema } = mongoose;
const {Usuarios} = require('./usuarios')

const ProyectoSchema = new Schema({
    nombre: {
      type: String,
      required: true,
    },
    fechaInicio: {
      type: Date,
      required: true,
    },
    fechaFin: {
      type: Date,
      required: true,
    },
    estado: {
      type: String,
      enum: ['ACTIVO', 'INACTIVO'],
      default: 'ACTIVO',
    },
    fase: {
      type: String,
      enum: ['EN DESARROLLO', 'TERMINADO'],
      default: 'EN DESARROLLO',
    },
    lider: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: Usuarios,
    },     
},
{
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true },
}

);

ProyectoSchema.virtual('avances', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'proyecto',
});

ProyectoSchema.virtual('inscripciones', {
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'proyecto',
});

module.exports = mongoose.model('Proyectos', ProyectoSchema);