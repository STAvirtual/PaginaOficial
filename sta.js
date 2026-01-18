importarCampeonato()
importarCampeonatoEquipos()

function importarCampeonatoEquipos() {
  fetch('https://script.google.com/macros/s/AKfycbyWVmddF2MV6z4shFVxYaoPVl-Gaj0MdWk2wu5PBqJNlayJ91NTawYWlLapz2q1GvRHeA/exec', { cache: 'no-store' },{"method":"GET"})
    .then((response) => response.json())
    .then((json) => mostrarCampeonatoEquipo(json))
    .then()
}

function importarCampeonato() {
      fetch('https://script.google.com/macros/s/AKfycbyXTuiZSR5W0zg8zv-wjONCheMXfX9ymCyAAuPty8NA6FWVxAjHddeAgBdTetu_49PN/exec', { cache: 'no-store' },{"method":"GET"})
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

function mostrarCampeonatoEquipo(equipos) {//
  equipos.sort((a, b) => a.POS - b.POS)
  equipos.forEach((equipo) => {
    mostrarEquipos(equipo);});
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
                            <td ><img src="./assets/sta2026/${piloto.AUTO}.png" alt="${piloto.PILOTO}" style="max-height: 100%; height: 30px;"></td>
                            <td class="nombrePilotoTabla">${piloto.PILOTO}</td>
                            <td ><img src="./assets/sta2026/${piloto.EQUIPO}.png" alt="${piloto.PILOTO}" style="max-height: 100%; height: 30px;"></td>
                            <th class="ptsPilotoTabla">${piloto.PUNTOS} PTS</th>
                            `
  tablaCampeonato.appendChild(tarjetaPiloto);
  campeonatomain.innerHTML = ''
  campeonatomain.appendChild(headertabla)
  campeonatomain.appendChild(tablaCampeonato)
}





const tablaCampeonatoEquipos = document.createElement("tbody")
  tablaCampeonatoEquipos.className = "table-group-divider"
function mostrarEquipos(equipo) {
    const campeonatoequiposmain = document.getElementById("campeonato-equipos-main");
    const tarjetaPiloto = document.createElement("tr");
    const headertabla = document.createElement("thead");
  headertabla.innerHTML = ` <th scope="col">#</th>
                            <th scope="col">Marcas</th>
                            <th scope="col">Equipo</th>
                            <th scope="col">Logo</th>
                            <th scope="col">Puntos</th>
                            `
  tarjetaPiloto.className += "tablaPiloto";
  tarjetaPiloto.innerHTML = `<th class="posPilotoTabla">${equipo.POS}</th>
                            <td class="imgPilotoTabla"><img src="./assets/sta2026/${equipo.EQUIPO}.png" alt="${equipo.PILOTO}" style="max-height: 100%; height: 30px;"></td>
                            <td class="nombrePilotoTabla">${equipo.PILOTO}</td>
                            <td class="imgPilotoTabla"><img src="./assets/sta2026/${equipo.AUTO}.png" alt="${equipo.PILOTO}" style="max-height: 100%; height: 30px;"></td>
                            <th class="ptsPilotoTabla">${equipo.PUNTOS} PTS</th>
                            `
  tablaCampeonatoEquipos.appendChild(tarjetaPiloto);
  campeonatoequiposmain.innerHTML = ''
  campeonatoequiposmain.appendChild(headertabla)
  campeonatoequiposmain.appendChild(tablaCampeonatoEquipos)

}

