const express = require('express')
const app = express()

const path = require('path')

app.use(express.static('public'))

app.listen(8000, () => {
    console.log('aplicacion corriendo en puerto 8000')
})

app.get('/', (req, rest) => {
    rest.sendFile(path.join(__dirname, 'public/index.html'))
})
