/* --- Background random --- */
.bg-layer {
  position: fixed;
  inset: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 0.8s ease-in-out;
  z-index: -1;
}
.bg-hidden { opacity: 0; }
.bg-visible { opacity: 1; }

/* --- Konten --- */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  text-align: center;
  color: white;
}

header {
  background-color: rgba(0,0,0,0.6);
  padding: 20px;
}

.container {
  margin-top: 50px;
  background: rgba(0,0,0,0.6);
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
}

img {
  width: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
}

a {
  color: #00ffcc;
  font-weight: bold;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

button {
  margin-top: 15px;
  padding: 10px 20px;
  background: #00ffcc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
button:hover {
  background: #00cc99;
}

.foto-profil {
  width: 200px;
  border-radius: 50%;
  animation: goyang 3s infinite ease-in-out;
}

@keyframes goyang {
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(10deg); }
  50%  { transform: rotate(-10deg); }
  75%  { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
}

/* Animasi naik-turun + fade looping untuk hobi */
@keyframes fadeInUpLoop {
  0% { opacity: 0; transform: translateY(20px); }
  25% { opacity: 1; transform: translateY(0); }
  75% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
}

/* Efek Glow warna-warni */
@keyframes glow {
  0%   { text-shadow: 0 0 5px #ff0000; color: #ff4d4d; }
  25%  { text-shadow: 0 0 5px #00ff00; color: #4dff4d; }
  50%  { text-shadow: 0 0 5px #00ccff; color: #4dd2ff; }
  75%  { text-shadow: 0 0 5px #ff00ff; color: #ff4dff; }
  100% { text-shadow: 0 0 5px #ffff00; color: #ffff66; }
}

/* Efek bounce */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

ul li {
  font-size: 20px;
  margin: 10px 0;
  font-weight: bold;
  opacity: 0;
  animation: fadeInUpLoop 3s ease-in-out infinite, glow 2s infinite alternate, bounce 2s infinite;
}

/* Delay biar muncul bergantian */
ul li:nth-child(1) { animation-delay: 0s, 0s, 0s; }
ul li:nth-child(2) { animation-delay: 1s, 0s, 0s; }
ul li:nth-child(3) { animation-delay: 2s, 0s, 0s; }

/* Overlay Hitam untuk fade-out */
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  pointer-events: none;
  transition: opacity 1.5s ease;
  z-index: 9999;
}
#overlay.active {
  opacity: 1;
  pointer-events: auto;
}