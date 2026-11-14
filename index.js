const key = document.querySelectorAll(".key");

console.log(key);

window.addEventListener("keydown", (e) => {
//   console.log(e.keyCode);

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`#key-${e.keyCode}`);

  if (!audio || !key) return;

  audio.currentTime = 0;

  audio.play();
  key.classList.add("playing");

  setTimeout(() => {
    key.classList.remove("playing");
  }, 250);
});






