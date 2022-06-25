const getAllPosts = (req, res) => {
  res.status(200).json({
    status: "success",
    posts,
  });
};

const createPost = (req, res) => {
  const { title } = req.body; // es conveninte hacer una destructuracion de los datos que vienen del cliente para que el codigo se  mas limpio y se pueda leer mas facilmente {title, author, etc} es el nombre del campo que vamos a recibir del cliente pero podemos recibir mas datos del cliente
  const newPost = {
    id: Math.floor(Math.random() * 1000),
    title,
  };
  posts.push(newPost);
  res.status(201).json({
    status: "success",
    newPost,
  });
};
module.exports = { getAllPosts, createPost };
