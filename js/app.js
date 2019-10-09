function pretvorba_stopinj() {

var stopinje = Number(document.getElementById("stopinje").value) ;
  document.getElementById("rezultat").innerHTML = `Rezultat: ${1.8 * stopinje + 32} ‎°F`;
}

function zapravi(){
  var kolicina = Number(prompt("Vnesi količino"));
  kovcek.zapravi(kolicina);
  alert(kovcek.denar);
}

function shrani(){
  var kolicina = Number(prompt("Vnesi količino"));
  kovcek.shrani(kolicina);
  alert(kovcek.denar);

}
function dodajHtml(){
  var div = document.getElementById("dodaj-html");
  div.innerHTML = div.innerHTML + `<p>Jaz sem nov paragraf</p>`
}

async function flixbus(){
  var odhodi = document.getElementById("flixbus-odhodi")
var trenutniDatum = new Date()
//console.log(trenutniDatum.toISOString())
//console.log(trenutniDatum.getFullYear())
//console.log(trenutniDatum.getDay())
//console.log(trenutniDatum.getMonth())
var stevilkaDan = trenutniDatum.getDay()
if (stevilkaDan < 10){
  stevilkaDan = "0" + stevilkaDan
}
console.log(stevilkaDan)

var// response = await fetch(`https://whereismy.flixbus.com/api/v1/rides/sl/2235/2019-10-${stevilkaDan}T13:30:10Z/2019-10-09T18:30:10Z`);
  response = await fetch("https://whereismy.flixbus.com/api/v1/rides/sl/2235/2019-10-09T13:30:10Z/2019-10-09T18:30:10Z");
var json = await response.json();
var deps = json.timetable.departures;
//console.log((json.timetable.departures));
//odhodi.innerHTML = myJson
for(var i=0; i<deps.length; i++){
  var dep = deps[i];

  if (dep.station_ride_message == undefined){
    dep.station_ride_message = "";
  }

  odhodi.innerHTML = odhodi.innerHTML + `
  <tr>
    <td>${dep.through_the_stations}</td>
    <td>${dep.line_code}</td>
      <td>${dep.station_ride_message}</td>
  </tr>
  `;
 console.log(dep.through_the_stations, dep.line_code, dep.station_ride_message);
}
}

async function poisciVice(){
  var tablaVicov = document.getElementById("vici");
  var query  = document.getElementById("searchWord").value;
  var response  = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    var json = await response.json();
    var vici = json.result;
    console.log(json);
    for(var i=0; i<vici.length; i++){
      var vic = vici[i];
      tablaVicov.innerHTML = tablaVicov.innerHTML + `
      <tr>
        <td>
  <img src="${vic.icon_url}" alt="">
        </td>
        <td><p>${vic.value}</p></td>
      </tr>
      `;
      }
}

async function randomVic(){
  var tablaVicov = document.getElementById("vic");
  var response  = await fetch(`https://api.chucknorris.io/jokes/random`);

    var json = await response.json();
    var vic = json.value;

      tablaVicov.innerHTML = vic;
      }
