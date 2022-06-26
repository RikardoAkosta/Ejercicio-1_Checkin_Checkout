//Models
const { Registrations } = require("../models/registrations.model");

const getRegistrations = async (req, res) => {
  try {
    const registrations = await Registrations.create(); //aqui estamos buscando todos los usuarios de la base de datos con async await
    res.status(200).json({
      status: "success estes el ejemplo del comentario ", //aqui podemos poner el mensaje que se desee que se muestre en la respuesta
      registrations,
    });
  } catch (err) {
    console.log(err);
  }
};

const createRegistrations = async (req, res) => {
  try {
    const { entranceTime, exitTime, status } = req.body; //los datos que vienen del cliente simpre los vamos a encontrar en el metodo body

    const newRegistrations = await Registrations.create({
      entranceTime: newDate(),
      exitTime: newDate(),
      status: "active",
    });

    res.status(201).json({
      status: "success",
      newRegistrations,
    });
  } catch (err) {
    console.log(err);
  }
};

const getRegistrationsById = async (req, res) => {
  const { id } = req.params; //aqui estamos obteniendo el parametro id que viene en la ruta

  const registrations = await Registrations.findOne({ where: { id } }); //solo queremos un recurso y encuentre el usuario que coincida con el criterio de busqueda

  if (!registrations) {
    return res.status(404).json({
      //estamos validando si el suario no existe arroje un error 404
      status: "error",
      message: "User not found",
    });
  }
  res.status(200).json({
    status: "success",
    registrations,
  });
};
//actualizar un usuario
const updateRegistrations = async (req, res) => {
  const { id } = req.params; //aqui estamos obteniendo el parametro id que viene en la ruta
  const { entranceTime, exitTime } = req.body; //estamos actualizando el usuario porque ya sabemos que existe y podra actualizar el name
  const registration = await Registrations.findOne({ where: { id } });

  if (!registration) {
    return res.status(404).json({
      //estamos validando si el suario no existe arroje un error 404
      status: "error",
      message: "User not found",
    });
  }

  await registration.update({ entranceTime, exitTime }); //aqui estamos actualizando el usuario porque ya sabemos que existe
  res.status(204).json({
    status: "success",
    message: "User updated",
  });
};
//eliminar un usuario
const deleteRegistrations = async (req, res) => {
  const { id } = req.params; //aqui estamos obteniendo el parametro id que viene en la ruta

  const registration = await Registrations.findOne({ where: { id } });

  if (!registration) {
    return res.status(404).json({
      //estamos validando si el suario no existe arroje un error 404
      status: "error",
      message: "User not found",
    });
  }
  //await user.destroy(); //aqui estamos eliminando el usuario porque ya sabemos que existe no se recomienda usar este metodo porque no se va a eliminar el usuario de la base de datos simpres es mejor tener los datos en una base de datos externa
  await registration.update({ status: "delete" }); //de este modo solo inactivamos el usuario pero no lo borramos de la base de datos
  res.status(204).json({
    status: "success",
    message: "User deleted",
  });
};

module.exports = {
  getRegistrations,
  createRegistrations,
  getRegistrationsById,
  updateRegistrations,
  deleteRegistrations,
};
