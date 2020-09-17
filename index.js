const botonDespleglable = document.getElementById("hamburguesa")
const barraNavegacion = document.getElementById("barraNavegacion")
const menuDesplegable = document.getElementById("desplegable")


botonDespleglable.onclick = () => {

    console.log("hello")
    menuDesplegable.classList.toggle(`mostrar-menu`)
    barraNavegacion.classList.toggle(`cambio-desplegable`)
    botonDespleglable.classList.toggle(`menus`)
    
}



