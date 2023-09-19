function pizzaOven (tipoCorteza, tipoSalsa, quesos, salsas) {
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
let pizza1 = pizzaOven ("estilo Chicago", "tradicional", ["mozarella"], ["pepperoni", "salchicha"]);
console.log (pizza1);

let pizza2 = pizzaOven ("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log (pizza2);

let tipoCorteza = [
    "estilo chicago",
    "lanzada a mano",
    "a la piedra",
    "corteza de queso",
    "integral"
];
let tipoSalsa = [
    "tradicional",
    "marinara",
    "bbq",
    "chipotle",
    "italiana"
];
let quesos = [
    "mozzarella",
    "feta",
    "cheddar",
    "chanco",
    "doble queso"
];
let salsas = [
    "pepperoni",
    "salchicha",
    "ketchup",
    "cebolla",
    "ajo"
];

function randomRange (max, min){
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick (arr){
    let i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza (){
    let pizza = {};
    pizza.tipoCorteza = randomPick(tipoCorteza);
    pizza.tipoSalsa = randomPick(tipoSalsa);
    pizza.quesos = [];
    pizza.salsas = [];
    for (let i = 0; i < randomRange(5,1); i++){
        pizza.quesos.push(randomPick(quesos));
    }
    for (let i = 0; i < randomRange(3,0); i++){
        pizza.salsas.push(randomPick(salsas));
    }
    return pizza;
}
console.log(randomPizza());