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

function cambiar1() {
    var x = document.getElementById("contra1");
    if (x.type === "password") {
        x.type = "text";
    } else{
        x.type = "password"
    }
}

function ojo1() {
    document.getElementById("tipoojo1").src = tipos[cambioOjo];
    cambioOjo = (cambioOjo + 1) % tipos.length;
}