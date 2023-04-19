let contenido =  document.getElementById("contenido");
let carrito   =  JSON.parse(localStorage.getItem("carrito")) || [];

if(!localStorage.getItem("productosNuevos")){
	localStorage.setItem("productosNuevos", [JSON.stringify(productos)]);
}

var productosNuevos = JSON.parse(localStorage.getItem("productosNuevos"))

let imprimir = () => {
		
	console.log(productosNuevos)
	contenido.innerHTML = productosNuevos.map(x => {
	  let { id, nombre, descripcion, precio, foto } = x;
	  let buscar = carrito.find(x => x.id === id);
	  let cantItem = buscar === undefined ? 0 : buscar.cantidad;
	  return `
	  <div class="card mt-3" style="width: 18rem;margin-right:10px">
	  <img src="${foto}" class="card-img-top" alt="...">
	  <div class="card-body">
		<h5 class="card-title">${nombre}</h5>
		<h6 class="card-title">${precio}</h6>
		<p class="card-text">${descripcion}</p>
		<div style="display:flex">
		  <i onclick="disminuir(${id})" class="bi bi-dash-lg"></i>
		  <div id="${id}"> ${cantItem} </div>
		  <i onclick="aumentar(${id})" class="bi bi-plus-lg"></i>
		</div>
	  </div>
	</div>
	  `;
	}).join(" ");
  };



imprimir();

let aumentar = (id) => { 
	console.log(id);
	let item = (id.id === undefined ? id:id.id).toString();
	console.log(item)
	let buscar = carrito.find(x => x.id === item);
	if(buscar=== undefined ){
		let buscarP = productosNuevos.find(y => y.id === item)
		console.log(buscarP)
		let market = {
			id: buscarP.id,
			nombre: buscarP.nombre,
			descripcion: buscarP.descripcion,
			precio: buscarP.precio,
			foto: buscarP.foto,
			cantidad: 1
		}
		carrito.push(market);		
	}else{
		buscar.cantidad+=1;
	}
	localStorage.setItem("carrito", JSON.stringify(carrito));
	imprimir();
	actualizar();
}

let disminuir = (id) => {
	let item = id;
	let buscar = carrito.find(x => x.id === item.id);
	console.log(carrito)
	if(buscar=== undefined ) 
		return true;
	else if (buscar.cantidad > 0) 
		buscar.cantidad-=1;

	carrito = carrito.filter( x => x.cantidad !== 0);
	localStorage.setItem("carrito", JSON.stringify(carrito));
	imprimir();
	actualizar();
}

let actualizar = () => {
	let totalItems = document.getElementById("totalItems");
	let total      = carrito.map( x => x.cantidad).reduce((x, y) => x + y, 0);
    totalItems.innerHTML = `[${total}]`;
}
actualizar();

