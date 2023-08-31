const ingresos = [
    new Producto('pan','23','2'),
    new Producto('pescado','45','1')
];
function total(){
    suma=0;
    suma1=0;
    for(let productos of ingresos){
        suma+=productos.precio*productos.cantidad;
        
     }
     console.log(suma);
     return suma;
}
function mostrarArticulos(){
    console.log('1');
    let lista='';
    for (let productos of ingresos){
        console.log(productos);
        lista+=`<li> ${productos.nombre} <span style="float: right;">$${productos.precio}/${productos.cantidad}</span></li>`;
        
    }
    suma=total();
    document.getElementById('total').innerHTML=`Total $${suma}`
    document.getElementById('articulos').innerHTML=lista;
}

function agregarArticulos(){
    const formulario=document.forms['ingresos'];
    const nombre=formulario['nombre'];
    const precio=formulario['precio'];
    const cantidad=formulario['cantidad'];
    if(nombre.value!=0){
        const articulo=new Producto(nombre.value, precio.value, cantidad.value);
    ingresos.push(articulo);
    mostrarArticulos();
    }
    else{
        alert('Introce un articulo');
    }
    formulario.reset();
}