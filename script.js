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
  // Ganti background ke warna random
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Tambahin teks "Gaskeun! 🚀"
  const p = document.createElement("p");
  p.innerText = "Gaskeun! 🚀";
  p.style.color = "white";
  p.style.fontSize = "24px";
  p.style.textAlign = "center";
  document.body.appendChild(p);

  // Aktifkan fade-out overlay + mainkan suara whoosh
  const overlay = document.getElementById("overlay");
  const whoosh = document.getElementById("whoosh");
  overlay.classList.add("active");
  whoosh.play();

  // Tunggu 1.5 detik (overlay penuh), lalu pindah ke YouTube
  setTimeout(function() {
    window.location.href = "https://youtube.com/playlist?list=PLPanbgyToztYKvNJ42N1cw4_jhsABKUBH&si=fus4WT9kIsVY9xMD";
  }, 1500);
});

// --- Animasi Hobi ---
window.addEventListener("load", () => {
  const hobiItems = document.querySelectorAll("ul li");
  hobiItems.forEach((item, index) => {
    setTimeout(() => {
      // animasi muncul
      item.style.animation = "fadeInUp 0.8s ease forwards";
      // setelah muncul, aktifkan glow + bounce
      setTimeout(() => {
        item.style.animation = "glow 2s infinite alternate, bounce 2s infinite";
      }, 800);
    }, index * 500); // delay biar muncul satu-satu
  });
});