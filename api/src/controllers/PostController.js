const knex = require('../database')
const containerClient = require('../config/azure')
const fs = require('fs')
const path = require('path')

module.exports = {
  async index (req, res) {
  },

  async find (req, res) {
  },

  async post (req, res) {
    const blockBlob = containerClient.getBlockBlobClient(req.file.filename)
    const response = await blockBlob.uploadFile(req.file.path)

    if(!response.errorCode) {
      fs.unlinkSync(req.file.path)
    }

    return res.send()
  },

  async update (req, res) {
  },

  async delete(req, res) {
    const { filename } = req.body
    try {
      await containerClient.deleteBlob(filename)
    } catch (error) {
      return res.json({
        statusCode: error.statusCode,
        details: error.details.errorCode
      })
    }

    return res.send()
  }
}