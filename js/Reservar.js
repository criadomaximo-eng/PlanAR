const botonReservar = document.getElementById("botonReservar");
const mensaje = document.getElementById("mensaje");

botonReservar.addEventListener("click", () => {
    mensaje.textContent = "Reserva realizada correctamente";
});

const categorias = ["Conciertos", "Ferias", "Deportes"];

const botonCategorias = document.getElementById("botonCategorias");
const listaCategorias = document.getElementById("listaCategorias");

botonCategorias.addEventListener("click", () => {
    listaCategorias.innerHTML = "";

    categorias.forEach(categoria => {
        const li = document.createElement("li");
        li.textContent = categoria;
        listaCategorias.appendChild(li);
    });
});