// --- Wallpaper Random ---
const wallpapers = [
  "https://i.ibb.co.com/JR22SDVD/Elaina-Edit-1.jpg",
  "https://i.ibb.co.com/prRCvsWq/Elaina-Edit-2.jpg"
];

let autoShuffle = false;
let intervalId = null;

function setRandomWallpaper() {
  const random = Math.floor(Math.random() * wallpapers.length);
  document.body.style.backgroundImage = `url('${wallpapers[random]}')`;
}

document.getElementById("shuffleBtn").addEventListener("click", setRandomWallpaper);

document.getElementById("autoShuffleBtn").addEventListener("click", () => {
  autoShuffle = !autoShuffle;
  const btn = document.getElementById("autoShuffleBtn");
  if (autoShuffle) {
    btn.textContent = "⏹️ Stop Shuffle";
    intervalId = setInterval(setRandomWallpaper, 10000);
  } else {
    btn.textContent = "🔁 Auto Shuffle";
    clearInterval(intervalId);
  }
});

document.getElementById("modeSelect").addEventListener("change", (e) => {
  document.body.style.backgroundSize = e.target.value;
});

setRandomWallpaper();

// --- Kontrol Musik ---
const musik = document.getElementById("musik");
const musikBtn = document.getElementById("musikBtn");

musikBtn.addEventListener("click", () => {
  if (musik.paused) {
    musik.play();
    musikBtn.textContent = "⏸️ Pause Musik";
  } else {
    musik.pause();
    musikBtn.textContent = "▶️ Play Musik";
  }
});

// --- Tombol Gaskeun 😎 ---
document.getElementById("klikBtn").addEventListener("click", function() {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  const p = document.createElement("p");
  p.innerText = "Gaskeun! 🚀";
  p.style.color = "white";
  p.style.fontSize = "24px";
  p.style.textAlign = "center";
  document.body.appendChild(p);

  const overlay = document.getElementById("overlay");
  const whoosh = document.getElementById("whoosh");
  overlay.classList.add("active");
  whoosh.play();

  setTimeout(function() {
    window.location.href =
      "https://youtube.com/playlist?list=PLPanbgyToztYKvNJ42N1cw4_jhsABKUBH&si=fus4WT9kIsVY9xMD";
  }, 1500);
});

// --- Animasi Hobi ---
window.addEventListener("load", () => {
  const hobiItems = document.querySelectorAll("ul li");
  hobiItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = 1;
    }, index * 500);
  });
});