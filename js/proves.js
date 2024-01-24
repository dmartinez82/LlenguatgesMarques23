var suma = 2+3;
console.log(`El número ${suma} es ${(suma%2==0)?"par":"impar"}.`);

var factorial = 1;
const NUMERO = 5;

for (var valor = NUMERO; valor>1; valor--) {
  factorial *= valor;
  console.log(factorial);
}

console.log(`El factorial del número ${NUMERO} es ${factorial}.`);

var array = [1, 3, 4, 6];

console.log(array);

function sumar(primero, segundo){;
    if (primero === undefined) primero = 0;
    if (segundo === undefined) segundo = 0;
    return primero+segundo;
}

console.log(sumar(2));

var x = "0";
if (x){
    console.log("truthy");
} else{
    console.log("falsy");
}

x = 9;

x = [5, 6];

x = false;