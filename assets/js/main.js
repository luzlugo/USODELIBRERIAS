const productosContainer = document.querySelector('#Container')
const carritoContenedor = document.querySelector('#carrito-contenedor')

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector ('#precioTotal')
const btnVaciar = document.querySelector('#vaciarCarrito')

let carrito
const carritoEnLS = JSON.parse (localStorage.getItem ('carrito'))



const item = Habitaciones[0]

Habitaciones.forEach((item) => {
    const div = document.createElement('div')
    div.classList.add('producto')

    div.innerHTML =`

<div id="Container"  class="habitacion1">
<div class="desc-hab">
    <img class="hab-img" src="${item.img}" alt="" width="600px" height="296px">
</div>

<div class="desc-hab-1 habitaciones-desc-index">
    <div class="titulo-hab-boton">
        <div class="hab-descr-ec">
            <h2 class="subtitle"> ${item.nombre} </h2>
            <p class="hab">
               ${item.descripcion}
            </p>
        </div>


        <div class="boton">
            <span class="hab precio">
               ${item.precio}
            </span>
            <br><br>
            <button onclick="agregarAlCarrito(${item.id})" class="reservar"><i class="fas fa-shopping-cart"></i> Reservar</button>
        </div>
    </div>


    <div class="lista-hab">

        <span class="hab">
            Caracteristicas:
        </span>
        <ul class="hab-ul">
            <li class="hab-li">
                <i class="fa-solid fa-wifi"></i>
                WIFI
            </li>

            <li class="hab-li">
                <i class="fa-solid fa-fan"></i>
                Ventilador
            </li>
            <li class="hab-li">
                <i class="fa-solid fa-shower"></i>
                Baño privado
            </li>
            <li class="hab-li">
                <i class="fa-solid fa-rug"></i>
                Toallas de baño
            </li>
            <li class="hab-li">
                <i class="fa-solid fa-kitchen-set"></i>
                Acceso a cocina
            </li>
            <li class="hab-li">
                <i class="fa-solid fa-square-parking"></i>
                Parqueo de acceso publico
            </li>
        </ul>
    </div>

    <div class="boton2">
        <span class="hab precio">
           ${item.precio}
        </span>
        <br><br>
        <button onclick="agregarAlCarrito(${item.id})" class="reservar"><i class="fas fa-shopping-cart"></i> Reservar</button>
        </div>

</div>


</div>


<hr class="hab-hr">

`
console.log(div)
productosContainer.append(div)


})


const agregarAlCarrito = (id) =>{
    
const item = Habitaciones.find( (producto) => producto.id === id)
carrito.push(item)



localStorage.setItem('carrito', JSON.stringify(carrito))

console.log (carrito)
renderCarrito()
renderCantidad()
renderTotal()
}

const removerDeCarrito = (id) => {

    const item = carrito.find ((producto) =>  producto.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice (indice, 1)

    localStorage.setItem('carrito', JSON.stringify(carrito))

    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () =>{

carrito = []

renderCarrito()
renderCantidad()
renderTotal()

}
btnVaciar.addEventListener( 'click', () =>{

    Swal.fire({
        title: 'Seguro?',
        text: "se va a vaciar todo el carro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar'
      }).then((result) => {
        if (result.isConfirmed) {
          vaciarCarrito()
        }
      })


})


const renderCarrito = () => {

    carritoContenedor.innerHTML =  ` `

    carrito.forEach((item) => {

       const div = document.createElement('div')
       div.classList.add('productoEnCarrito')

       div.innerHTML = `
       
                    <p>${item.nombre}</p>
                    <p>precio: $${item.precio}</p>
                    <button onclick="removerDeCarrito(${item.id})" class="buton-eliminar"><i class="fa-solid fa-trash-can"></i></button>
       
                       `

       carritoContenedor.append(div)              

    })
}

const renderCantidad = () => {

      contadorCarrito.innerText = carrito.length
      
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto)=> {
      total += producto.precio

    })

    precioTotal.innerText = total
}

const showMensaje = (producto) => {

    Toastify({

        text:`Se agregó ${producto} al carrito`,
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: "green",
        }

    }).showToast()
}

if (carritoEnLS){
    carrito = carritoEnLS
    renderCarrito()
    renderCantidad()
    renderTotal() 

} else {
    carrito = []
}

