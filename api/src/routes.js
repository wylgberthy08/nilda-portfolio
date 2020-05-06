const express = require('express')
const multer = require('multer')
const config = require('./config/multer')
const routes = express.Router()
const upload = multer(config)

const CategoriesController = require('./controllers/CategoriesController')
const PostController = require('./controllers/PostController')

routes.get('/categories', CategoriesController.index)
routes.get('/categories/:id', CategoriesController.find)
routes.post('/categories', CategoriesController.post)
routes.put('/categories/:id', CategoriesController.update)
routes.delete('/categories/:id', CategoriesController.delete)

routes.post('/posts', upload.single('image'), PostController.post)

module.exports = routes