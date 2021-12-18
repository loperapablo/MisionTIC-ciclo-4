import { Schema, model } from 'mongoose';
import { ProjectModel } from './proyecto';
import User from './User';

const avanceSchema = new Schema({
  fecha: {
    type: Date,    
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
    ref: ProjectModel,
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
});

const ModeloAvance = model('Avance', avanceSchema);

export { ModeloAvance };