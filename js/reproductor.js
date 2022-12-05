//https://www.w3schools.com/jsref/met_win_setinterval.asp

const INTERVALO_MILISEGUNDOS = 1000;

function play(){
    intervalo = setInterval(avanzar, INTERVALO_MILISEGUNDOS);    
}

function stop(){
    clearInterval(intervalo);
}
