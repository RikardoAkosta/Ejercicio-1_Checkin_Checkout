const express = require("express");

//Controllers
const {
  getAllRegistrations,
  createRegistrations,
  getRegistrationsById,
  updateRegistrations,
  deleteRegistrations,
} = require("../controllers/registrations.controller"); //aqui importamos el archivo users.controller.js y le pasamos el app para que pueda usarlo

const registrationsRouter = express.Router(); //cambiaremos esta const por la const app y asi optimizar laurl users, para pos no serviviria

registrationsRouter.get("/", getAllRegistrations); //aqui le decimos a express que va a usar el router de usuarios{
//consultar un usuario por id
registrationsRouter.get("/:id", getRegistrationsById); //si ponemos un parametro dinamico en la ruta, podemos consultarlo con el metodo params//vamos recibir una peticion post con el metodo post desde postman simulando el frontend.

//crear un usuario
registrationsRouter.post("/", createRegistrations);

//actualizar un usuario
registrationsRouter.patch("/:id", updateRegistrations);
//eliminar un usuario
registrationsRouter.delete("/:id", deleteRegistrations);

module.exports = { registrationsRouter }; //exportamos el router para que sea accesible desde otro archivo
