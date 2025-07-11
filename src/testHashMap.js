import { HashMap } from './HashMap.js';

const test = new HashMap(8, 0.75);

// Insertar 12 elementos
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(`Capacity after insertions: ${test.capacity}`); // Debe ser 16
console.log(`Length after insertions: ${test.length()}`); // 12

// Sobrescribir valores
test.set('apple', 'green');
test.set('banana', 'brown');
test.set('lion', 'black');

console.log(test.get('apple')); // green
console.log(test.get('banana')); // brown
console.log(test.get('lion')); // black
console.log(`Length after overwriting: ${test.length()}`); // 12
console.log(`Capacity after overwriting: ${test.capacity}`); // 16

// Insertar "moon" → debe duplicar a 32
test.set('moon', 'silver');
console.log(`Capacity after adding 'moon': ${test.capacity}`); // 32
console.log(`Length after adding 'moon': ${test.length()}`); // 13

// Métodos adicionales
console.log(test.has('moon')); // true
console.log(test.has('banana')); // true
console.log(test.has('sun')); // false

console.log(test.remove('carrot')); // true
console.log(test.length()); // 12
console.log(test.get('dog')); // brown
console.log(test.get('carrot')); // null

console.log(test.keys()); // Array de claves
console.log(test.values()); // Array de valores
console.log(test.entries()); // Array de pares [clave, valor]

// Limpiar mapa
test.clear();
console.log(test.length()); // 0
console.log(test.keys()); // []
console.log(test.values()); // []
console.log(test.entries()); // []
