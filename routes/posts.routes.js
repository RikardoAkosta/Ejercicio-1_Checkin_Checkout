const express = require("express");

//Controllers
const { getAllPosts, createPost } = require("../controllers/posts.controller"); //aqui importamos el archivo posts.controller.js y le pasamos el app para que pueda usarlo

const postsRouter = express.Router();

postsRouter.get("/", getAllPosts);

postsRouter.post("/", createPost);

module.exports = { postsRouter };
