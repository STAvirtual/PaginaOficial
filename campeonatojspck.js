const menubtn = document.getElementById('button-menu-sta')
const menudesplegable = document.getElementById('menu-desplegable-sta')

menubtn.addEventListener('click',function(){if (menudesplegable.classList.contains("menu-desplegado")){menudesplegable.classList.remove("menu-desplegado")}else{menudesplegable.classList.add("menu-desplegado")}})


importarCampeonato()
importarCampeonatoEquipos()

function importarCampeonato() {
      fetch('https://script.google.com/macros/s/AKfycbyJ-AzKN-Opg92WwaJ55DVC5DAx8g-iPhPElu1EiqWnVOD3FAjbljNJhTh0Kwu6QeAF/exec', { cache: 'no-store' },{"method":"GET"})
        .then((response) => response.json())
        .then((json) => mostrarCampeonato(json))
        .then()
}
function importarCampeonatoEquipos() {
  fetch('https://script.google.com/macros/s/AKfycbwIAUdvu4HCmLWEKVPdHymGsJC2FvRxAw6iH27d7piPKxXBwoOJOQivymjnETt7WIiRYg/exec', { cache: 'no-store' },{"method":"GET"})
    .then((response) => response.json())
    .then((json) => mostrarCampeonatoEquipo(json))
    .then()
}
function mostrarCampeonato(pilotos) {//
  pilotos.sort((a, b) => a.POS - b.POS)
  pilotos.forEach((piloto) => {
    mostrarPilotos(piloto);});
}


const tablaCampeonato = document.createElement("section")
  tablaCampeonato.className = "tablaPosiciones"


function mostrarPilotos(piloto) {
  const campeonatomain = document.getElementById("campeonato-main");
  
  const tarjetaPiloto = document.createElement("div");
  
  tarjetaPiloto.className += "tablaPiloto";
  tarjetaPiloto.innerHTML = `<p class="posPilotoTabla colorpckp">${piloto.POS}</p>
                            <article class="imgPilotoTabla"><img src="./assets/gt2025/${piloto.AUTO}.png" alt="${piloto.PILOTO}"></article>
                            <p class="nombrePilotoTabla">${piloto.PILOTO}</p>
                            <article class="imgPilotoTabla"><img src="./assets/gt2025/${piloto.EQUIPO}.png" alt="${piloto.PILOTO}"></article>
                            <p class="ptsPilotoTabla colorpckp">${piloto.PUNTOS} PTS</p>
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
  tarjetaPiloto.innerHTML = `<p class="posPilotoTabla colorpckp">${equipo.POS}</p>
                            <article class="imgPilotoTabla"><img src="./assets/gt2025/${equipo.AUTO}.png" alt="${equipo.PILOTO}"></article>
                            <p class="nombrePilotoTabla">${equipo.PILOTO}</p>
                            <article class="imgPilotoTabla"><img src="./assets/gt2025/${equipo.EQUIPO}.png" alt="${equipo.PILOTO}"></article>
                            <p class="ptsPilotoTabla colorpckp">${equipo.PUNTOS} PTS</p>
                            `
  tablaCampeonatoEquipos.appendChild(tarjetaPiloto);
  campeonatoequiposmain.innerHTML = ''
  campeonatoequiposmain.appendChild(tablaCampeonatoEquipos)
}