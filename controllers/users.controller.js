//Models
const { User } = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.create(); //aqui estamos buscando todos los usuarios de la base de datos con async await
    res.status(200).json({
      status: "success estes el ejemplo del comentario ", //aqui podemos poner el mensaje que se desee que se muestre en la respuesta
      users,
    });
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res) => {
  const { name } = req.body; //los datos que vienen del cliente simpre los vamos a encontrar en el metodo body

  const newUser = {
    //vamos a generar un id y la base de datos sera la que nos devuelva el id aleatorio
    id: Math.floor(Math.random() * 1000),
    name,
  };

  users.push(newUser); //vamos a empujar el nuevo usuario a la lista de usuarios con push

  res.status(201).json({
    status: "success",
    newUser,
  });
};

module.exports = { getAllUsers, createUser };
