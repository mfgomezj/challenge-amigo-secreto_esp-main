// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
	const input = document.getElementById('amigo');
	const nombre = input.value.trim();
	if (!nombre) {
		mostrarResultado(['El nombre no puede estar vacío.']);
		return;
	}
	if (amigos.includes(nombre)) {
		mostrarResultado(['Este nombre ya está en la lista.']);
		return;
	}
	amigos.push(nombre);
	input.value = '';
	mostrarListaAmigos();
	mostrarResultado([]); // Limpiar mensajes
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
	const lista = document.getElementById('listaAmigos');
	lista.innerHTML = '';
	amigos.forEach(amigo => {
		const li = document.createElement('li');
		li.textContent = amigo;
		lista.appendChild(li);
	});
}

// Función para sortear el amigo secreto
function sortearAmigo() {
	if (amigos.length === 0) {
		mostrarResultado(['Agrega al menos un amigo para sortear.']);
		return;
	}
	const indice = Math.floor(Math.random() * amigos.length);
	const seleccionado = amigos[indice];
	mostrarResultado([`El amigo sorteado es: ${seleccionado}`]);
}

// Función para mostrar el resultado en el HTML
function mostrarResultado(listaResultados) {
	const resultado = document.getElementById('resultado');
	resultado.innerHTML = '';
	listaResultados.forEach(item => {
		const li = document.createElement('li');
		li.textContent = item;
		resultado.appendChild(li);
	});
}
