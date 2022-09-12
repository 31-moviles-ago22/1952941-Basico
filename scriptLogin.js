var usuarioTXT = document.getElementById("usuario");
var usuarioVALUE = usuarioTXT.value;

var passwordTXT = document.getElementById("password");
var passwordVALUE = passwordTXT.value;
var contadorintentos=3;
const passwordCORRECTO = "contrasena1234"

var botonLoginTXT = document.getElementById("botonlogin");
var botonLoginVALUE = botonLoginTXT.value;

function InicioSesion(){
    usuarioVALUE=usuarioTXT.value;
    passwordVALUE=passwordTXT.value;

    var passwordVALUE=password.value;

    if(passwordVALUE == passwordCORRECTO){
        window.location.assign("\Index.html");
    }else{
        contadorintentos--;
        var mensajeINCORRECTO = document.createElement("p")
        if(contadorintentos==0){
            mensajeINCORRECTO.innerHTML="cuenta bloqueada";
            password.disabled=true;
            usuarioTXT.disabled=true;
        }else{
            mensajeINCORRECTO.innerHTML="password incorrecto. Te quedan " + "intentos";
            mensajeINCORRECTO.style.color="red";
            mensajeINCORRECTO.style.fontWeight="bold";
        }
       
        

        var logincontainer=document
        }

    var nuevoelemento=document.createElement("ion-item");
    nuevoelemento.innerHTML=usuarioVALUE+" "+passwordVALUE;

    usuarioTXT.value="";
    passwordTXT.value="";

}

function InicioSesion(){

}
