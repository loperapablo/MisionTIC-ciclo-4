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

mongoose.connect('mongodb+srv://root:root@cluster0.vm7l1.mongodb.net/proyectosAdmin').then(() => {
  console.log("Conectado a DB este es index.js");
});

app.use("/api/proyectos", proyectosRoutes);
app.use("/api/usuarios", usuariosRoutes);

module.exports = app;