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
  botonSecreto();
  segundaCarta();
  fotoEspecial();
  modoNoche();
    textoMaquina();

  miniPastel();

  cartasSecretas();

  modoSecreto();
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
// ======================================
// 👀 BOTON SECRETO
// ======================================

function botonSecreto() {

  const btn =
    document.getElementById(
      "btnSecreto"
    );

  if (!btn) return;

  btn.addEventListener(
    "click",

    () => {

      // 👀 evitar duplicados
      if (
        document.getElementById(
          "sorpresaSecreta"
        )
      ) return;

      // ======================================
      // 🎁 SORPRESA
      // ======================================

      const box =
        document.createElement(
          "div"
        );

      box.id =
        "sorpresaSecreta";

      box.innerHTML =
      `
      <div style="
        font-size:1.2em;
        margin-bottom:15px;
      ">

        👀 SORPRESA

      </div>

      <div style="
        font-size:0.5em;
        line-height:1.8;
      ">

        🎂 Encontraste
        el botón secreto ✨

        <br><br>

        💖 Gracias por visitar
        esta pequeña actualización

        <br><br>

        🎈 Evento especial activo

      </div>

      <br>

      <button id="cerrarSorpresa">

        Cerrar

      </button>
      `;

      box.style =
      `
      position:fixed;

      top:50%;
      left:50%;

      transform:
        translate(-50%,-50%);

      background:
        rgba(0,0,0,0.92);

      color:white;

      padding:35px;

      border-radius:25px;

      text-align:center;

      z-index:999999;

      font-size:2em;

      max-width:500px;

      box-shadow:
        0 0 20px #00ffcc,
        0 0 35px white;

      animation:
        aparecer 0.7s ease;
      `;

      document.body.appendChild(
        box
      );

      // ======================================
      // ❌ CERRAR
      // ======================================

      const cerrar =
        document.getElementById(
          "cerrarSorpresa"
        );

      cerrar.style =
      `
      margin-top:15px;

      padding:10px 20px;

      border:none;

      border-radius:15px;

      background:#00b894;

      color:white;

      cursor:pointer;
      `;

      cerrar.addEventListener(
        "click",

        () => {

          box.style.transition =
            "0.5s";

          box.style.opacity =
            "0";

          setTimeout(() => {

            box.remove();

          }, 500);

        }

      );

    }

  );

}
// ======================================
// 💖 SEGUNDA CARTA
// ======================================

function segundaCarta() {

  const btn =
    document.getElementById(
      "btnCarta2"
    );

  if (!btn) return;

  btn.addEventListener(
    "click",

    () => {

      if (
        document.getElementById(
          "segundaCarta"
        )
      ) return;

      const carta =
        document.createElement(
          "div"
        );

      carta.id =
        "segundaCarta";

      carta.innerHTML =
      `
      <div style="
        font-size:1.2em;
        margin-bottom:15px;
      ">

        💖 Mensaje Especial

      </div>

      <div style="
        font-size:0.5em;
        line-height:1.8;
      ">

        🎂 Gracias por todos
        los momentos bonitos ✨

        <br><br>

        💖 Espero que este día
        sea increíble para ti

        <br><br>

        🎈 Feliz cumpleaños

      </div>

      <br>

      <button id="cerrarCarta2">

        Cerrar

      </button>
      `;

      carta.style =
      `
      position:fixed;

      top:50%;
      left:50%;

      transform:
        translate(-50%,-50%);

      background:
        rgba(0,0,0,0.92);

      color:white;

      padding:35px;

      border-radius:25px;

      text-align:center;

      z-index:999999;

      font-size:2em;

      max-width:500px;

      box-shadow:
        0 0 20px #ff4d88,
        0 0 35px white;

      animation:
        aparecer 0.7s ease;
      `;

      document.body.appendChild(
        carta
      );

      const cerrar =
        document.getElementById(
          "cerrarCarta2"
        );

      cerrar.style =
      `
      margin-top:15px;

      padding:10px 20px;

      border:none;

      border-radius:15px;

      background:#ff4d88;

      color:white;

      cursor:pointer;
      `;

      cerrar.addEventListener(
        "click",

        () => {

          carta.style.transition =
            "0.5s";

          carta.style.opacity =
            "0";

          carta.style.transform =
            "translate(-50%,-50%) scale(0.8)";

          setTimeout(() => {

            carta.remove();

          }, 500);

        }

      );

    }

  );

}
// ======================================
// 💖 FOTO ESPECIAL
// ======================================

