// ======================================
// 🎉 TEMA ANIVERSARIO TIENDA
// ======================================

window.onload = () => {

  cambiarTema();

  introAniversario();

  particulas();

  mensajesRandom();

  efectosCursor();

  recuerdosDesarrollo();

};

// ======================================
// 🌈 CAMBIAR TEMA
// ======================================

function cambiarTema() {

  document.body.style.background =
  `
  linear-gradient(
    45deg,
    #0f2027,
    #203a43,
    #2c5364
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
// 🎉 INTRO
// ======================================

function introAniversario() {

  let intro =
    document.createElement("div");

  intro.innerHTML =
  `
  <div style="text-align:center;">

    🎉 ANIVERSARIO 🎉

    <br><br>

    <span style="
      font-size:0.5em;
      color:#74b9ff;
    ">

      💖 Gracias por apoyar la página

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
  rgba(0,0,0,0.95);

  display:flex;

  justify-content:center;
  align-items:center;

  color:white;

  font-size:3em;

  z-index:999999;

  text-shadow:
    0 0 20px #74b9ff;

  animation:
    aparecer 1s ease;
  `;

  document.body.appendChild(intro);

  setTimeout(() => {

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

    p.innerHTML =
      Math.random() > 0.5
      ? "✨"
      : "💙";

    p.style =
    `
    position:fixed;

    left:${Math.random()*100}%;

    top:-20px;

    font-size:${15 + Math.random()*20}px;

    opacity:0.8;

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

    "🎉 Gracias por este año",

    "💖 Todo comenzó con una idea",

    "✨ Gracias por apoyar mis dibujos",

    "🎨 Se vienen nuevas sorpresas",

    "👀 El aniversario apenas comienza"

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
    rgba(0,0,0,0.6);

  padding:12px 22px;

  border-radius:15px;

  color:white;

  font-size:18px;

  z-index:99999;

  box-shadow:
    0 0 15px #74b9ff;
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
// 👀 RECUERDOS
// ======================================

function recuerdosDesarrollo() {

  let probabilidad =
    Math.random();

  if (probabilidad > 0.20) return;

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
    rgba(0,0,0,0.95);

  padding:25px;

  border-radius:25px;

  box-shadow:
    0 0 25px #74b9ff;

  z-index:999999;

  text-align:center;
  `;

  box.innerHTML =
  `
  <h2 style="color:#74b9ff;">
    👀 RECUERDOS
  </h2>

  <img
  src="img/desarr.png"
  style="
    width:220px;
    border-radius:15px;
    margin:10px;
  ">

  <img
  src="img/fase1.png"
  style="
    width:220px;
    border-radius:15px;
    margin:10px;
  ">

  <p style="color:white;">
    💖 Así empezó la página
  </p>
  `;

  document.body.appendChild(box);

  setTimeout(() => {

    box.remove();

  }, 8000);

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

