const { db, DataTypes } = require("../utils/database.util"); //aqui estamos importando el modelo de usuarios

//Creando primer modelo despues de autenticacion (tabla en postgres)
const User = db.define(`user`, {
  //cuando ponemos la constante User con mayuscula nosindica que es un modelo de sequelize
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, //llave primaria de la tabla en postgres es unica y autoincremental y es un entero de 4 bytes de longitud
    autoIncrement: true, //este es el autoincremento de la tabla en postgres es una funcion que se ejecuta automaticamente y se le pasa el valor de la ultima llave primaria que se creo
    allowNull: false,
  },
  entranceTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  exitTime: {
    type: DataTypes.INTEGER, // hace referencia a que es un numero entero
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active", //para que el status sea activo por defecto
  },
});

module.exports = { User }; //exportamos el modelo de usuarios a user.model.js para que podamos usarlo en otros archivos
