// -------------------  MENÚ DESPLEGABLE  ----------------------//

const botonDesplegable = document.getElementById("hamburguesa")
const barraNavegacion = document.getElementById("barra-principal")
const menuDesplegable = document.getElementById("barraNavegacion")

const secciones = document.getElementsByClassName("li-nav")



botonDesplegable.onclick = () => {

    menuDesplegable.classList.toggle(`show`)
    barraNavegacion.classList.toggle(`cambio-desplegable`)

    if (menuDesplegable.classList.contains(`show`)) {
        botonDesplegable.setAttribute(`class`, `fa fa-times`)
    }
    else {
        botonDesplegable.setAttribute(`class`, `fas fa-bars`)
    }

    for (let seccion of secciones) {

        seccion.onclick = ()=> {
            menuDesplegable.classList.remove(`show`)
            barraNavegacion.classList.remove(`cambio-desplegable`)
            botonDesplegable.setAttribute(`class`, `fas fa-bars`)
        } 
        
    }
    
}

//----------------------------  FILTRO EN PROYECTOS POR USO DE TECNOLOGIA  ------------------------------//

const botones = document.getElementsByClassName("filtros")
const proyectos = document.getElementsByClassName("proyecto")
console.log(botones)
console.log(proyectos)


for (let boton of botones) {
    boton.onclick = () => {
        
        for (let proyecto of proyectos) {
            proyecto.classList.add("hidden")     
             if (boton.dataset.nombre === proyecto.dataset.nombre) {
                 proyecto.classList.remove("hidden")
                 
             }
             else if (boton.dataset.nombre === "todos") {
                 proyecto.classList.remove("hidden")
             }
             else {
                 proyecto.classList.add("hidden")
             }
         
         } 
        
    }
}

/* filtrarPorTecnologia = () => {
    for (let proyecto of proyectos) {
       proyecto.classList.add("hidden")
       boton.classList.add()     
        if (boton.dataset.nombre === proyecto.dataset.nombre) {
            proyecto.classList.remove("hidden")
            
        }
        else if (boton.dataset.nombre === "todos") {
            proyecto.classList.remove("hidden")
        }
        else {
            proyecto.classList.add("hidden")
        }
    
    }
}

cambiosBotones = () => {
    if (boton.classList.contains("boton"))
}




 */
