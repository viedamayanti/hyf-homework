<<<<<<< HEAD
console.log('Script loaded');
=======
// @ts-nocheck
>>>>>>> f59fdaa8f590cba6fbc8d68a3d12c2717a69d094
// Add event listener to the botton
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('searchBtn');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('inputText').value;
    const apiKey = 'SFTp2cVez4xkRPIf4S3BDN6TrDtluDAV';
    const limitNumber = document.getElementById('numberText').value;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limitNumber}&q=${nameInput}`;
<<<<<<< HEAD

=======
    console.log(nameInput);
    console.log(limitNumber);
>>>>>>> f59fdaa8f590cba6fbc8d68a3d12c2717a69d094
    let existingDiv = document.getElementById('giphyImages');
    if (existingDiv) {
      existingDiv.remove();
    }
    const div = document.createElement('div');
    div.id = 'giphyImages';
    document.body.appendChild(div);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        data.data.forEach((item, i) => {
          if (i > limitNumber) {
            return;
          }
          let img = document.createElement('img');
          img.src = item.images.downsized.url;
          div.appendChild(img);
          img.style.width = '300px';
          console.log(img);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  });
});
