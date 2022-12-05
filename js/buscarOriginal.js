
function encontrarImagen() {
   let varNombre = prompt("Indica el nombre de la imagen a mostrar:", "");
   let indice = buscar(varNombre);
   
   //let indice = imagenes.findIndex(imagen => imagen.nombre == varNombre);

   if (indice >=0) {
        posicionActual = indice;
        mostrarImagen();
    } else {
        alert("La imagen ( " + varNombre  + " ) no se encuentra.");
 }
}

function buscar(nombreImagen) {   
 let encontrado = false;
 let elementos = imagenes.length;
 let i = 0;
 let indice = -1;

 while (i < elementos && !encontrado) {
     if (imagenes[i].nombre == nombreImagen) {
        indice = i;
        encontrado = true;
     }
     i++;
 }

 return indice;
}


function suma (valor1, valor2) {
   return valor1 + valor2
}

function xxx() {

   let operador1 = Number(prompt("Digame el numero 1 a sumar"));
   let operador2 = Number(prompt("Digame el numero 1 a sumar"));

   alert("El resultado es: " + suma(operador1, operador2));
}