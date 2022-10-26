// @ts-nocheck
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;

canvas.style.background = 'yellow';
class Circle {
  constructor(x, y, r, startAngle, endAngle) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
  }
  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    context.strokestyle = randomPosition();
    context.fillStyle = randomColor();
    context.fill();
    context.closePath();
  }
}

//Create a circle
function randomColor() {
  let r = (255 * Math.random()) | 0,
    g = (255 * Math.random()) | 0,
    b = (255 * Math.random()) | 0;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
randomColor();

function randomPosition() {
  random_x = Math.random() * windowWidth;
  random_y = Math.random() * windowHeight;
  random_r = Math.random() * 100;
  return random_x, random_y, random_r;
}
randomPosition();

let myCircle = [];
function createCircle() {
  const c1 = new Circle(random_x, random_y, random_r, 0, 2 * Math.PI);
  c1.draw();
  myCircle.push(c1);
}
createCircle();

//Set interval
setInterval(createCircle, 100);
