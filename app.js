const express = require("express"); //aqui importamos express para poder usarlo en el codigo

//Router
const { usersRouter } = require("./routes/users.routes"); //aqui importamos el archivo users.routes.js y le pasamos el app para que pueda usarlo
const { postsRouter } = require("./routes/posts.routes"); //aqui importamos el archivo posts.routes.js y le pasamos el app para que pueda usarlo

//Utils
const { db } = require("./utils/database.util"); //aqui importamos el archivo database.util.js y le pasamos la db para que pueda usarla

const app = express(); //aqui creamos una variable llamada app que va a ser una instancia de express todo el porder de express esta aqui

app.use(express.json()); //aqui le decimos a express que va a usar el json esto es un milware

// Define endpoints simpre se deben poner antes para que el servidor escuche las peticiones

// esta es la tarea de crear un endpoint para obtener los posts de un usuario

app.use("/users", usersRouter); //aqui le decimos a express que va a usar el router de usuarios
app.use("/posts", postsRouter); //aqui le decimos a express que va a usar el router de posts

db.authenticate() //esta funcion es para verificar si la conexion esta bien o no
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));
//luego que nos hemos autenticado con la db podemos crear las tablas que vamos a usar

db.sync() //esta funcion buscar y no  encuentra debera  crear las tablas que vamos a usar
  .then(() => console.log("DB async"))
  .catch(err => console.log(err));

app.listen(4001, () => {
  //aqui le decimos que escuche en el puerto 4000
  console.log("Express app running!!");
});
