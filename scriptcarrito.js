var carrito=0;
var contart=0;

var carritospan=document.getElementById("carrito");

//aqui se inyectara el contenido
var contenedorcarrito=document.getElementById("carrocompras");
function agregaralCarrito(imagenSrc, artnombre){
    carrito++;
    carritospan.innerHTML="Articulos: "+carrito;
//crear elementos para inyectar
    var articulo=document.createElement("div");
    articulo.classList.add("articuloCarrito");
    articulo.setAttribute("id","idArt"+contart++)

    var imagen=document.createElement("img");
    imagen.src= imagenSrc;

    var nombre = document.createElement("p")
    nombre.innerHTML = artnombre;

    var boton=document.createElement("button");
    //boton.onclick="eliminar()";
    boton.addEventListener("click",function(){
        eliminar(this.parentElement.id);
    })
    boton.innerHTML="Eliminar";

    articulo.appendChild(imagen);
    articulo.appendChild(nombre);
    articulo.appendChild(boton);

    //inyecta articulo
    carrocompras.appendChild(articulo);

}

function eliminar(id){
    if(carrito>0)
    carrito--;
    carritospan.innerHTML=carrito;
    var articuloeliminado = document.getElementById(id)
    articuloeliminado.remove();
}