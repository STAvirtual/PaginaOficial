const menubtn = document.getElementById('button-menu-sta')
const menudesplegable = document.getElementById('menu-desplegable-sta')

menubtn.addEventListener('click',function(){if (menudesplegable.classList.contains("menu-desplegado")){menudesplegable.classList.remove("menu-desplegado")}else{menudesplegable.classList.add("menu-desplegado")}})


importarCampeonato()
  
function importarCampeonato() {
      fetch('https://script.google.com/macros/s/AKfycbyJ-AzKN-Opg92WwaJ55DVC5DAx8g-iPhPElu1EiqWnVOD3FAjbljNJhTh0Kwu6QeAF/exec', { cache: 'no-store' },{"method":"GET"})
        .then((response) => response.json())
        .then((json) => mostrarCampeonato(json))
        .then()
}
function mostrarCampeonato(pilotos) {//
  pilotos.sort((a, b) => a.POS - b.POS)
  pilotos.forEach((piloto) => {
    mostrarPilotos(piloto);});
  //pintarcopadeoro()
}
//function verposicion(piloto){//
//  console.log(piloto)
//  let pilotoposicion = piloto.querySelector('.posPilotoTabla')
//  console.log(pilotoposicion)
//  let pilotoapintar = pilotoposicion.closest('.tablaPiloto')
//  let posicionvalor = pilotoposicion.textContent
//  console.log(posicionvalor)
//  if (posicionvalor <= 8) {
//    pilotoapintar.classList.add("copadeoroclasificando")
//}
//}
//function pintarcopadeoro(){
//    let pilotosyalistados = document.querySelectorAll(".tablaPiloto")
//    pilotosyalistados.forEach((piloto) => 
//      verposicion(piloto))
//}

const tablaCampeonato = document.createElement("section")
  tablaCampeonato.className = "tablaPosiciones"
function mostrarPilotos(piloto) {
  const campeonatomain = document.getElementById("campeonato-main");
  
  const tarjetaPiloto = document.createElement("div");
  
  tarjetaPiloto.className += "tablaPiloto";
  tarjetaPiloto.innerHTML = `<p class="posPilotoTabla colorpckp">${piloto.POS}</p>
                            <article class="imgPilotoTabla"><img src="./assets/camionetas2025/${piloto.AUTO}.png" alt="${piloto.PILOTO}"></article>
                            <p class="nombrePilotoTabla">${piloto.PILOTO}</p>
                            <article class="imgPilotoTabla"><img src="./assets/equipos2025/${piloto.EQUIPO}.png" alt="${piloto.PILOTO}"></article>
                            <p class="ptsPilotoTabla colorpckp">${piloto.PUNTOS} PTS</p>
                            `
  tablaCampeonato.appendChild(tarjetaPiloto);
  campeonatomain.innerHTML = ''
  campeonatomain.appendChild(tablaCampeonato)
}