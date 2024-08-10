function validar() {
    let dato1=document.getElementById('correo').value;
    let dato2=document.getElementById('contra').value;
        
    
        if (!dato1 || !dato2) {
            abrir_modal();
            return;
        }
        else
        {
            console.log("Datos correctos")
        }
    
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
