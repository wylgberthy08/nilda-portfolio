const knex = require('../database')

module.exports = {
  async index (req, res) {
    const response = await knex('categories')

    return res.json(response)
  },

  async find (req, res) {
    const { id } = req.params

    const response = await knex('categories')
      .where({id})

    return res.json(response)
  },

  async post (req, res) {
    const { name } = req.body

    await knex('categories')
      .insert({
        name
      })

    return res.send()
  },

  async update (req, res) {
    const { id } = req.params
    const { name } = req.body

    await knex('categories')
      .update({
        name
      })
      .where({id})
    
      return res.send()
  },

  async delete(req, res) {
    const { id } = req.params

    await knex('categories')
      .delete()
      .where({id})

    return res.send()
  }
}