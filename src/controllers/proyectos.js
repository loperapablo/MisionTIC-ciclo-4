const Proyecto = require("../models/usuarios");

exports.CreateProyecto = (request, response) => {
  const proyectoForAdd = new Proyecto({
    nombre: request.body.nombre,
    lider: request.body.lider,
    fase: request.body.fase,    
    estado: request.body.estado,
    inscripciones: request.body.inscripciones,    
    avances: request.body.avances,
  });

  proyectoForAdd.save().then((proyectoCreated) => {
    response.status(201).json(proyectoCreated);
  });
};

exports.GetAll = (req, res) => {
  Proyecto.find().then((proyectos) => {
    res.status(200).json(proyectos);
  });
};