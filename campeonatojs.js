const menubtn = document.getElementById('button-menu-sta')
const menudesplegable = document.getElementById('menu-desplegable-sta')

menubtn.addEventListener('click',function(){if (menudesplegable.classList.contains("menu-desplegado")){menudesplegable.classList.remove("menu-desplegado")}else{menudesplegable.classList.add("menu-desplegado")}})


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
  pintarcopadeoro()
}
function verposicion(piloto){

  let pilotoposicion = piloto.querySelector('.posPilotoTabla')

  let pilotoapintar = pilotoposicion.closest('.tablaPiloto')
  let posicionvalor = pilotoposicion.textContent

  if (posicionvalor <= 8) {
    pilotoapintar.classList.add("copadeoroclasificando")
}
}
function pintarcopadeoro(){
    let pilotosyalistados = document.querySelectorAll(".tablaPiloto")
    pilotosyalistados.forEach((piloto) => 
      verposicion(piloto))
}

const tablaCampeonato = document.createElement("section")
  tablaCampeonato.className = "tablaPosiciones"
function mostrarPilotos(piloto) {
  const campeonatomain = document.getElementById("campeonato-main");
  
  const tarjetaPiloto = document.createElement("div");
  
  tarjetaPiloto.className += "tablaPiloto";
  tarjetaPiloto.innerHTML = `<p class="posPilotoTabla">${piloto.POS}</p>
                            <article class="imgPilotoTabla"><img src="./assets/autos2025/${piloto.AUTO}.png" alt="${piloto.PILOTO}"></article>
                            <p class="nombrePilotoTabla">${piloto.PILOTO}</p>
                            <article class="imgPilotoTabla"><img src="./assets/equipos2025/${piloto.EQUIPO}.png" alt="${piloto.PILOTO}"></article>
                            <p class="ptsPilotoTabla">${piloto.PUNTOS} PTS</p>
                            `
  tablaCampeonato.appendChild(tarjetaPiloto);
  campeonatomain.innerHTML = ''
  campeonatomain.appendChild(tablaCampeonato)
}

function mostrarCampeonatoEquipo(equipos) {//
  equipos.sort((a, b) => a.POS - b.POS)
  equipos.forEach((equipo) => {
    mostrarEquipos(equipo);});
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