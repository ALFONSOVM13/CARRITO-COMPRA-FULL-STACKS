let productos = [
	{
	  id: "abc123",
	  nombre: "PC GAMER",
	  descripcion: "AMD RYZEN 7, 16 GB RAM......",
	  precio: 3500000,
	  foto: "D_NQ_NP_979462-MCO49560494417_042022-O.jpg"
	},
	{
	  id: "xxx123",
	  nombre: "IMPRESORA",
	  descripcion: "IMPRESORA LASER...",
	  precio: 500000,
	  foto: "D_NQ_NP_991312-MLA48318940064_112021-O.jpg"
	},
	{
	  id: "MNX899",
	  nombre: "MOUSE",
	  descripcion: "MOUSE GAMER",
	  precio: 150000,
	  foto: "3-Tasten-Maus_Microsoft.jpg"
	}
  ];
let jsonProductos = JSON.stringify(productos);
localStorage.setItem('productos', jsonProductos);
let productosGuardados = localStorage.getItem('productos');
//const productosNuevos = JSON.parse(localStorage.getItem('productosNuevos'));





  

  

