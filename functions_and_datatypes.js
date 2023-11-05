//conditional expressions
if ( s.length > 10 ) {
    s=s.substring(0, 10);
} else {
    s=s.trim();
}

switch ( Math.floor(Math.random()*3) ) {
    case 1: col = "red";
    break;
    case 2: col = "blue";
    break;
    default: col = "green";
}

//LOOPS
let sum = 0;
let arr = [1, 2, 3, 5, 7, 11, 13];
for (let i=0; i<arr.length; i++) { // classic loop
    sum += arr[i];
}

for (let item of arr) { sum += item; } // loop over collection

var car = { make: "Ford", model: "Focus", year: 2017 };
for (var p in car) { // enumerable properties loop
    if ( isNaN(car[p]) ) car[p] = car[p].toUpperCase();
}

//FUNCTIONS
function isFruit(x) {
      if ( x == "apple" || x == "fig" || x == "pear" ) 
      { return true; }            
      return false;
  }

//ARRAYS
var cars = [ "Honda Civic", "Ford Focus", "Fiat Punto" ]
cars.indexOf("Fiat Punto")
> 2

["a", "b", "c", "a"].lastIndexOf("a")
> 3

cars.push("Fiat Tipo")
> 4

cars.splice(1, 2, "Rolls Royce")
> Ford Focus,Fiat Punto

cars
> Honda Civic,Rolls Royce,Fiat Tipo
