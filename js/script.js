/**
 * JS
 */

let dog1 = { name: 'Snickers' };
let dog2 = { name: 'Sunny' };

const strong = new Map();
const weak = new WeakMap();

strong.set(dog1, 'Snickers is the best');
weak.set(dog2, 'Sunny is the 2nd best');

dog1 = null;
dog2 = null;
