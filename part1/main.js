console.log("Hola Mundo");

//String
let name = "Andreilys";
//constante
const lastName = 4;

console.log(name);

//tipos de datos primitivos no pueden mutar
// 2
// "string"
// true false
// undefined
// null
// BigInt
// Symbol

//los String son inmutables
const firstName = "Andreilys";
const firstNameWithUpperCase = firstName.toUpperCase();
console.log(firstNameWithUpperCase);

//los objetos son inmutables
const list = [];
const antoherlist = list.concat(157);
list[0];
console.log(list[0]);
console.log(antoherlist);

antoherlist.forEach;

//Objetos
const persona = {
  name: "Andreilys",
  x: "@AndreiysRuiz",
  age: 29,
  isaDeveloper: true,
  links: "[@AndreilysRuiz], [https://AndreilysRuiz.live]",
};

console.log(persona.links);

const field = "x";
console.log(persona[field]);

//Funciones en JavaScript
const sumar = (a, b) => {
  console.log(a);
  console.log(b);
  return a + b;
};
const reusltado = sumar(2 + 2);

function restar (a,b){
  return a - b
}