const menubtn = document.getElementById('button-menu-sta')
const menudesplegable = document.getElementById('menu-desplegable-sta')

menubtn.addEventListener('click',function(){if (menudesplegable.classList.contains("menu-desplegado")){menudesplegable.classList.remove("menu-desplegado")}else{menudesplegable.classList.add("menu-desplegado")}})


importarCampeonato()
importarCopa()

importarCampeonatoEquipos()
function importarCampeonatoEquipos() {
  fetch('https://script.google.com/macros/s/AKfycbyWVmddF2MV6z4shFVxYaoPVl-Gaj0MdWk2wu5PBqJNlayJ91NTawYWlLapz2q1GvRHeA/exec', { cache: 'no-store' },{"method":"GET"})
    .then((response) => response.json())
    .then((json) => mostrarCampeonatoEquipo(json))
    .then()
}

function importarCopa() {
      fetch('https://script.google.com/macros/s/AKfycbxuxrVK9N9gBxgiojro01DpaGrb8YUp4Sy5d5lRCuxY5j6vwMR9kc03Wo1J7GzvMRXSUg/exec', { cache: 'no-store' },{"method":"GET"})
        .then((response) => response.json())
        .then((json) => mostrarCopa(json))
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

function mostrarCopa(pilotosC) {
  pilotosC.sort((a, b) => a.POS - b.POS)
  pilotosC.forEach((pilotoc) => {
    mostrarPilotosCopa(pilotoc);});
}

function mostrarCampeonatoEquipo(equipos) {//
  equipos.sort((a, b) => a.POS - b.POS)
  equipos.forEach((equipo) => {
    mostrarEquipos(equipo);});
}
function verposicion(piloto){

  let pilotoposicion = piloto.querySelector('.posPilotoTabla')

  let pilotoapintar = pilotoposicion.closest('.tablaPiloto')
  let posicionvalor = pilotoposicion.textContent

  if (posicionvalor <= 5) {
    pilotoapintar.classList.add("copadeoroclasificando")
}
}


const tablaCampeonato = document.createElement("section")
  tablaCampeonato.className = "tablaPosiciones"
function mostrarPilotos(piloto) {
  const campeonatomain = document.getElementById("campeonato-main");
  const mensajeCopadeOro = document.createElement("p")
  mensajeCopadeOro.innerText = ("*Los pilotos en dorado se encuentran clasificando a la Copa de Oro")
  const tarjetaPiloto = document.createElement("div");
  
  tarjetaPiloto.className += "tablaPiloto queryPilotos";
  tarjetaPiloto.innerHTML = `<p class="posPilotoTabla">${piloto.POS}</p>
                            <article class="imgPilotoTabla"><img src="./assets/autos2025/${piloto.AUTO}.png" alt="${piloto.PILOTO}"></article>
                            <p class="nombrePilotoTabla">${piloto.PILOTO}</p>
                            <article class="imgPilotoTabla"><img src="./assets/equipos2025/${piloto.EQUIPO}.png" alt="${piloto.PILOTO}"></article>
                            <p class="ptsPilotoTabla">${piloto.PUNTOS} PTS</p>
                            `
  tablaCampeonato.appendChild(tarjetaPiloto);
  campeonatomain.innerHTML = ''
  campeonatomain.appendChild(tablaCampeonato)
  campeonatomain.appendChild(mensajeCopadeOro)
}

const tablaCopa = document.createElement("section")
  tablaCopa.className = "tablaPosiciones"
function mostrarPilotosCopa(piloto) {
  const copamain = document.getElementById("copa-main");
  const mensajeCopadeOro = document.createElement("p")
  mensajeCopadeOro.innerText = ("*Los pilotos en dorado se encuentran clasificando a la Copa de Oro")
  const tarjetaPiloto = document.createElement("div");
  
  tarjetaPiloto.className += "tablaPiloto queryPilotos";
  tarjetaPiloto.innerHTML = `<p class="posPilotoTabla">${piloto.POS}</p>
                            <article class="imgPilotoTabla"><img src="./assets/autos2025/${piloto.AUTO}.png" alt="${piloto.PILOTO}"></article>
                            <p class="nombrePilotoTabla">${piloto.PILOTO}</p>
                            <article class="imgPilotoTabla"><img src="./assets/equipos2025/${piloto.EQUIPO}.png" alt="${piloto.PILOTO}"></article>
                            <p class="ptsPilotoTabla">${piloto.PUNTOS} PTS</p>
                            `
  tablaCopa.appendChild(tarjetaPiloto);
  copamain.innerHTML = ''
  copamain.appendChild(tablaCopa)
}




const tablaCampeonatoEquipos = document.createElement("section")
  tablaCampeonatoEquipos.className = "tablaPosiciones"
function mostrarEquipos(equipo) {
  const campeonatoequiposmain = document.getElementById("campeonato-equipos-main");
  
  const tarjetaPiloto = document.createElement("div");
  
  tarjetaPiloto.className += "tablaPiloto";
  tarjetaPiloto.innerHTML = `<p class="posPilotoTabla">${equipo.POS}</p>
                            <article class="imgPilotoTabla"><img src="./assets/equipos2025/${equipo.AUTO}.png" alt="${equipo.PILOTO}"></article>
                            <p class="nombrePilotoTabla">${equipo.PILOTO}</p>
                            <article class="imgPilotoTabla"><img src="./assets/equipos2025/${equipo.EQUIPO}.png" alt="${equipo.PILOTO}"></article>
                            <p class="ptsPilotoTabla">${equipo.PUNTOS} PTS</p>
                            `
  tablaCampeonatoEquipos.appendChild(tarjetaPiloto);
  campeonatoequiposmain.innerHTML = ''

  campeonatoequiposmain.appendChild(tablaCampeonatoEquipos)
}

