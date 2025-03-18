// Nombre: Pablo Navia 
// Curso: 1DAM 
// Fecha: 04/03/2025 
// Ejercicio: Extra 

const boton = document.querySelector(".cambiar-tema");
const body = document.body;

//Comprueba si hay un modo guardado en localStorage
if (localStorage.getItem("tema") === "oscuro") {
    body.classList.add("modo-oscuro");
    boton.textContent = "☀️ Modo Claro";
}

//Evento para cambiar el modo
boton.addEventListener("click", () => {
    body.classList.toggle("modo-oscuro");
    //Guarda la preferencia en localStorage
    if (body.classList.contains("modo-oscuro")) {
        localStorage.setItem("tema", "oscuro");
        boton.textContent = "☀️ Modo Claro";
    } else {
        localStorage.setItem("tema", "claro");
        boton.textContent = "🌙 Modo Oscuro";
    }
});