function fotoEspecial() {

  const box =
    document.getElementById(
      "fotoEspecial"
    );

  if (!box) return;

  box.innerHTML =
  `
  <div style="
    margin-top:30px;
    text-align:center;
  ">

    <img
      src="img/fami.jpg"

      style="
        width:260px;
        max-width:90%;

        border-radius:25px;

        border:4px solid #ffb6c1;

        box-shadow:
          0 0 20px #ff4d88,
          0 0 35px white;

        transition:0.4s;
      ">

    <p style="
      margin-top:15px;

      font-size:20px;

      color:white;

      line-height:1.7;

      text-shadow:
        0 0 10px #ff4d88;
    ">

      💖 Te quiero mucho
      y siempre te veré
      como una segunda mamá ✨

    </p>

  </div>
  `;

}
const frases = [

  "💖 Gracias por acompañarme",

  "✨ Eres muy importante para mí",

  "🎂 Espero verte sonreír hoy",

  "💖 Gracias por cuidar de mí",

  "🎈 Feliz cumpleaños",

  "✨ Siempre estás conmigo",

  "💖 Te quiero mucho",

  "🎂 Este evento fue hecho para ti"

];
// ======================================
// 🌙 MODO NOCHE
// ======================================

function modoNoche() {

  const hora =
    new Date().getHours();

  // 👀 DESPUES DE LAS 7PM
  if (hora >= 19) {

    document.body.style.background =
    `
    linear-gradient(
      45deg,
      #090909,
      #1a1a40,
      #000
    )
    `;

    document.body.style.boxShadow =
      "0 0 40px #ff4d88";

  }

}
// ======================================
// 👀 MENSAJES SECRETOS
// ======================================

function mensajesClick() {

  const mensajes = [

    "💖 Gracias por estar aquí",

    "✨ Feliz cumpleaños",

    "🎂 Espero que te guste",

    "💖 Eres muy importante para mí",

    "🎈 Gracias por cuidarme",

    "✨ Te quiero mucho"

  ];

  let indice = 0;

  document.addEventListener(
    "click",

    (e) => {

      // 👀 UNO POR UNO
      const texto =
        mensajes[indice];

      indice++;

      if (indice >= mensajes.length) {

        indice = 0;

      }

      const msg =
        document.createElement(
          "div"
        );

      msg.innerHTML =
        texto;

      msg.style =
      `
      position:fixed;

      left:${e.clientX}px;

      top:${e.clientY}px;

      color:white;

      background:
        rgba(0,0,0,0.75);

      padding:12px 18px;

      border-radius:15px;

      font-size:18px;

      z-index:999999;

      pointer-events:none;

      box-shadow:
        0 0 15px #ff4d88;

      animation:
        aparecer 0.5s ease;
      `;

      document.body.appendChild(
        msg
      );

      // 👀 quedarse más tiempo
      setTimeout(() => {

        msg.style.transition =
          "1s";

        msg.style.opacity =
          "0";

        msg.style.transform =
          "translateY(-20px)";

      }, 3500);

      setTimeout(() => {

        msg.remove();

      }, 4500);

    }

  );

}
// ======================================
// 👀 MENSAJE AL ENTRAR
// ======================================

window.addEventListener(

  "load",

  () => {

    const frases = [

      "🎂 Bienvenida al evento",

      "💖 Todo esto fue hecho para ti",

      "✨ Espero que te guste la sorpresa",

      "🎈 Feliz cumpleaños"

    ];

    const msg =
      document.createElement("div");

    msg.innerHTML =
      frases[
        Math.floor(
          Math.random() *
          frases.length
        )
      ];

    msg.style =
    `
    position:fixed;

    top:20px;

    left:50%;

    transform:
      translateX(-50%);

    background:
      rgba(0,0,0,0.85);

    padding:15px 25px;

    border-radius:20px;

    color:white;

    z-index:999999;

    box-shadow:
      0 0 20px #ff4d88;

    animation:
      aparecerClick 0.5s ease;
    `;

    document.body.appendChild(
      msg
    );

    setTimeout(() => {

      msg.style.transition =
        "1s";

      msg.style.opacity =
        "0";

      msg.style.top =
        "-100px";

    }, 3500);

    setTimeout(() => {

      msg.remove();

    }, 4500);

  }

);

// ======================================
// 🎁 SORPRESA FINAL
// ======================================

const btnUltra =
  document.getElementById(
    "btnUltra"
  );

