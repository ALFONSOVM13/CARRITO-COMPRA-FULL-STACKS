// Función para agregar y mostrar los productos en la tabla
function actualizarTabla() {
  // Obtener los datos del localStorage
  const productos = JSON.parse(localStorage.getItem("productosNuevos"));

  // Seleccionar el elemento tbody de la tabla
  const tbody = document.querySelector("#tabla-productos tbody");

  // Limpiar la tabla antes de agregar los nuevos productos
  tbody.innerHTML = "";

  // Iterar sobre los productos y agregarlos a la tabla
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    // Crear una nueva fila en la tabla
    const tr = document.createElement("tr");

    // Agregar las celdas a la fila con la información del producto
    tr.innerHTML = `
      <td>${producto.id}</td>
      <td>${producto.nombre}</td>
      <td>${producto.descripcion}</td>
      <td>${producto.precio}</td>
    `;

    // Agregar la fila a la tabla
    tbody.appendChild(tr);
  }

  // Agregar evento click a los botones eliminar
  const botonesEliminar = document.querySelectorAll(".btn-eliminar");
  botonesEliminar.forEach((botonEliminar) => {
    botonEliminar.addEventListener("click", () => {
      const id = parseInt(botonEliminar.getAttribute("data-id"));
      let productos = JSON.parse(localStorage.getItem("productosNuevos"));

      // Buscar el producto con el ID y eliminarlo del arreglo
      productos = productos.filter((producto) => producto.id !== id);

      // Actualizar el localstorage con el arreglo actualizado
      localStorage.setItem("productosNuevos", JSON.stringify(productos));

      // Llamar a la función para actualizar la tabla
      actualizarTabla();
    });
  });
}

// Evento submit del formulario para agregar un nuevo producto
const formulario = document.getElementById("formulario-producto");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita que se recargue la página al enviar el formulario

  const id = document.getElementById("id").value;
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  const precio = document.getElementById("precio").value;
  const foto = document.getElementById("foto").value;

  const producto = {
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    foto: foto,
  };

  let productos = JSON.parse(localStorage.getItem("productosNuevos")) || []; // Obtiene el arreglo de productos del almacenamiento local, o crea uno nuevo si no existe

  productos.push(producto); // Agrega el nuevo producto al arreglo

  localStorage.setItem("productosNuevos", JSON.stringify(productos)); // Guarda el arreglo actualizado en el almacenamiento local

  document.getElementById("mensaje").innerHTML = "Producto agregado correctamente";

  formulario.reset(); // Reinicia el formulario para que se puedan agregar más productos

  // Llamar a la función para actualizar la tabla
  actualizarTabla();
});

// Evento click del botón para eliminar todo el localStorage
const botonEliminarTodo = document.getElementById("boton-eliminar-todo");
bot










                





