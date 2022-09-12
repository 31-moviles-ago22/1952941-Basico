function irLogin(){
    window.location.assign("sesion.html");
}


var elementopadre=document.querySelector(".principal")
function inyectarHola(){
    //crear elemento
    var mensaje=document.createElement("p");
    //preparar elemnto para inyectar
    mensaje.style.color="red";
    mensaje.style.backgroundColor="black";
    mensaje.innerHTML="hola";
    //inyectar elemento a la pagina
    elementopadre.appendChild(mensaje);

   //inyecta antes del contenedor
    elementopadre.insertBefore(mensaje,contenedor)
}