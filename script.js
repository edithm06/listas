// Obtener referencias a elementos HTML
var formulario = document.getElementById("formulario");
var listaProductos = document.getElementById("listaProductos");
var totalElement = document.getElementById("total");

// Crear una lista vacía para almacenar los productos
var productos = [];

// Función para agregar un producto a la lista
function agregarProducto(event) {
  event.preventDefault();

  let nombreInput = document.getElementById("nombre");
  let precioInput = document.getElementById("precio");

  let nombre = nombreInput.value;
  let precio = parseFloat(precioInput.value);

  // Agregar el producto a la lista
  productos.push({ nombre: nombre, precio: precio });

  // Limpiar los campos de entrada
  nombreInput.value = "";
  precioInput.value = "";

  // Actualizar la lista de productos, el total y mostrar la lista
  actualizarLista();
  calcularTotal();
  mostrarLista();
}

// Función para actualizar la lista de productos en el HTML
function actualizarLista() {
  // Limpiar la lista actual
  listaProductos.innerHTML = "";

  // Agregar los productos a la lista
  for (var i = 0; i < productos.length; i++) {
    let producto = productos[i];
    let li = document.createElement("li");
    li.textContent = producto.nombre + " - $" + producto.precio.toFixed(2);
    listaProductos.appendChild(li);
  }
}

// Función para calcular el total de precios
function calcularTotal() {
  let sumaTotal = 0;

  for (var i = 0; i < productos.length; i++) {
    sumaTotal += productos[i].precio;
  }

  // Actualizar el total en el HTML
  totalElement.textContent = "Total: $" + sumaTotal.toFixed(2);
}

// Función para mostrar la lista de productos
function mostrarLista() {
  listaProductos.style.display = "block";
}

// Agregar un evento de envío al formulario
formulario.addEventListener("submit", agregarProducto);