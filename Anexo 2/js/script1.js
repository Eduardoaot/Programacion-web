document.getElementById("menu")
.addEventListener("change", function() {
var seleccion = this.value;
var texto = "";

switch (seleccion) {
    case "1":
        texto = "Hoy está agradable y soleado afuera. ¡Usa pantalones cortos! Ve a la playa o al parque y cómprate un helado.";
        break;
    case "2":
        texto = "- Afuera está lloviendo; lleve un impermeable y un paraguas, y no se quede afuera por mucho tiempo.";
        break;
    case "3":
        texto = "La nieve está cayendo, ¡está helada! Lo mejor es quedarse en casa con una taza de chocolate caliente o ir a construir un muñeco de nieve.";
        break;
    case "4":
        texto = "No llueve, pero el cielo está gris y sombrío; podría girar en cualquier momento, así que llévate un impermeable por si acaso.";
        break;
    default:
        texto = "Selecciona un clima.";
}

document.getElementById("txt").innerText = texto;
}
);