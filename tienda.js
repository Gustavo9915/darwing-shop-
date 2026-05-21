// ======================================
// 🎂 TEMA CUMPLEAÑOS TIENDA
// ======================================

window.onload = () => {

  cambiarTema();

  introCumple();

  particulas();

  mensajesRandom();

  efectosCursor();

  sorpresaCumple();

  clickSecretos();

};

// ======================================
// 🌈 CAMBIAR TEMA
// ======================================

function cambiarTema() {

  document.body.style.background =
  `
  linear-gradient(
    45deg,
    #ff9a9e,
    #fad0c4,
    #fbc2eb,
    #a18cd1
  )
  `;

  document.body.style.backgroundSize =
    "400% 400%";

  document.body.style.animation =
    "aurora 15s ease infinite";

  document.body.style.color =
    "white";

  document.body.style.fontFamily =
    "'Edu NSW ACT Cursive', cursive";

}

// ======================================
// 🎂 INTRO
// ======================================

function introCumple() {

  let intro =
    document.createElement("div");

  intro.innerHTML =
  `
  <div style="text-align:center;">

    🎂 FELIZ CUMPLEAÑOS 🎂

    <br><br>

    <span style="
      font-size:0.5em;
      color:#ffd6f6;
    ">

      💖 Esta tienda cambió
      por un día especial ✨

    </span>

  </div>
  `;

  intro.style =
  `
  position:fixed;

  top:0;
  left:0;

  width:100%;
  height:100%;

  background:
    rgba(0,0,0,0.92);

  display:flex;

  justify-content:center;
  align-items:center;

  color:white;

  font-size:3em;

  z-index:999999;

  text-shadow:
    0 0 20px white;

  animation:
    aparecer 1s ease;
  `;

  document.body.appendChild(intro);

  setTimeout(() => {

    intro.style.transition =
      "1s";

    intro.style.opacity =
      "0";

    setTimeout(() => {

      intro.remove();

    }, 1000);

  }, 4000);

}

// ======================================
// ✨ PARTICULAS
// ======================================

function particulas() {

  setInterval(() => {

    let p =
      document.createElement("div");

    const emojis = [

      "🎂",
      "💖",
      "✨",
      "🎈",
      "🎉"

    ];

    p.innerHTML =
      emojis[
        Math.floor(
          Math.random() *
          emojis.length
        )
      ];

    p.style =
    `
    position:fixed;

    left:${Math.random()*100}%;

    top:-20px;

    font-size:${15 + Math.random()*20}px;

    opacity:0.85;

    z-index:1;

    pointer-events:none;

    transition:6s linear;
    `;

    document.body.appendChild(p);

    setTimeout(() => {

      p.style.top =
        "110%";

    }, 50);

    setTimeout(() => {

      p.remove();

    }, 6000);

  }, 300);

}

// ======================================
// 💬 MENSAJES RANDOM
// ======================================

function mensajesRandom() {

  let frases = [

    "🎂 Hoy es un día especial",

    "💖 Gracias por visitar la tienda",

    "✨ Evento de cumpleaños activo",

    "🎁 Nuevas sorpresas desbloqueadas",

    "🎈 Espero que te guste esta mini actualización",

    "👀 Easter eggs escondidos por toda la página"

  ];

  let box =
    document.createElement("div");

  box.style =
  `
  position:fixed;

  bottom:20px;

  left:50%;

  transform:translateX(-50%);

  background:
    rgba(0,0,0,0.65);

  padding:14px 24px;

  border-radius:18px;

  color:white;

  font-size:18px;

  z-index:99999;

  backdrop-filter:blur(6px);

  box-shadow:
    0 0 15px #ff4d88,
    0 0 25px #ffffff;
  `;

  document.body.appendChild(box);

  let i = 0;

  box.innerHTML =
    frases[0];

  setInterval(() => {

    i++;

    if (i >= frases.length) {

      i = 0;

    }

    box.style.opacity =
      "0";

    setTimeout(() => {

      box.innerHTML =
        frases[i];

      box.style.opacity =
        "1";

    }, 300);

  }, 4000);

}

