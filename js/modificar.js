
function modificar() {

    let confirmacioMod = confirm("Vol modificar la imatge actual?");


    if (confirmacioMod) {
        let confirmImatge = confirm("Vols modificar la foto?")
        if (confirmImatge) {
            imagenes[posicionActual].imagen = prompt("Nom de l'arxiu").toLowerCase() + ".jpg";
        };
        let confirmNombre = confirm("Vols modificar el nom de la ciutat?")
        if (confirmNombre) {
            imagenes[posicionActual].nombre = prompt("Nom de la ciutat");
        };
        let confirmTitol = confirm("Vols modificar el títol de la ciutat?")
        if (confirmTitol) {
            imagenes[posicionActual].title = prompt("Títol de la ciutat: ", "Capital de ...");
        };
        let confirmDesc = confirm("Vols modificar la descripció de la ciutat?")
        if (confirmDesc) {
            imagenes[posicionActual].descripcion = prompt("Introdueix una descripció.");
        };

    } else {
        alert("No toquem res doncs");

    };

    mostrarImagen();
}

/*
// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
*/