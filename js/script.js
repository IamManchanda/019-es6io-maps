/**
 * JS
 */

const clickCounts = new Map();
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  clickCounts.set(button, 0);
  button.addEventListener('click', function () {
    const value = clickCounts.get(this);
    clickCounts.set(this, value + 1);
    console.log(clickCounts);
  });
});
