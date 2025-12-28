// Countdown per l'evento
const countdownDate = new Date("Dec 31, 2025 00:00:00").getTime();
const countdownElem = document.getElementById('countdown');

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);

  countdownElem.innerHTML = `Prossimo Evento: ${days}g ${hours}h ${minutes}m ${seconds}s`;

  if(distance < 0) {
    clearInterval(countdown);
    countdownElem.innerHTML = "L'evento è iniziato!";
  }
}, 1000);
