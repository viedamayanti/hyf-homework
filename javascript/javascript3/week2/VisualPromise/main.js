// This code will move the li to the position 100, 100. Calling moveElement will return a promise that resolves after the li element has been moved.
const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
async function translateOneBtOne() {
  redBox.style.left = 0;
  redBox.style.right = 0;
  blueBox.style.top = 0;
  blueBox.style.left = 0;
  greenBox.style.top = 0;
  greenBox.style.left = 0;

  await moveElement(redBox, { x: 20, y: 300 }).then(() => {
    console.log('Element has been moved');
  });
  await moveElement(blueBox, { x: 400, y: 300 }).then(() => {
    console.log('Element has been moved');
  });
  await moveElement(greenBox, { x: 400, y: 20 }).then(() => {
    console.log('Element has been moved');
  });
}
translateOneBtOne();

async function translateAllAtOnce() {
  redBox.style.left = 0;
  redBox.style.right = 0;
  blueBox.style.top = 0;
  blueBox.style.left = 0;
  greenBox.style.top = 0;
  greenBox.style.left = 0;

  moveElement(redBox, { x: 20, y: 300 }).then(() => {
    console.log('Element has been moved');
  });
  moveElement(blueBox, { x: 400, y: 300 }).then(() => {
    console.log('Element has been moved');
  });
  moveElement(greenBox, { x: 400, y: 20 }).then(() => {
    console.log('Element has been moved');
  });
}
translateAllAtOnce();
