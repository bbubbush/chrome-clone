const clock = document.querySelector('#clock');

function displayDate() {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, '0')
  const minetes = String(today.getMinutes()).padStart(2, '0')
  const seconds = String(today.getSeconds()).padStart(2, '0')
  clock.innerHTML = `${hours}:${minetes}:${seconds}`
}

displayDate();
setInterval(displayDate, 1000);


