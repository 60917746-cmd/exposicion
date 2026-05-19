$(document).ready(function() {
$("#menu-btn").on("click", function() {
    $("#sidebar").toggleClass("active");
});
});
const buscador = document.getElementById("buscador");

buscador.addEventListener("keyup", () => {

    let filtro = buscador.value.toLowerCase();

    let filas = document.querySelectorAll("table tr");

    filas.forEach(fila => {
        fila.style.display =
        fila.textContent.toLowerCase().includes(filtro)
        ? ""
        : "none";
    });

});
function mostrarTalla(id){

    const secciones = document.querySelectorAll(".talla-section");

    secciones.forEach(seccion => {
        seccion.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}