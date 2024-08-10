function Calc_imc(){
    let peso=parseInt(document.getElementById('peso').value);
    let altura=parseFloat(document.getElementById('altura').value);

    
    // Verifica si los valores son válidos
    if (isNaN(peso) || isNaN(altura)) {
        error();
        return; // Sale de la función si hay error
    }else{
        let text = document.getElementById('error1');
        text.innerHTML = ""; 
    }

    //Formula para el imc
    let IMC = peso / (altura * altura);
    let IMC_EDIT=IMC.toFixed(2);

    let result = document.getElementById('resultado');
        result.innerHTML ="Índice de Masa Corporal: "+IMC_EDIT; 

    opcion(IMC_EDIT);
    abrir_modal();
}



// Abri modal
function abrir_modal() {
    let modal = document.getElementById('modal');
    modal.style.visibility = "visible";
}
// Cerrar modal
function Cerrar() {
    let modal=document.getElementById('modal');
    modal.style.visibility = "hidden";
}


// Funcion de error    
function error() {
    let text_error = document.getElementById('error1');
        text_error.innerHTML = "Error al introducir los datos";
}

function opcion(res) {
    let result=parseFloat(res);

    if (res<16.00) {
        mensaje="Infrapeso: Delgadez Severa";
        mostrar_mensaje(mensaje);
    }if (res>=16.00 && res<=16.99) {
        mensaje="Infrapeso: Delgadez moderada";
        mostrar_mensaje(mensaje);
    }if (res>=17.00 && res<=18.49) {
        mensaje="Infrapeso: Delgadez aceptable";
        mostrar_mensaje(mensaje);
    }if (res>=18.50 && res<=24.99) {
        mensaje="Peso normal";
        mostrar_mensaje(mensaje);
    }if (res>=25.00 && res<=29.99) {
        mensaje="Sobrepeso";
        mostrar_mensaje(mensaje);
    }if (res>=30.00 && res<=34.99) {
        mensaje="Obeso: Tipo I";
        mostrar_mensaje(mensaje);
    }if (res>=35.00 && res<=40.00) {
        mensaje="Obeso: Tipo II";
        mostrar_mensaje(mensaje);
    }if (res>40.00) {
        mensaje="Obeso: Tipo III";
        mostrar_mensaje(mensaje);
    }
}

function mostrar_mensaje(mensajes) {
    let elemento=document.getElementById('calculo');
    let mensaje=mensajes;
    elemento.innerHTML="Atendiendo al IMC, tiene: "+mensaje;
}