function clearCart(){
    let carrito = document.getElementById("cartItems")
    carrito.remove()
    document.getElementById("clearCart").remove()
    let carritoVacio = document.getElementById("emptyCart")
    carritoVacio.classList.remove("d-none")
    carritoVacio.classList.add("d-flex", "flex-column", "align-items-center" ,"justify-content-center","pt-5")
}