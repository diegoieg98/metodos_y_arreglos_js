const listado = [
    { id: 1, tarea: "Hacer mercado", estado: false },
    { id: 2, tarea: "Estudiar para la prueba", estado: false },
    { id: 3, tarea: "Sacar a pasear a Tobby", estado: false }
];

// variables

let cajaInput = document.querySelector("#cajaInput");
let boton = document.querySelector("#boton");
let lista = document.querySelector("#lista");
let total = document.querySelector("#total");
let realizadas = document.querySelector("#realizadas");

// agregar contenido con input y boton

boton.addEventListener("click", () => {
    totalSpan = parseInt(total.innerHTML);
    total.innerHTML = totalSpan + 1;
    let tarea = cajaInput.value;
    listado.push({ id: listado.length + 1, tarea: tarea, estado: false });
    cajaInput.value = "";
    renderListado();
});

// funcion eliminar

function eliminar(id) {
    totalSpan = parseInt(total.innerHTML);
    total.innerHTML = totalSpan - 1;
    const index = listado.findIndex((el) => el.id === id);
    listado.splice(index, 1);
    renderListado();
    actualizarContador();
}

// cambio de Boolean

function cambiar(id) {
    const tarea = listado.find((el) => el.id === id);
    if (tarea) {
        tarea.estado = !tarea.estado;
    }
    renderListado();
    actualizarContador();
}

// contador total

function contador() {
    const tareaRealizada = listado.filter((lista) => lista.estado === true);
    return tareaRealizada.length;
}

// actualizacion de contador

function actualizarContador() {
    realizadas.innerHTML = contador();
}

// actualizacion de tareas

function renderListado() {
    let html = "";
    for (let lista of listado) {
        html += `
            <li>
                <p>${lista.id}</p> 
                <p>${lista.tarea}</p>
                <input type="checkbox" id="check${lista.id}" onchange="cambiar(${lista.id})" ${lista.estado ? 'checked' : ''}>
                <button onclick="eliminar(${lista.id})">Eliminar</button>
            </li>
        `;
    }

    lista.innerHTML = html;
}

renderListado();
actualizarContador();