var x=6; //To je spremenljivka tipa številka
 var y = 8;
console.log(x, y, x+y);
console.log(x, y, x-y);

//Definiranje besed
var z = "To je beseda"
var u = 'To je naslednja beseda'

//Zapisovanje v consolo
console.log(z);
console.log(u);
console.log("Vsota ", x, "+",y, " = ",x+y);
console.log(`Vsota ${x} + ${y} = ${x+y}`)

console.log("Živjo!");

//Dostop do črk v besedi
console.log(`Črka na 1 poziciji ${z[0]}`)
console.log(`Dolžina besede ${z.length}`)

//Spisek beseda
var spisek =[1, "test", 4.6, "testing"];
console.log(spisek)
//console.log(console)

//Slovar
var kovcek ={
  0: "To je index 0",
  1: "To je index 1",

  "velikost": [1,2,3,4,5],
  "barva":{"modra": "bela", "tvoja": "modra"},
  "lastnik":"Iztok",
  "to je kljuc":3,
};


console.log(`Tvoja barva: ${kovcek.barva.tvoja}`);
console.log(`2 stevilo v velikosti: ˘${kovcek.velikost[2]}`);



console.log(kovcek.barva)
console.log(kovcek["barva"])
console.log(kovcek["to je kljuc"])
console.log(console)


console.log(`To je for zanka---------`);
var vsota = 0;
for(var i=0; i<5; i = i + 1){
  var stevilo = parseFloat(prompt("Vnesi število: "));

  vsota = vsota + stevilo;
  console.log(stevilo,vsota);
//  console.log(i)
}
console.log(`Tu se for zanka konca---------`);
console.log("Skupna vsota ", vsota);
