import { HashMap } from './HashMap.js';

const test = new HashMap(8, 0.75);

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

console.log(`Capacity after insertions: ${test.capacity}`);
console.log(`Length after insertions: ${test.length()}`);

test.set('apple', 'green');
test.set('banana', 'brown');
test.set('lion', 'black');

console.log(test.get('apple'));
console.log(test.get('banana'));
console.log(test.get('lion'));
console.log(`Length after overwriting: ${test.length()}`);
console.log(`Capacity after overwriting: ${test.capacity}`);

test.set('moon', 'silver');

console.log(`Capacity after adding 'moon': ${test.capacity}`);
console.log(`Length after adding 'moon': ${test.length()}`);

console.log(test.has('moon'));
console.log(test.has('banana'));
console.log(test.has('sun'));

console.log(test.remove('carrot'));
console.log(test.length());
console.log(test.get('dog'));
console.log(test.get('carrot'));

console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
