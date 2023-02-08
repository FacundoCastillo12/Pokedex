let pokemonListaId = 0;
let numeroDePagina = 1;
añadirTarjetasPokemon();

document.querySelector('#anterior').onclick = function () {
	if (numeroDePagina > 1) {
		pokemonListaId -= 40;
		numeroDePagina--;
		actualizarNumeroPagina();
		añadirTarjetasPokemon();
	}
};

document.querySelector('#siguiente').onclick = function () {
	if (numeroDePagina >= 1) {
		numeroDePagina++;
		actualizarNumeroPagina();
		añadirTarjetasPokemon();
	}
};
function actualizarNumeroPagina() {
	const $pagina = document.querySelector('#pagina');
	$pagina.textContent = numeroDePagina;
}
function añadirTarjetasPokemon() {
	for (let i = 1; i <= 4; i++)
		for (let j = 1; j <= 5; j++) {
			pokemonListaId++;
			crearTarjetasPokemon(pokemonListaId, i, j);
		}
}
function crearTarjetasPokemon(pokemonId, ordenFila, ordenTarjeta) {
	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
		.then((respuesta) => respuesta.json())
		.then((respuestaJSON) => {
			let tarjeta = document.querySelector(
				`.fila-${ordenFila} .tarjeta-${ordenTarjeta}`
			);
			let elementos = `
        <div class="card-group tarjeta-completa">
            <div class="card contenedor-tarjeta">
                <div class="card contenedor-imagen">
                    <h5 class="card-title nombre-pokemon">${respuestaJSON.name}</h5>
                    <img src="${respuestaJSON.sprites.other.home.front_default}" class="card-img-top">
                </div>
            <div class="tarjeta-informacion">
                <p class="card-text id">ID:<strong>${respuestaJSON.id}</strong></p>
                <p class="card-text exp">Exp base: <strong>${respuestaJSON.base_experience}</strong></p>
                <p class="card-text altura">Altura:<strong>${respuestaJSON.height}</strong></p>
                <p class="card-text peso">Peso:<strong>${respuestaJSON.weight}</strong></p>
                <p class="card-text tipo">Tipo:<strong>${respuestaJSON.types[0].type.name}</strong></p>
            </div>
            </div>
        </div> 
    `;
			tarjeta.innerHTML = elementos;
		})
		.catch((error) => console.error('FALLÓ', error));
}
