setInterval(setClock, 1000);

const hourHand = document.getElementById("dataHour");
const minuteHand = document.getElementById("dataMinute");
const secondHand = document.getElementById("dataSecond");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setMovement(secondHand, secondsRatio);
  setMovement(minuteHand, minutesRatio);
  setMovement(hourHand, hoursRatio);
}

function setMovement(e, rotationRatio) {
  e.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
