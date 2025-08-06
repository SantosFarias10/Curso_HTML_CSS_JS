// Vanilla JS

// Recuperamos el boton
const button = document.querySelector('button')

// Al hacer click en el boton, tenemos que ejecutar una funcion
boton.addEventListener('click', function () {
    // Recuperamos la id del atributo del HTML
    const id = button.getAttribute('data-id')

    // Llamar a un servicio para actualizar si me gusta
    // Por ejemplo una funcion toggleLike(id)

    if(button.classList.contains('liked')) {
        button.classList.remove('liked')
        button.innerText = 'Me gusta'
    } else {
        button.classList.add('liked')
        button.innerText = 'Quitar Me Gusta'
    }
})