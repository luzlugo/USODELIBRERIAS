const modalContenedor = document.getElementsByClassName('modal-contenedor')[0]
const openmodal = document.querySelector('#boton-carrito')
const closeModal = document.querySelector('#carrito-cerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

openmodal.addEventListener('click', () => {

    modalContenedor.classList.add('modal-contenedor--visible')

})

closeModal.addEventListener('click',()=>{

modalContenedor.classList.remove('modal-contenedor--visible')

})

modalCarrito.addEventListener('click', (event) =>{

    event.stopPropagation()
}
)
