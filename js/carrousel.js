document.getElementById("tema").innerHTML = TEMA;
let posicionActual = 0;
mostrarImagen();

function mostrarImagen() {
    let imagen = RUTA + imagenes[posicionActual].imagen;
    let nombre = imagenes[posicionActual].nombre;
    let titulo = imagenes[posicionActual].title;
    let descripcion = imagenes[posicionActual].descripcion;
    let coord = imagenes[posicionActual].coord;

    document.getElementById("imagen").src = imagen;
    document.getElementById("imagen").title = titulo;
    document.getElementById("imagen").alt = nombre;

    document.getElementById("nombreImagen").innerHTML = nombre;
    document.getElementById("titul").innerHTML = titulo;
    document.getElementById("desc").innerHTML = descripcion;


};

function avanzar() {
    posicionActual++;
    if (posicionActual > imagenes.length - 1) {
        posicionActual = 0;
        mostrarImagen();

    } else {
        mostrarImagen();
    }

}

function retroceder() {
    posicionActual--;
    if (posicionActual < 0) {
        posicionActual = imagenes.length - 1;
        mostrarImagen();

    } else {
        mostrarImagen();
    };

};