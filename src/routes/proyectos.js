const express = require("express");
const router = express.Router();

const ProyectoController = require("../controllers/proyectos");

router.post("", ProyectoController.CreateProyecto);
router.get("", ProyectoController.GetAll);

module.exports = router;