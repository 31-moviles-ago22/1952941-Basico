var carrito=0;
var carritospan=document.getElementById("carito");
var contenedorcarrito=document.getElementById("carrocompras");
function agregaralCarrito(imagenSrc){
    carrito++;
    carritospan.innerHTML=carrito;

    var articulo=document.createElement("div");
    var imagen=document.createElement("img");
    imagen.src="RUTADELAIMAGEN";

    var link=document.createElement("a");
    link.onclick="eliminar()";
    botonLoginTXT.addEventListener("click",function()){

    }
    link.href="";

    articulo.appendChild(imagen);
    articulo.appendChild(link);

    //inyecta articulo
    contenedorcarrito.appendChild(articulo);

}

function eliminar(){
    carrito--;
}