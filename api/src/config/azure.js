require('dotenv/config')
const { BlobServiceClient, StorageSharedKeyCredential } = require('@azure/storage-blob')

const account = process.env.ACCOUNT;
const accountKey = process.env.ACCOUNT_KEY;

const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

const blobServiceClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net`,
  sharedKeyCredential
)

const containerClient = blobServiceClient.getContainerClient('imagens')
module.exports = containerClient