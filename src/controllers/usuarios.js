const Usuario = require("../models/usuarios");

exports.CreateUsuario = (request, response) => {
  const usuarioForAdd = new Usuario({
    username: request.body.username,
    password: request.body.password,
    role: request.body.role,    
    estado: request.body.estado,

  });

  usuarioForAdd.save().then((usuarioCreated) => {
    response.status(201).json(usuarioCreated);
  });
};

exports.GetAll = (req, res) => {
  Usuario.find().then((usuarios) => {
    res.status(200).json(usuarios);
  });
};

exports.getUserId = (req, res) => {
  Usuario.findById(req.params.id).then((usuarioResult) => {
    if (usuarioResult) {
      res.status(200).json(usuarioResult);
    } else {
      res.status(404).json("No Encontrado");
    }
  });
};