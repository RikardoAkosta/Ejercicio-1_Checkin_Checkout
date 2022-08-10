const { Sequelize, DataTypes } = require("sequelize"); //aqui eestamos desestructurando  a sequelize
//connet to database with sequelize esto es progrmacion orientada a objetos
const db = new Sequelize({
  //db representa la conexion a la base de datos
  dialect: "postgres", //es la base de datos que vamos a usar
  host: "localhost", // es el servidor que vamos a usar o la direccion ip del servidor
  username: "postgres", //es el nombre administrador simpre es postgres
  password: "C80142949a*", //esta es la misma contraseña que usamos para hacer la instalacion de la db
  port: 5432, // es el mismo de la instalacion de la db
  database: "Ejercicio1_Checkin_Checkout", //debemos crear la dB pgAdmn 4 y ponemos el mismo nombre que la que creamos en la db
  logging: false, //simplifica el log de la db
});
//con la varible dB ya tenemos nuestra coneccion conla base de datos y podemos usarla en el codigo
module.exports = { db, DataTypes }; //exportamos la db a user.model.js para que podamos usarla en otros archivos
