importarCampeonato()

function importarCampeonato() {
      fetch('https://script.google.com/macros/s/AKfycbxuxrVK9N9gBxgiojro01DpaGrb8YUp4Sy5d5lRCuxY5j6vwMR9kc03Wo1J7GzvMRXSUg/exec', { cache: 'no-store' },{"method":"GET"})
        .then((response) => response.json())
        .then((json) => mostrarCampeonato(json))
        .then()
}

function mostrarCampeonato(pilotos) {
  pilotos.sort((a, b) => a.POS - b.POS)
  pilotos.forEach((piloto) => {
    mostrarPilotos(piloto);});
// pintarcopadeoro()
}

function verposicion(piloto){

  let pilotoposicion = piloto.querySelector('.posPilotoTabla')

  let pilotoapintar = pilotoposicion.closest('.tablaPiloto')
  let posicionvalor = pilotoposicion.textContent

  if (posicionvalor <= 5) {
    pilotoapintar.classList.add("copadeoroclasificando")
}
}


const tablaCampeonato = document.createElement("tbody")
  tablaCampeonato.className = "table-group-divider"
function mostrarPilotos(piloto) {
  const campeonatomain = document.getElementById("campeonato-main");
  const tarjetaPiloto = document.createElement("tr");
  const headertabla = document.createElement("thead");
  
  headertabla.innerHTML = ` <th scope="col">#</th>
                            <th scope="col">Auto</th>
                            <th scope="col">Piloto</th>
                            <th scope="col">Equipo</th>
                            <th scope="col">Puntos</th>
                            `
  tarjetaPiloto.className += "tablaPiloto queryPilotos";
  tarjetaPiloto.innerHTML = `<th class="posPilotoTabla">${piloto.POS}</th>
                            <td ><img src="./assets/camionetas2025/${piloto.AUTO}.png" alt="${piloto.PILOTO}" style="max-height: 100%; height: 30px;"></td>
                            <td class="nombrePilotoTabla">${piloto.PILOTO}</td>
                            <td ><img src="./assets/equipos2025/${piloto.EQUIPO}.png" alt="${piloto.PILOTO}" style="max-height: 100%; height: 30px;"></td>
                            <th class="ptsPilotoTabla">${piloto.PUNTOS} PTS</th>
                            `
  tablaCampeonato.appendChild(tarjetaPiloto);
  campeonatomain.innerHTML = ''
  campeonatomain.appendChild(headertabla)
  campeonatomain.appendChild(tablaCampeonato)
}