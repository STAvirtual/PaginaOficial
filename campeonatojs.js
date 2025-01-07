const menubtn = document.getElementById('button-menu-sta')
const menudesplegable = document.getElementById('menu-desplegable-sta')

menubtn.addEventListener('click',function(){if (menudesplegable.classList.contains("menu-desplegado")){menudesplegable.classList.remove("menu-desplegado")}else{menudesplegable.classList.add("menu-desplegado")}})


importarCampeonato()
  
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
  campeonatomain.appendChild(tablaCampeonato)
}