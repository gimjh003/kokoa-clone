const clock = document.querySelector(".status-bar__clock");

function timeNow() {
  const now = new Date();
  let hours;
  let minutes;
  hours = now.getHours();
  minutes = now.getMinutes();
  if (now.getHours() < 10) {
    hours = `0${hours}`;
  }
  if (now.getMinutes() < 10) {
    minutes = `0${minutes}`;
  }
  clock.innerText = `${hours}:${minutes}`;
}

function init() {
  setInterval(timeNow, 1000);
}

init();
