console.log('Just test');
function finishGame() {
  let myBtn = document.getElementById('gameBtn');
  myBtn.addEventListener('click', () => {
    const time = document.getElementById('textInput').value;
    setTimeout(() => {
      const text = document.getElementById('overText');
      text.innerHTML = 'Game over!!!';
      if (keyboardS < keyboardL) {
        alert('LLLLL winnnn !!!');
      } else if (keyboardL < keyboardS) {
        alert('SSSSSS win!!!');
      } else if (keyboardS === keyboardL) {
        alert('DRAW!!! try again');
      } else {
        return text;
      }
    }, time * 1000);
  });
}
finishGame();

let keyboardS = 0;
let keyboardL = 0;
//Keyboard event
window.addEventListener('keypress', function (key) {
  // console.log(key.keyCode);
  if (key.keyCode === 115) {
    //alert('Hello');
    keyboardS++;
    const pressS = document.getElementById('showTextS');
    pressS.innerHTML = keyboardS;
  }
  if (key.keyCode === 108) {
    //alert('hej hej hej');
    keyboardL++;
    const pressL = document.getElementById('showTextL');
    pressL.innerHTML = keyboardL;
  }
});
