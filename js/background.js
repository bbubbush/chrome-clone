document.addEventListener('DOMContentLoaded', () => {
  const getBackgroundImage = () => {
    fetch('https://api.thecatapi.com/v1/images/search?size=full')
      .then((response) => response.json())
      .then((data) => {
        document.body.style.background = `url('${data[0].url}') no-repeat center center`;
        document.body.style.height = '100%';
        document.body.style.backgroundSize = 'cover';
      });
  }
  
  getBackgroundImage();
})