if (btnUltra) {

  btnUltra.addEventListener(

    "click",

    () => {

      // 👀 evitar duplicados
      if (
        document.getElementById(
          "popupFinal"
        )
      ) return;

      const popup =
        document.createElement(
          "div"
        );

      popup.id =
        "popupFinal";

      popup.innerHTML =
      `
      <div style="
        font-size:1.2em;
        margin-bottom:20px;
      ">

        🎁 SORPRESA FINAL 🎁

      </div>

      <div style="
        font-size:0.5em;
        line-height:1.8;
      ">

        💖 Gracias por estar aquí

        <br><br>

        🎂 Este pequeño evento
        fue hecho con cariño
        para sacarte una sonrisa ✨

        <br><br>

        💌 Feliz cumpleaños 💌

      </div>

      <br>

      <button id="cerrarFinal">

        Cerrar

      </button>
      `;

      popup.style =
      `
      position:fixed;

      top:50%;
      left:50%;

      transform:
        translate(-50%,-50%);

      background:
        rgba(0,0,0,0.94);

      color:white;

      padding:35px;

      border-radius:25px;

      text-align:center;

      z-index:999999;

      font-size:2em;

      width:90%;

      max-width:600px;

      backdrop-filter:blur(8px);

      box-shadow:
        0 0 25px #ff4d88,
        0 0 40px white;

      animation:
        aparecerClick 0.5s ease;
      `;

      document.body.appendChild(
        popup
      );

      // ✨ PARTICULAS
      for (let i = 0; i < 35; i++) {

        const p =
          document.createElement(
            "div"
          );

        const emojis = [

          "🎂",
          "💖",
          "✨",
          "🎈"

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

        top:${Math.random()*100}%;

        font-size:25px;

        z-index:999999;

        pointer-events:none;
        `;

        document.body.appendChild(
          p
        );

        setTimeout(() => {

          p.remove();

        }, 3000);

      }

      // ❌ CERRAR
      const cerrar =
        document.getElementById(
          "cerrarFinal"
        );

      cerrar.style =
      `
      margin-top:15px;

      padding:12px 20px;

      border:none;

      border-radius:15px;

      background:#ff4d88;

      color:white;

      cursor:pointer;

      font-size:18px;
      `;

      cerrar.addEventListener(

        "click",

        () => {

          popup.style.transition =
            "0.5s";

          popup.style.opacity =
            "0";

          popup.style.transform =
            "translate(-50%,-50%) scale(0.8)";

          setTimeout(() => {

            popup.remove();

          }, 500);

        }

      );

    }

  );

}
// ======================================
// ✨ TEXTO ESCRIBIENDOSE SOLO
// ======================================

function textoMaquina() {

  const frases = [

    "💖 Bienvenida al mini evento",
    "🎂 Feliz cumpleaños",
    "✨ Todo esto fue hecho para ti",
    "🎁 Gracias por estar aquí"

  ];

  const texto =
    document.getElementById(
      "randomMsg"
    );

  if (!texto) return;

  let fraseIndex = 0;
  let letraIndex = 0;

  function escribir() {

    if (
      letraIndex <
      frases[fraseIndex].length
    ) {

      texto.innerHTML +=
        frases[fraseIndex].charAt(
          letraIndex
        );

      letraIndex++;

      setTimeout(
        escribir,
        70
      );

    }

    else {

      setTimeout(() => {

        texto.innerHTML = "";

        letraIndex = 0;

        fraseIndex++;

        if (
          fraseIndex >=
          frases.length
        ) {

          fraseIndex = 0;

        }

        escribir();

      }, 2500);

    }

  }

  escribir();

}
// ======================================
// 🎂 MINI PASTEL ANIMADO
// ======================================

function miniPastel() {

  const pastel =
    document.createElement(
      "div"
    );

  pastel.innerHTML =
  `
  🎂
  `;

  pastel.style =
  `
  position:fixed;

  right:20px;

  bottom:20px;

  font-size:60px;

  z-index:99999;

  animation:
    pastelBounce 2s infinite;
  `;

  document.body.appendChild(
    pastel
  );

}
// ======================================
// 💌 CARTAS DESBLOQUEABLES
// ======================================

function cartasSecretas() {

  let clicks = 0;

  document.addEventListener(

    "click",

    () => {

      clicks++;

      // 💌 cada 15 clicks
      if (clicks === 15) {

        mostrarCarta(
          "💌 Carta desbloqueada",
          "💖 Gracias por todo"
        );

      }

      // 🎂 otra carta
      if (clicks === 30) {

        mostrarCarta(
          "🎂 Nueva sorpresa",
          "✨ Espero que sonrías mucho hoy"
        );

      }

    }

  );

}

// ======================================
// 💖 MOSTRAR CARTA
// ======================================

function mostrarCarta(
  titulo,
  mensaje
) {

  const carta =
    document.createElement(
      "div"
    );

  carta.innerHTML =
  `
  <h2>${titulo}</h2>

  <p>${mensaje}</p>
  `;

  carta.style =
  `
  position:fixed;

  top:50%;
  left:50%;

  transform:
    translate(-50%,-50%);

  background:
    rgba(0,0,0,0.92);

  color:white;

  padding:30px;

  border-radius:25px;

  z-index:999999;

  text-align:center;

  box-shadow:
    0 0 25px #ff4d88;
  `;

  document.body.appendChild(
    carta
  );

  setTimeout(() => {

    carta.remove();

  }, 5000);

}// ======================================
// 👀 MODO SECRETO
// ======================================

function modoSecreto() {

  let clicks = 0;

  document.addEventListener(

    "click",

    () => {

      clicks++;

      // 👀 activar
      if (clicks >= 50) {

        document.body.style.filter =
          "hue-rotate(120deg)";

        const secreto =
          document.createElement(
            "div"
          );

        secreto.innerHTML =
        `
        👀 MODO SECRETO ACTIVADO
        `;

        secreto.style =
        `
        position:fixed;

        top:50%;
        left:50%;

        transform:
          translate(-50%,-50%);

        background:black;

        color:#00ffcc;

        padding:25px;

        border-radius:20px;

        font-size:2em;

        z-index:999999;

        box-shadow:
          0 0 25px #00ffcc;
        `;

        document.body.appendChild(
          secreto
        );

        setTimeout(() => {

          secreto.remove();

        }, 4000);

      }

    }

  );

}