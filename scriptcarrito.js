var carrito=0;
var carritospan=document.getElementById("carito");
var contenedorcarrito=document.getElementById("carrocompras");
function agregaralCarrito(imagenSrc){
    carrito++;
    carritospan.innerHTML=carrito;

    var articulo=document.createElement("div");
    var imagen=document.createElement("img");
    imagen.src="RUTADELAIMAGEN";

    var boton=document.createElement("button");
    //boton.onclick="eliminar()";
    boton.addEventListener("click",function(){
        eliminar();
    })
    boton.innerHTML="Eliminar";

    articulo.appendChild(imagen);
    articulo.appendChild(boton);

    //inyecta articulo
    contenedorcarrito.appendChild(articulo);

}

function eliminar(){
    carrito--;
    carritospan.innerHTML=carrito;

    
}