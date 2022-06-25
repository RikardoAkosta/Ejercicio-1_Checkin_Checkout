const express = require("express");

//Controllers
const { getAllUsers, createUser } = require("../controllers/users.controller"); //aqui importamos el archivo users.controller.js y le pasamos el app para que pueda usarlo

const usersRouter = express.Router(); //cambiaremos esta const por la const app y asi optimizar laurl users, para pos no serviviria

usersRouter.get("/", getAllUsers); //aqui le decimos a express que va a usar el router de usuarios{
//vamos recibir una peticion post con el metodo post desde postman simulando el frontend.
usersRouter.post("/", createUser);

module.exports = { usersRouter }; //exportamos el router para que sea accesible desde otro archivo
