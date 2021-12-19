import {makeExecutableSchema} from 'graphql-tools'
import { resolvers } from './resolvers.js'

const typeDefs = `
    scalar Date

    type MyType {
    created: Date
    }
    type Query {
        Proyectos: [Proyecto]        
        Users: [User]
        Avances(project: String): [Avance]
        filtrarAvance(_id: String!): [Avance]
        Inscripciones: [Inscripcion]
        filtrarProyectosEstudiante(_id: String!): [Inscripcion] 
        filtrarProyectosLider(_id: String!): [Inscripcion] 
        filtrarInscripcionesProyecto(_id: String!): [Inscripcion] 

    }

    

    type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: String!
  }
  type Inscripcion {
    _id: ID!
    estado: String!
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto(lider: ID): Proyecto
    estudiante: User!
  }

  type Avance {
    _id: ID!
    fecha: Date
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: User!
  }
  input crearObjetivo {
    descripcion: String!
    tipo: String!
  }
  input camposObjetivo {
    descripcion: String!
    tipo: String!
  }
  input camposProyecto {
    nombre: String
    presupuesto: Float
    fechaInicio: Date
    fechaFin: Date
    estado: String!
    fase: String!
    lider: ID
  }
  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date
    fechaFin: Date
    estado: String!
    fase: String!
    lider: User!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
  }


    type User {
        _id: ID
        correo: String!
        password: String!
        identificacion: String!
        nombre: String!
        apellido: String!
        rol: String!
        estado: String!        
    }

    type Mutation {
        
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
        crearAvance(fecha: Date, descripcion: String!, proyecto: String!, creadoPor: String!): Avance
        crearInscripcion(proyecto: String!, estudiante: String!): Inscripcion
        aprobarInscripcion(id: String!): Inscripcion
        agregarObservacionAvance(_id: ID, input: ObservacionAvance): Avance

    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date
      fechaFin: Date
      lider: ID
      objetivos: [crearObjetivo]
    ): Proyecto
    editarProyecto(_id: String!, campos: camposProyecto!): Proyecto
    crearObjetivo(idProyecto: String!, campos: camposObjetivo!): Proyecto
    editarObjetivo(idProyecto: String!, indexObjetivo: Int!, campos: camposObjetivo!): Proyecto
    eliminarObjetivo(idProyecto: String!, idObjetivo: String!): Proyecto
    }

    input ObservacionAvance {
      descripcion: String!
    }

    input UserInput {
        correo: String!
        password: String!
        identificacion: String!
        nombre: String!
        apellido: String!
        rol: String!
        estado: String!
        
    }


`

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})