let tareas = [];
let filtroEstado = "todas";
let filtroPrioridad = "todas";

const SECUENCIA_ESTADOS = [
    "pendiente",
    "en-progreso",
    "completada"
];

const leerCampo = (id) => document.getElementById(id);
const tablero = leerCampo("tablero");

// Generador de IDs usando un closure
function crearGeneradorId() {
    let contador = 1;

    return () => contador++;
}

const generarId = crearGeneradorId();