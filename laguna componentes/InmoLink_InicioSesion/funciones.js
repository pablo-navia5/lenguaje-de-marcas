var cambioOjo = 1;
var tipos = ["ojo.png", "ojo2.png"];

function cambiar() {
    var x = document.getElementById("contra");
    if (x.type === "password") {
        x.type = "text";
    } else{
        x.type = "password"
    }
}

function ojo() {
    document.getElementById("tipoojo").src = tipos[cambioOjo];
    cambioOjo = (cambioOjo + 1) % tipos.length;
}