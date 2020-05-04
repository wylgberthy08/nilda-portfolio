const express = require('express')
const routes = express.Router()

const CategoriesController = require('./controllers/CategoriesController')

routes.get('/categories', CategoriesController.index)
routes.get('/categories/:id', CategoriesController.find)
routes.post('/categories', CategoriesController.post)
routes.put('/categories/:id', CategoriesController.update)
routes.delete('/categories/:id', CategoriesController.delete)

module.exports = routes