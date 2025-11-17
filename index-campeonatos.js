importarCampeonatoSta()
importarCampeonatoGT()

function importarCampeonatoGT() {
  fetch('https://script.google.com/macros/s/AKfycbyJ-AzKN-Opg92WwaJ55DVC5DAx8g-iPhPElu1EiqWnVOD3FAjbljNJhTh0Kwu6QeAF/exec', { cache: 'no-store' },{"method":"GET"})
    .then((response) => response.json())
    .then((json) => mostrarCampeonatoGT(json))
    .then()
}

function importarCampeonatoSta() {
      fetch('https://script.google.com/macros/s/AKfycbyXTuiZSR5W0zg8zv-wjONCheMXfX9ymCyAAuPty8NA6FWVxAjHddeAgBdTetu_49PN/exec', { cache: 'no-store' },{"method":"GET"})
        .then((response) => response.json())
        .then((json) => mostrarCampeonatoSta(json))
        .then()
}

function mostrarCampeonatoSta(pilotos) {
  pilotos.sort((a, b) => a.POS - b.POS)
  pilotos.forEach((piloto) => {
    if(piloto.POS <= 5)
    mostrarPilotos(piloto);});
}

function mostrarCampeonatoGT(equipos) {//
  equipos.sort((a, b) => a.POS - b.POS)
  equipos.forEach((equipo) => {
    if(equipo.POS <= 5)
    mostrarEquipos(equipo);});
}



const tablaCampeonato = document.createElement("tbody")
  tablaCampeonato.className = "table-group-divider"
function mostrarPilotos(piloto) {
  const campeonatomain = document.getElementById("campeonato-sta");
  const tarjetaPiloto = document.createElement("tr");
  const headertabla = document.createElement("thead");
  const vermas = document.createElement("thead");
  const headertabla2 = document.createElement("thead");
  headertabla2.innerHTML = ` <tr>
            <th scope="col"></th>
            <th scope="col">CAMPEONATO STA</th>
            <th scope="col"></th>
            <th scope="col">2025</th>
          </tr>
                            `
  headertabla.innerHTML = ` <tr>
            <th scope="col">#</th>
            <th scope="col">Piloto</th>
            <th scope="col">Auto</th>
            <th scope="col">Puntos</th>
          </tr>
                            `
  vermas.innerHTML = `<th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"><a href="./sta-campeonato.html" class="btn btn-secondary">ver mas</a></th>
                            `  
  tarjetaPiloto.className += "tablaPiloto queryPilotos";
  tarjetaPiloto.innerHTML = `<th class="posPilotoTabla">${piloto.POS}</th>
                            <td class="nombrePilotoTabla">${piloto.PILOTO}</td>
                            <td ><img src="./assets/autos2025/${piloto.AUTO}.png" alt="${piloto.PILOTO}" style="max-height: 100%; height: 30px;"></td>
                            <th class="ptsPilotoTabla">${piloto.PUNTOS} PTS</th>
                            `
  tablaCampeonato.appendChild(tarjetaPiloto);
  campeonatomain.innerHTML = ''
  campeonatomain.appendChild(headertabla2)
  campeonatomain.appendChild(headertabla)
  campeonatomain.appendChild(tablaCampeonato)
  campeonatomain.appendChild(vermas)
}





const tablaCampeonatoEquipos = document.createElement("tbody")
  tablaCampeonatoEquipos.className = "table-group-divider"
function mostrarEquipos(equipo) {
    const campeonatoequiposmain = document.getElementById("campeonato-gt");
    const tarjetaPiloto = document.createElement("tr");
    const headertabla = document.createElement("thead");
    const vermas = document.createElement("thead");
    const headertabla2 = document.createElement("thead");
  headertabla2.innerHTML = ` <tr>
            <th scope="col"></th>
            <th scope="col">CAMPEONATO GT2000</th>
            <th scope="col"></th>
            <th scope="col">2025</th>
          </tr>
                            `
  headertabla.innerHTML = ` <tr>
            <th scope="col">#</th>
            <th scope="col">Piloto</th>
            <th scope="col">Auto</th>
            <th scope="col">Puntos</th>
          </tr>
                            `
  vermas.innerHTML = `<th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"><a href="./gt2000-campeonato.html" class="btn btn-secondary">ver mas</a></th>
                            `                          
  tarjetaPiloto.className += "tablaPiloto";
  tarjetaPiloto.innerHTML = `<th class="posPilotoTabla">${equipo.POS}</th>
                            <td class="nombrePilotoTabla">${equipo.PILOTO}</td>
                            <td class="imgPilotoTabla"><img src="./assets/gt2025/${equipo.AUTO}.png" alt="${equipo.PILOTO}" style="max-height: 100%; height: 30px;"></td>
                            <th class="ptsPilotoTabla">${equipo.PUNTOS} PTS</th>
                            `
  tablaCampeonatoEquipos.appendChild(tarjetaPiloto);
  campeonatoequiposmain.innerHTML = ''
  campeonatoequiposmain.appendChild(headertabla2)
  campeonatoequiposmain.appendChild(headertabla)
  campeonatoequiposmain.appendChild(tablaCampeonatoEquipos)
  campeonatoequiposmain.appendChild(vermas)

}

