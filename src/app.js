const express = require("express")
const routes = require("./routes")
const db = require("./database")
const upload = require("./config/upload")
const { use } = require("./routes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(upload.any())
app.use(express.static('src/public'))

db.hasConnection()

app.use(routes)

app.listen(3000, () => console.log('Servidor no ar!'))


