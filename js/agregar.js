function agregar() {
    let vImagen = prompt("Indica el nom de la ciutat.");
    let indice = buscar(vImagen);

    if (indice < 0) {

        let vFile = vImagen.toLowerCase() + ".jpg";
        let vTitulo = prompt("Títol de la ciutat: ", "Capital de ...");
        let vDescripcion = prompt("Introdueix una descripció.");

        let imagen = {
            imagen: vFile,
            nombre: vImagen,
            title: vTitulo,
            descripcion: vDescripcion,
        };
        imagenes.push(imagen);
        posicionActual = imagenes.length - 1;
        mostrarImagen();

    } else {
        alert("La imatge ja es troba entre les actuals.")
        posicionActual = indice;
        mostrarImagen();
    };

};