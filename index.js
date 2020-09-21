const botonDespleglable = document.getElementById("hamburguesa")
const barraNavegacion = document.getElementById("barra-principal")
const menuDesplegable = document.getElementById("barraNavegacion")

const secciones = document.getElementsByClassName("li-nav")



botonDespleglable.onclick = () => {

    menuDesplegable.classList.toggle(`show`)
    barraNavegacion.classList.toggle(`cambio-desplegable`)

    if (menuDesplegable.classList.contains(`show`)) {
        botonDespleglable.setAttribute(`class`, `fa fa-times`)
    }
    else {
        botonDespleglable.setAttribute(`class`, `fas fa-bars`)
    }

    for (let seccion of secciones) {

        seccion.onclick = ()=> {
            menuDesplegable.classList.remove(`show`)
            barraNavegacion.classList.remove(`cambio-desplegable`)
            botonDespleglable.setAttribute(`class`, `fas fa-bars`)
        } 
        
    }
    
}



