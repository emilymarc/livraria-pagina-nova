const { Books } = require("../database/models")
const cloudinary = require('../config/cloudinary')

const imageFolder = 'images/'

const BookController = {
    async create(req, res){

        const file = req.files[0]
        const uploadPath = await cloudinary.uploads(file.path, 'livraria')
        console.log(uploadPath.imageUrl) //isso aqui salva no banco de dados

        const newBook = await Books.create({
            ...req.body,
            // forma de upload na aplicação/server
            // image: imageFolder + file.filename

            // salvar no banco a url da imagem:
            image: uploadPath.imageUrl
        })

        console.log(req.files)
        return res.status(201).json(newBook)
    }
}

module.exports = BookController