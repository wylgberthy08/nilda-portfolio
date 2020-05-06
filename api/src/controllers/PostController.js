const knex = require('../database')
const blobClient = require('../config/azure')
const fs = require('fs')
const path = require('path')

module.exports = {
  async index (req, res) {
  },

  async find (req, res) {
  },

  async post (req, res) {
    const containerClient = blobClient.getContainerClient('imagens')
    const blockBlob = containerClient.getBlockBlobClient(req.file.filename)

    const response = await blockBlob.uploadFile(req.file.path)

    if(!response.errorCode) {
      fs.unlinkSync(req.file.path)
    }
    
    console.log(response)

    return res.send()
  },

  async update (req, res) {
  },

  async delete(req, res) {
  }
}