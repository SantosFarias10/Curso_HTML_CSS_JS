const mongoose = require("mongoose")  //importamos la libreria mongoose

mongoose.connect('mongodb+srv://Santos:43882193@cluster0.pbugvvg.mongodb.net/miApp?retryWrites=true&w=majority&appName=Cluster0')

const User = mongoose.model("User", {
  username: String,
  edad: Number,
})

const crear = async () => { // Una funcion Asincrona es una funcion que permite la ejecucion no bloqueante de codigo
  const user = new User({ username: "La Mona", edad: 15})

  const savedUser = await user.save()   //Guardamos en la base de datos, save() retorna una promesa
  console.log(savedUser)
}

// crear()

const buscarTodo = async () => {
  const users = await User.find()
  console.log(users)
}

// buscarTodo()

const buscar = async () => {
  const user = await User.find({ username: "La Mona" })
  console.log(user)
}

// buscar()

const buscarUno = async () => {
  const user = await User.findOne({ username: "La Mona" })
}

// buscarUno()

const actualizar = async () => {
  const user = await User.findOne({ username: "La Mona" })
  console.log(user)
  user.edad = 30
  await user.save()
}

// actualizar()

const eliminar = async () => {
  const user = await User.findOne({ username: "La Mona" })
  console.log(user)
  if (user) {
    await user.deleteOne()
  }
}

//eliminar()
