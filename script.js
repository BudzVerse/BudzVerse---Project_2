// --- Wallpaper Acak ---
const wallpapers = [
  "https://i.ibb.co.com/JR22SDVD/Elaina-Edit-1.jpg",
  "https://i.ibb.co.com/prRCvsWq/Elaina-Edit-2.jpg"
];

const bgA = document.getElementById("bgA");
const bgB = document.getElementById("bgB");
let activeA = true;
let lastUrl = null;

function pickRandom() {
  if (wallpapers.length === 1) return wallpapers[0];
  let url;
  do { url = wallpapers[Math.floor(Math.random() * wallpapers.length)]; }
  while (url === lastUrl);
  lastUrl = url;
  return url;
}

function setBackground(url) {
  const visible = activeA ? bgA : bgB;
  const hidden = activeA ? bgB : bgA;
  hidden.style.backgroundImage = `url('${url}')`;
  hidden.classList.remove("bg-hidden");
  hidden.classList.add("bg-visible");
  visible.classList.remove("bg-visible");
  visible.classList.add("bg-hidden");
  activeA = !activeA;
}

(function initBackground() {
  const first = pickRandom();
  bgA.style.backgroundImage = `url('${first}')`;
  setInterval(() => {
    const url = pickRandom();
    setBackground(url);
  }, 15000); // ganti tiap 15 detik
})();

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
    window.location.href = "https://youtube.com/playlist?list=PLPanbgyToztYKvNJ42N1cw4_jhsABKUBH&si=fus4WT9kIsVY9xMD";
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