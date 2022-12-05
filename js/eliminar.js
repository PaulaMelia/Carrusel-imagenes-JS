function eliminar() {
    let vImagen = prompt("Indica el nom de la ciutat.");
    let indice = buscar(vImagen);


        imagenes.splice(indice,1);
        posicionActual = indice;
        mostrarImagen();
};