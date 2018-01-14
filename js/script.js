/**
 * JS
 */

const dogs = new Map();

dogs.set('Snickers', 3);
dogs.set('Sunny', 2);
dogs.set('Hugo', 10);

dogs.forEach((value, key) => {
  console.log(value, key);
});

for (const [key, value] of dogs) {
  console.log(key, value);
}
