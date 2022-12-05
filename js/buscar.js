
function encontrarImagen() {
   let varNombre = prompt("Nom de la ciutat que vols buscar:", "");
   let indice = buscar(varNombre);
   
   if (indice >=0) {
        posicionActual = indice;
        mostrarImagen();
    } else {
        alert("La imatge ( " + varNombre  + " ) no s'ha trobat.");
 }
}

function buscar(nombreImagen) {   
 let encontrado = false;
 let elementos = imagenes.length;
 let i = 0;
 let indice = -1;
 nombreImagen = nombreImagen[0].toUpperCase() + nombreImagen.substring(1);

 while (i < elementos && !encontrado) {
     if (imagenes[i].nombre == nombreImagen) {
        indice = i;
        encontrado = true;
     }
     i++;
 }

 return indice;
}