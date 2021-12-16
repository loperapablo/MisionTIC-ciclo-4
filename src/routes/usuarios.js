const express = require("express");
const router = express.Router();

const UsuarioController = require("../controllers/usuarios");

router.post("", UsuarioController.CreateUsuario);
router.get("", UsuarioController.GetAll);
router.get("/:id", UsuarioController.getUserId);

module.exports = router;