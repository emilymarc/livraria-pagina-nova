const { Books } = require("../database/models")

const BookController = {
    async create(req, res){

        const file = req.files[0]

        const imageFolder = 'images/'
        
        const newBook = await Books.create({
            ...req.body,
            image:______ + imageFolder + file.filename
        })

        console.log(req.files)
        return res.status(201).json({dadosFinais: newBook})
    }
}

module.exports = BookController