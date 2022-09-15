var usuarioTXT = document.getElementById("usuario");
var passwordTXT = document.getElementById("password");

var contadorintentos=3;
const passwordCORRECTO = "contrasena1234"

var botonLoginTXT = document.getElementById("botonlogin");


function InicioSesion(){
    console.log(usuarioTXT.value);
    console.log(passwordTXT.value);

    var passwordVALUE=password.value;

    if(passwordVALUE == passwordCORRECTO){
        window.location.assign("/Index.html");
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

    

}


function escribiendousuario(){
    console.log("Usuario: "+usuarioTXT.value);
}

function escribiendopassword(){
    console.log("Password: "+passwordTXT.value);
}