// ======================================
// ✨ CURSOR
// ======================================

function efectosCursor() {

  document.addEventListener("mousemove", (e) => {

    let star =
      document.createElement("div");

    star.innerHTML =
      "✨";

    star.style =
    `
    position:fixed;

    left:${e.clientX}px;

    top:${e.clientY}px;

    pointer-events:none;

    font-size:14px;

    z-index:99999;
    `;

    document.body.appendChild(star);

    setTimeout(() => {

      star.style.transition =
        "1s";

      star.style.opacity =
        "0";

      star.style.transform =
        "translateY(-20px)";

    }, 10);

    setTimeout(() => {

      star.remove();

    }, 1000);

  });

}

// ======================================
// 🎁 SORPRESA
// ======================================

function sorpresaCumple() {

  let probabilidad =
    Math.random();

  if (probabilidad > 0.25) return;

  let box =
    document.createElement("div");

  box.style =
  `
  position:fixed;

  top:50%;
  left:50%;

  transform:
    translate(-50%,-50%);

  background:
    rgba(0,0,0,0.92);

  padding:25px;

  border-radius:25px;

  box-shadow:
    0 0 25px #ff4d88;

  z-index:999999;

  text-align:center;

  max-width:500px;
  `;

  box.innerHTML =
  `
  <h2 style="color:#ffd6f6;">

    🎂 MENSAJE ESPECIAL

  </h2>

  <p style="
    color:white;
    line-height:1.7;
  ">

    💖 Gracias por ser
    una persona tan especial ✨

    <br><br>

    Espero que tengas
    un cumpleaños increíble 🎈

  </p>
  `;

  document.body.appendChild(box);

  setTimeout(() => {

    box.remove();

  }, 7000);

}

// ======================================
// 👀 CLICK SECRETOS
// ======================================

function clickSecretos() {

  const mensajes = [

    "💖 Feliz cumpleaños",

    "🎂 Mini sorpresa encontrada",

    "✨ Easter egg desbloqueado",

    "🎈 Espero que sonrías hoy",

    "🎁 Mensaje secreto detectado",

    "💌 Gracias por visitar la tienda"

  ];

  let bloqueado = false;

  document.addEventListener("click", (e) => {

    if (bloqueado) return;

    bloqueado = true;

    const msg =
      document.createElement("div");

    msg.innerHTML =
      mensajes[
        Math.floor(
          Math.random() *
          mensajes.length
        )
      ];

    msg.style =
    `
    position:fixed;

    left:${e.clientX}px;

    top:${e.clientY}px;

    transform:
      translate(-50%,-50%);

    background:
      rgba(0,0,0,0.88);

    color:white;

    padding:14px 20px;

    border-radius:18px;

    font-size:17px;

    z-index:999999;

    pointer-events:none;

    backdrop-filter:blur(6px);

    box-shadow:
      0 0 15px #ff4d88,
      0 0 25px white;
    `;

    document.body.appendChild(msg);

    setTimeout(() => {

      msg.style.transition =
        "1.5s";

      msg.style.opacity =
        "0";

      msg.style.transform =
        "translate(-50%,-90px) scale(0.9)";

    }, 2500);

    setTimeout(() => {

      msg.remove();

    }, 4000);

    setTimeout(() => {

      bloqueado = false;

    }, 1200);

  });

}

// ======================================
// 🎨 CSS
// ======================================

let style =
document.createElement("style");

style.innerHTML =
`

@keyframes aurora {

  0%{
    background-position:0% 50%;
  }

  50%{
    background-position:100% 50%;
  }

  100%{
    background-position:0% 50%;
  }

}

@keyframes aparecer {

  from{
    opacity:0;
    transform:scale(1.2);
  }

  to{
    opacity:1;
    transform:scale(1);
  }

}

`;

document.head.appendChild(style);