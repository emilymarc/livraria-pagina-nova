const express = require("express")
const routes = require("./routes")

const app = express()

app.use(routes)

app.listen(4000, () => console.log('Servidor no ar!'))


