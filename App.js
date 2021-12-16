var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();
// require("dotenv").config();

const proyectosRoutes = require("./src/routes/proyectos");
const usuariosRoutes = require("./src/routes/usuarios");


app.use(express.json()); //
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use("/api/proyectos", proyectosRoutes);
app.use("/api/usuarios", usuariosRoutes);

module.exports = app;