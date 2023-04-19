let contenido =  document.getElementById("contenido");
let carrito   =  JSON.parse(localStorage.getItem("carrito")) || [];

var productosNuevos = JSON.parse(localStorage.getItem("productosNuevos"))

let imprimir = () => {
	contenido.innerHTML = carrito.map( x => {
		let buscar  =  productosNuevos.find(a  => a.id === x.id);
		
		let subtotal = new Intl.NumberFormat("eu-ES").format(x.cantidad* x.precio);
		// let cantItem  = buscar === undefined ? 0 : buscar.cantidad;
		return `
		<div class="card mt-3" style="width: 18rem;margin-right:10px">
		  <img src="${x.foto}" class="card-img-top" alt="...">
		  <div class="card-body">
		    <h5 class="card-title">${x.nombre}</h5>
		    <h6 class="card-title">Precio unitario:$${x.precio}</h6>
		    <h6 class="card-title">Subtotal: $${subtotal}</h6>
		    <p class="card-text">${x.descripcion}</p>
		    <div style="display:flex">
		    		<i onclick="disminuir(${x.id})" class="bi bi-dash-lg"></i>
		    				<div id="${x.id}"> ${x.cantidad} </div>
		    		<i onclick="aumentar(${x.id})" class="bi bi-plus-lg"></i>
		    </div>
		  </div>
		</div>
	`;
	}).join("");
}
imprimir();

let aumentar = (id) => { 
	console.log(id);
	let item = (id.id === undefined ? id:id.id).toString();
	let buscar = carrito.find(x => x.id === item);
	console.log(buscar);
	if(buscar=== undefined ){
		let pro = {
			id: item.id,
			cantidad: 1
		}
		carrito.push(pro);		
	}else{
		buscar.cantidad+=1;
	}
	localStorage.setItem("carrito", JSON.stringify(carrito));
	imprimir();
	totalPagarCompra();
}

let disminuir = (id) => {
	let item = (id.id === undefined ? id:id.id).toString();
	let buscar = carrito.find(x => x.id === item);
	console.log(carrito)
	if(buscar=== undefined ) 
		return true;
	else if (buscar.cantidad > 0) 
		buscar.cantidad-=1;

	carrito = carrito.filter( x => x.cantidad !== 0);
	localStorage.setItem("carrito", JSON.stringify(carrito));
	imprimir();
	totalPagarCompra();
}

let totalPagarCompra = () => {
	let totalPagar = document.getElementById("totalPagar");
	let TC = carrito.map( x => {
		let buscar =  productosNuevos.find(w => w.id === x.id);
		return (x.cantidad * buscar.precio);
	}).reduce((r, z) => r + z, 0);
	TC = new Intl.NumberFormat("eu-ES").format(TC);
	totalPagar.innerHTML = TC;
}
totalPagarCompra();





function reset() {
	// Código para finalizar la compra
	// ...
  
	// Limpiar almacenamiento local
	localStorage.clear();
  
	// Recargar la página
	location.reload(true);
  
	// Mostrar alerta de compra realizada
	alert("¡Compra realizada exitosamente!");
  
	// Redireccionar a la página de inicio
	window.location.href = "index.html";
}

  
  
