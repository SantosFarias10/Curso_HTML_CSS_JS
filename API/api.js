const express = require("express")  //Asignacion del framework, con require importamos la dependencia "express"
const user = require("./user.controller.js")
const mongoose = require("mongoose")

const app = express()
const port = 3000

app.use(express.json())

mongoose.connect('mongodb+srv://Santos:43882193@cluster0.pbugvvg.mongodb.net/miApp?retryWrites=true&w=majority&appName=Cluster0')

app.get('/users', user.list)
app.get('/users/:id', user.get)
app.post('/users', user.create)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.delete)

app.get("/", (req, res) => {
  console.log(__dirname)
  res.sendFile(`${__dirname}/index.html`)
})

app.get("*", (req, res) => {
  res.status(404).send("Esta pagina no existe")
})

app.listen(port, () => {
  console.log("Arrancando")
})
