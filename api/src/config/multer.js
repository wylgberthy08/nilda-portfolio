const { diskStorage } = require('multer')
const path = require('path')

module.exports = {
  storage: diskStorage({
    destination: path.resolve(__dirname,'..','temp'),
    filename: (req, file, cb) => {
      const nameImage = `${Date.now()}-${file.originalname}`
      cb(null, nameImage)
    }
  })
}