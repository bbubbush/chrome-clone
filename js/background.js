const getBackgroundImage = () => {
  fetch('https://api.thecatapi.com/v1/images/search?size=full')
    .then((response) => response.json())
    .then((data) => {
      const bgImage = document.createElement('img');
      bgImage.src = data[0].url
      document.body.appendChild(bgImage);
    });
}

getBackgroundImage();