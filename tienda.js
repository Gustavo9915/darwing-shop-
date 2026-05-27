// ======================================
// 🎂 EVENTO ESPECIAL
// ======================================

window.onload = () => {

  cambiarTema();

  introEspecial();

  particulas();

  mensajesRandom();

  efectosCursor();

  botonSecreto();

  segundaCarta();

  fotoEspecial();

  modoNoche();

  textoMaquina();

  miniPastel();

  cartasSecretas();

  modoSecreto();

  teaserFinal();

};

// ======================================
// 🌈 TEMA
// ======================================

function cambiarTema() {

  document.body.style.background =
  `
  linear-gradient(
    45deg,
    #0f172a,
    #13293d,
    #1e3a5f
  )
  `;

  document.body.style.backgroundSize =
    "400% 400%";

  document.body.style.animation =
    "aurora 15s ease infinite";

}

// ======================================
// 🎂 INTRO
// ======================================

function introEspecial() {

  const intro =
    document.createElement("div");

  intro.innerHTML =
  `
  <div style="text-align:center;">

    🎂 FELIZ CUMPLEAÑOS 🎂

    <br><br>

    <span style="
      font-size:0.5em;
      color:#cdefff;
    ">

      💙 Hoy es un día especial ✨

    </span>

  </div>
  `;

  intro.style =
  `
  position:fixed;
  inset:0;

  background:
    rgba(0,0,0,0.92);

  display:flex;
  justify-content:center;
  align-items:center;

  color:white;

  font-size:3em;

  z-index:999999;

  text-shadow:
    0 0 20px #74b9ff;
  `;

  document.body.appendChild(intro);

  setTimeout(() => {

    intro.style.transition =
      "1s";

    intro.style.opacity =
      "0";

  }, 3500);

  setTimeout(() => {

    intro.remove();

  }, 4500);

}

// ======================================
// ✨ PARTICULAS
// ======================================

function particulas() {

  setInterval(() => {

    const p =
      document.createElement("div");

    const emojis = [

      "🎂",
      "💙",
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

    z-index:1;

    pointer-events:none;

    opacity:0.8;

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

  }, 350);

}

// ======================================
// 💬 MENSAJES
// ======================================

function mensajesRandom() {

  const frases = [

    "🎂 Evento especial activo",

    "💙 Gracias por visitar la tienda",

    "✨ Nuevas sorpresas desbloqueadas",

    "🎈 Mini actualización cargada",

    "👀 Hay secretos escondidos"

  ];

  const texto =
    document.getElementById(
      "randomMsg"
    );

  if (!texto) return;

  let i = 0;

  texto.innerHTML =
    frases[0];

  setInterval(() => {

    i++;

    if (i >= frases.length) {

      i = 0;

    }

    texto.style.opacity =
      "0";

    setTimeout(() => {

      texto.innerHTML =
        frases[i];

      texto.style.opacity =
        "1";

    }, 300);

  }, 4000);

}

// ======================================
// ✨ CURSOR
// ======================================

function efectosCursor() {

  document.addEventListener(
    "mousemove",

    (e) => {

      const star =
        document.createElement(
          "div"
        );

      star.innerHTML =
        "✨";

      star.style =
      `
      position:fixed;

      left:${e.clientX}px;

      top:${e.clientY}px;

      font-size:14px;

      pointer-events:none;

      z-index:99999;
      `;

      document.body.appendChild(
        star
      );

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

    }

  );

}

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

      const box =
        document.createElement(
          "div"
        );

      box.innerHTML =
      `
      <h2>👀 SORPRESA</h2>

      <p>
        ✨ Encontraste
        el botón secreto
      </p>
      `;

      estiloPopup(box);

      document.body.appendChild(
        box
      );

      setTimeout(() => {

        box.remove();

      }, 4000);

    }

  );

}

// ======================================
// 💌 SEGUNDA CARTA
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

      mostrarCarta(

        "💙 Mensaje Especial",

        "🎂 Gracias por todos los buenos momentos ✨"

      );

    }

  );

}

// ======================================
// 🖼️ FOTO
// ======================================

function fotoEspecial() {

  const box =
    document.getElementById(
      "fotoEspecial"
    );

  if (!box) return;

  box.innerHTML =
  `
  <img
    src="img/fami.jpg"

    style="
      width:260px;
      border-radius:25px;
      border:4px solid #74b9ff;
      box-shadow:
        0 0 20px #74b9ff;
    "
  >

  <p style="
    margin-top:15px;
    font-size:20px;
    line-height:1.7;
  ">

    💙 Gracias por siempre estar aquí ✨

  </p>
  `;

}

// ======================================
// 🌙 MODO NOCHE
// ======================================

function modoNoche() {

  const hora =
    new Date().getHours();

  if (hora >= 19) {

    document.body.style.filter =
      "brightness(0.9)";

  }

}

// ======================================
// ✨ TEXTO MAQUINA
// ======================================

function textoMaquina() {

  const frases = [

    "💙 Bienvenido al evento",

    "🎂 Feliz cumpleaños",

    "✨ Todo esto fue hecho con cariño"

  ];

  const texto =
    document.getElementById(
      "randomMsg"
    );

  if (!texto) return;

  let frase = 0;
  let letra = 0;

  function escribir() {

    if (
      letra <
      frases[frase].length
    ) {

      texto.innerHTML +=
        frases[frase].charAt(
          letra
        );

      letra++;

      setTimeout(
        escribir,
        60
      );

    }

    else {

      setTimeout(() => {

        texto.innerHTML = "";

        letra = 0;

        frase++;

        if (
          frase >=
          frases.length
        ) {

          frase = 0;

        }

        escribir();

      }, 2500);

    }

  }

  escribir();

}

// ======================================
// 🎂 MINI PASTEL
// ======================================

function miniPastel() {

  const pastel =
    document.createElement(
      "div"
    );

  pastel.innerHTML =
    "🎂";

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
// 💌 CARTAS SECRETAS
// ======================================

function cartasSecretas() {

  let clicks = 0;

  document.addEventListener(

    "click",

    () => {

      clicks++;

      if (clicks === 15) {

        mostrarCarta(

          "💌 Carta Desbloqueada",

          "✨ Gracias por visitar esta mini actualización"

        );

      }

      if (clicks === 30) {

        mostrarCarta(

          "🎁 Nueva Sorpresa",

          "💙 Espero que te guste este pequeño evento"

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

  estiloPopup(carta);

  document.body.appendChild(
    carta
  );

  setTimeout(() => {

    carta.remove();

  }, 5000);

}

// ======================================
// 👀 MODO SECRETO
// ======================================

function modoSecreto() {

  let clicks = 0;

  document.addEventListener(

    "click",

    () => {

      clicks++;

      if (clicks >= 50) {

        document.body.style.filter =
          "hue-rotate(120deg)";

        mostrarCarta(

          "👀 MODO SECRETO",

          "✨ Has desbloqueado el modo secreto"

        );

      }

    }

  );

}

// ======================================
// 👀 TEASER FINAL
// ======================================

function teaserFinal() {

  setTimeout(() => {

    mostrarCarta(

      "👀 PROXIMA ACTUALIZACION",

      "🛠️ Nuevas sorpresas se están preparando..."

    );

  }, 12000);

}

// ======================================
// 🎨 ESTILO POPUP
// ======================================

function estiloPopup(box) {

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

  width:90%;
  max-width:500px;

  box-shadow:
    0 0 25px #74b9ff,
    0 0 40px #00d2ff;

  animation:
    aparecerClick 0.5s ease;
  `;

}
// ======================================
// 🎈 EDAD GIGANTE
// ======================================

window.addEventListener(

  "load",

  () => {

    const edad =
      document.createElement(
        "div"
      );

    edad.id =
      "edadGigante";

    edad.innerHTML =
    `
    🎂 22 🎂
    `;

    document.body.appendChild(
      edad
    );

    setTimeout(() => {

      edad.style.transition =
        "1s";

      edad.style.opacity =
        "0";

    }, 3000);

    setTimeout(() => {

      edad.remove();

    }, 4000);

  }

);

// ======================================
// 🎂 BOTON MENSAJE
// ======================================

const btnCumple =
  document.getElementById(
    "btnCumple"
  );

if (btnCumple) {

  btnCumple.addEventListener(

    "click",

    () => {

      const box =
        document.createElement(
          "div"
        );

      box.innerHTML =
      `
      <h2>🎂 Feliz Cumpleaños 🎂</h2>

      <p>

        💙 Espero que tengas
        un día increíble ✨

      </p>
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

      z-index:999999;

      text-align:center;

      box-shadow:
        0 0 25px #74b9ff,
        0 0 40px #00d2ff;
      `;

      document.body.appendChild(
        box
      );

      setTimeout(() => {

        box.remove();

      }, 5000);

    }

  );

}

// ======================================
// 👀 FRASES RANDOM
// ======================================

const frasesCumple = [

  "🎂 Hoy manda el cumpleañero 😎",

  "🎈 Evento especial activado",

  "💙 Gracias por visitar la update",

  "✨ Mini fiesta cargando...",

  "🎁 Sorpresas desbloqueadas"

];

const texto =
  document.getElementById(
    "randomMsg"
  );

if (texto) {

  let i = 0;

  setInterval(() => {

    texto.style.opacity =
      "0";

    setTimeout(() => {

      texto.innerHTML =
        frasesCumple[i];

      texto.style.opacity =
        "1";

      i++;

      if (
        i >=
        frasesCumple.length
      ) {

        i = 0;

      }

    }, 300);

  }, 3500);

}
// ======================================
// 💌 CODIGO SECRETO
// ======================================

function codigoSecreto() {

  let codigo = "";

  document.addEventListener(

    "keydown",

    (e) => {

      codigo += e.key.toLowerCase();

      // 👀 limitar
      codigo = codigo.slice(-7);

      // 🎂 codigo secreto
      if (codigo.includes("cumple")) {

        const carta =
          document.createElement("div");

        carta.innerHTML =
        `
        <div style="
          font-size:1.2em;
          margin-bottom:20px;
        ">
          💌 CODIGO SECRETO
        </div>

        <div style="
          font-size:0.5em;
          line-height:1.8;
        ">

          🎂 Encontraste
          el mensaje oculto ✨

          <br><br>

          💖 Feliz cumpleaños
          al mejor cuñado 🎈

          <br><br>

          👀 Easter egg desbloqueado

        </div>
        `;

        carta.style =
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

        font-size:2.5em;

        box-shadow:
          0 0 25px #00d2ff,
          0 0 45px white;
        `;

        document.body.appendChild(
          carta
        );

        setTimeout(() => {

          carta.style.transition =
            "1s";

          carta.style.opacity =
            "0";

        }, 5000);

        setTimeout(() => {

          carta.remove();

        }, 6200);

      }

    }

  );

}

// ======================================
// 🎵 MUSICA SECRETA
// ======================================

function musicaSecreta() {

  let clicks = 0;

  document.addEventListener(

    "click",

    () => {

      clicks++;

      // 👀 activar
      if (clicks === 25) {

        const audio =
          new Audio(
            "https://youtu.be/ixZO0j_LCj4?si=ERm6Ki-wIiL4FRWg"
          );

        audio.volume = 0.5;

        audio.play();

        const aviso =
          document.createElement("div");

        aviso.innerHTML =
        `
        🎵 Las Mañanitas activadas 🎂
        `;

        aviso.style =
        `
        position:fixed;

        top:20px;
        left:50%;

        transform:
          translateX(-50%);

        background:black;

        color:white;

        padding:15px 25px;

        border-radius:20px;

        z-index:999999;

        box-shadow:
          0 0 20px #00d2ff;
        `;

        document.body.appendChild(
          aviso
        );

        setTimeout(() => {

          aviso.remove();

        }, 4000);

      }

    }

  );

}

// ======================================
// ✨ MODO NEON
// ======================================

function modoNeon() {

  let clicks = 0;

  document.addEventListener(

    "click",

    () => {

      clicks++;

      if (clicks === 50) {

        document.body.style.filter =
          "hue-rotate(180deg) saturate(1.8)";

        const neon =
          document.createElement("div");

        neon.innerHTML =
        `
        ✨ MODO NEON ACTIVADO ✨
        `;

        neon.style =
        `
        position:fixed;

        top:50%;
        left:50%;

        transform:
          translate(-50%,-50%);

        background:black;

        color:#00ffcc;

        padding:25px;

        border-radius:25px;

        font-size:2em;

        z-index:999999;

        box-shadow:
          0 0 25px #00ffcc;
        `;

        document.body.appendChild(
          neon
        );

        setTimeout(() => {

          neon.remove();

        }, 4000);

      }

    }

  );

}

// ======================================
// 🎂 CONTADOR FALSO
// ======================================

function contadorFake() {

  const fake =
    document.createElement("div");

  fake.innerHTML =
  `
  🎂 Calculando nivel del cumpleañero...
  `;

  fake.style =
  `
  position:fixed;

  bottom:20px;
  right:20px;

  background:
    rgba(0,0,0,0.75);

  color:white;

  padding:14px 20px;

  border-radius:18px;

  font-size:18px;

  z-index:99999;

  box-shadow:
    0 0 15px #74b9ff;
  `;

  document.body.appendChild(
    fake
  );

}

// ======================================
// 🚀 ACTIVAR
// ======================================

codigoSecreto();

musicaSecreta();

modoNeon();

contadorFake();

// ======================================
// 👀 GLITCHES SOLO JS
// ======================================

function glitches() {

  setInterval(() => {

    // 👀 probabilidad
    if (Math.random() > 0.7) {

      // 📺 EFECTO PANTALLA
      document.body.style.transition =
        "0.1s";

      document.body.style.transform =
        "translate(3px,-3px)";

      document.body.style.filter =
        "hue-rotate(180deg)";

      // ⚠️ TEXTO GLITCH
      const bug =
        document.createElement(
          "div"
        );

      const mensajes = [

        "⚠️ SYSTEM ERROR",

        "👀 GLITCH DETECTADO",

        "🎂 ERROR_CUMPLE",

        "📺 SIGNAL LOST",

        "💀 ???"

      ];

      bug.innerHTML =
        mensajes[
          Math.floor(
            Math.random() *
            mensajes.length
          )
        ];

      bug.style =
      `
      position:fixed;

      top:${Math.random()*90}%;

      left:${Math.random()*90}%;

      color:#00ffcc;

      font-size:2em;

      z-index:999999;

      font-family:monospace;

      text-shadow:
        0 0 15px white;
      `;

      document.body.appendChild(
        bug
      );

      // 👀 FLASH
      const flash =
        document.createElement(
          "div"
        );

      flash.style =
      `
      position:fixed;

      inset:0;

      background:white;

      opacity:0.08;

      z-index:999998;

      pointer-events:none;
      `;

      document.body.appendChild(
        flash
      );

      // ✨ QUITAR
      setTimeout(() => {

        document.body.style.transform =
          "translate(0px,0px)";

        document.body.style.filter =
          "none";

        bug.remove();

        flash.remove();

      }, 180);

    }

  }, 5000);

}

// 🚀 ACTIVAR
glitches();
// ======================================
// 👀 TEXTOS OCULTOS
// ======================================

function textosSecretos() {

  const palabras = [

    "evento",
    "fase",
    "final",
    "cumple",
    "protocolo",
    "sistema",
    "activo",
    "error",
    "update",
    "secreto"

  ];

  // 👀 mensaje oculto real
  const mensajeFinal =
    [
      "evento",
      "final",
      "cumple"
    ];

  let encontrados = [];

  setInterval(() => {

    // ✨ palabra random
    const palabra =
      palabras[
        Math.floor(
          Math.random() *
          palabras.length
        )
      ];

    const texto =
      document.createElement(
        "div"
      );

    texto.innerHTML =
      palabra;

    texto.style =
    `
    position:fixed;

    top:${Math.random()*90}%;

    left:${Math.random()*90}%;

    color:white;

    font-size:1.5em;

    z-index:999999;

    opacity:0.8;

    font-family:monospace;

    text-shadow:
      0 0 10px #00d2ff;
    `;

    document.body.appendChild(
      texto
    );

    // 👀 guardar palabras correctas
    if (
      mensajeFinal.includes(
        palabra
      )
    ) {

      encontrados.push(
        palabra
      );

    }

    // 🎂 mensaje completo
    if (
      encontrados.length >= 3
    ) {

      const final =
        document.createElement(
          "div"
        );

      final.innerHTML =
      `
      👀 MENSAJE DESCIFRADO:

      <br><br>

      🎂 EVENTO FINAL CUMPLE 🎂
      `;

      final.style =
      `
      position:fixed;

      top:50%;
      left:50%;

      transform:
        translate(-50%,-50%);

      background:black;

      color:#00ffcc;

      padding:30px;

      border-radius:25px;

      text-align:center;

      font-size:2em;

      z-index:999999;

      box-shadow:
        0 0 25px #00ffcc;
      `;

      document.body.appendChild(
        final
      );

      encontrados = [];

      setTimeout(() => {

        final.remove();

      }, 5000);

    }

    // ✨ desaparecer palabra
    setTimeout(() => {

      texto.style.transition =
        "1s";

      texto.style.opacity =
        "0";

    }, 2000);

    setTimeout(() => {

      texto.remove();

    }, 3000);

  }, 2500);

}

// 🚀 ACTIVAR
textosSecretos();
// ======================================
// 👀 ULTRA GLITCHES
// ======================================

function ultraGlitches() {

  const mensajes = [

    "⚠️ ERROR",

    "👀 SIGNAL LOST",

    "🎂 EVENT_404",

    "💀 ???",

    "📺 DATA CORRUPTED",

    "🛠️ UPDATE FAILED",

    "🔒 ACCESS DENIED",

    "🎈 cumpleaños.exe",

    "👁️ watching...",

    "⚠️ protocolo_final"

  ];

  setInterval(() => {

    // 👀 MUCHOS GLITCHES
    for (let i = 0; i < 8; i++) {

      const glitch =
        document.createElement(
          "div"
        );

      glitch.innerHTML =
        mensajes[
          Math.floor(
            Math.random() *
            mensajes.length
          )
        ];

      glitch.style =
      `
      position:fixed;

      top:${Math.random()*100}%;

      left:${Math.random()*100}%;

      color:${
        Math.random() > 0.5
        ? "#00ffcc"
        : "#ff004c"
      };

      font-size:${
        15 + Math.random()*30
      }px;

      z-index:999999;

      font-family:monospace;

      opacity:0.9;

      transform:
        rotate(${
          Math.random()*20-10
        }deg);

      text-shadow:
        0 0 10px white,
        0 0 20px currentColor;
      `;

      document.body.appendChild(
        glitch
      );

      // ✨ DESAPARECER
      setTimeout(() => {

        glitch.style.transition =
          "0.3s";

        glitch.style.opacity =
          "0";

        glitch.style.transform =
          "scale(1.5)";

      }, 250);

      setTimeout(() => {

        glitch.remove();

      }, 600);

    }

    // 📺 MOVER PANTALLA
    document.body.style.transform =
      `
      translate(
        ${Math.random()*8-4}px,
        ${Math.random()*8-4}px
      )
      `;

    // 🌈 COLOR LOCO
    document.body.style.filter =
      `
      hue-rotate(
        ${Math.random()*360}deg
      )
      contrast(1.2)
      `;

    // ⚡ FLASH
    const flash =
      document.createElement(
        "div"
      );

    flash.style =
    `
    position:fixed;

    inset:0;

    background:${
      Math.random() > 0.5
      ? "white"
      : "#00ffcc"
    };

    opacity:0.05;

    z-index:999998;

    pointer-events:none;
    `;

    document.body.appendChild(
      flash
    );

    // 👀 QUITAR
    setTimeout(() => {

      document.body.style.transform =
        "translate(0px,0px)";

      document.body.style.filter =
        "none";

      flash.remove();

    }, 180);

  }, 3500);

}

// 🚀 ACTIVAR
ultraGlitches();
// ======================================
// 👀 BOTON SPOILER
// ======================================

function spoilerSecreto() {

  // 🎮 CREAR BOTON
  const btn =
    document.createElement(
      "button"
    );

  btn.innerHTML =
    "👀";

  btn.style =
  `
  position:fixed;

  bottom:20px;

  left:20px;

  width:60px;

  height:60px;

  border:none;

  border-radius:50%;

  background:#000;

  color:white;

  font-size:24px;

  cursor:pointer;

  opacity:0;

  transition:0.3s;

  z-index:999999;

  box-shadow:
    0 0 20px #00d2ff;
  `;

  document.body.appendChild(
    btn
  );

  // ======================================
  // 👀 APARECER EN ESQUINA
  // ======================================

  document.addEventListener(

    "mousemove",

    (e) => {

      // 👀 detectar esquina
      if (

        e.clientX <= 120 &&

        e.clientY >=
        window.innerHeight - 120

      ) {

        btn.style.opacity =
          "1";

        btn.style.transform =
          "scale(1.1)";

      }

      else {

        btn.style.opacity =
          "0";

        btn.style.transform =
          "scale(0.7)";

      }

    }

  );

  // ======================================
  // 🎂 SPOILER
  // ======================================

  btn.addEventListener(

    "click",

    () => {

      const spoiler =
        document.createElement(
          "div"
        );

      spoiler.innerHTML =
      `
      <div style="
        font-size:1.1em;
        margin-bottom:20px;
      ">

        👀 SPOILER

      </div>

      <div style="
        font-size:0.5em;
        line-height:1.8;
      ">

        ⚠️ next_update.rar

        <br><br>

        🎮 Nuevos secretos
        están en desarrollo...

        <br><br>

        💙 fase_2.exe detectado

      </div>
      `;

      spoiler.style =
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

      max-width:650px;

      box-shadow:
        0 0 25px #00d2ff,
        0 0 45px white;
      `;

      document.body.appendChild(
        spoiler
      );

      // ✨ GLITCH
      document.body.style.filter =
        "hue-rotate(180deg)";

      setTimeout(() => {

        document.body.style.filter =
          "none";

      }, 400);

      // ❌ cerrar
      setTimeout(() => {

        spoiler.style.transition =
          "1s";

        spoiler.style.opacity =
          "0";

      }, 6000);

      setTimeout(() => {

        spoiler.remove();

      }, 7000);

    }

  );

}

// 🚀 ACTIVAR
spoilerSecreto();
// ======================================
// 👀 CUENTA REGRESIVA OCULTA
// ======================================

function cuentaOculta() {

  const box =
    document.createElement(
      "div"
    );

  box.style =
  `
  position:fixed;

  top:15px;

  right:15px;

  background:
    rgba(0,0,0,0.7);

  color:#00ffcc;

  padding:12px 18px;

  border-radius:15px;

  font-family:monospace;

  font-size:14px;

  z-index:999999;

  opacity:0;

  transition:0.5s;

  box-shadow:
    0 0 15px #00ffcc;
  `;

  document.body.appendChild(
    box
  );

  // 👀 aparecer aleatoriamente
  setInterval(() => {

    const futuro =
      new Date(
        "2026-07-20T00:00:00"
      ).getTime();

    const ahora =
      new Date().getTime();

    const diff =
      futuro - ahora;

    const dias =
      Math.floor(
        diff /
        (1000*60*60*24)
      );

    box.innerHTML =
    `
    👀 NEXT UPDATE:

    <br><br>

    ${dias} dias restantes
    `;

    box.style.opacity =
      "1";

    setTimeout(() => {

      box.style.opacity =
        "0";

    }, 4000);

  }, 18000);

}

// ======================================
// 🎮 MODO CAOS
// ======================================

function modoCaos() {

  let clicks = 0;

  document.addEventListener(

    "click",

    () => {

      clicks++;

      // 👀 activar caos
      if (clicks >= 100) {

        const mensajes = [

          "⚠️ ERROR",

          "🎂 CAOS MODE",

          "👀 SYSTEM FAILURE",

          "💀 corrupted_data",

          "📺 glitch.exe"

        ];

        // 🌈 colores locos
        document.body.style.filter =
          `
          hue-rotate(
            ${Math.random()*360}deg
          )
          saturate(2)
          `;

        // 📺 mover pantalla
        document.body.style.transform =
          `
          translate(
            ${Math.random()*8-4}px,
            ${Math.random()*8-4}px
          )
          `;

        // 👀 texto random
        const texto =
          document.createElement(
            "div"
          );

        texto.innerHTML =
          mensajes[
            Math.floor(
              Math.random() *
              mensajes.length
            )
          ];

        texto.style =
        `
        position:fixed;

        top:${Math.random()*100}%;

        left:${Math.random()*100}%;

        color:white;

        font-size:2em;

        font-family:monospace;

        z-index:999999;

        text-shadow:
          0 0 15px #ff004c;
        `;

        document.body.appendChild(
          texto
        );

        setTimeout(() => {

          texto.remove();

          document.body.style.transform =
            "translate(0px,0px)";

        }, 700);

      }

    }

  );

}

// ======================================
// 💙 MENSAJE OCULTO
// ======================================

function mensajeOculto() {

  let tiempo = 0;

  setInterval(() => {

    tiempo++;

    // 👀 despues de explorar mucho
    if (tiempo >= 90) {

      const msg =
        document.createElement(
          "div"
        );

      msg.innerHTML =
      `
      💙 Gracias por explorar
      toda esta actualización...

      <br><br>

      👀 Hay más secretos
      de los que parecen
      `;

      msg.style =
      `
      position:fixed;

      top:50%;

      left:50%;

      transform:
        translate(-50%,-50%);

      background:
        rgba(0,0,0,0.94);

      color:white;

      padding:30px;

      border-radius:25px;

      text-align:center;

      z-index:999999;

      font-size:2em;

      width:90%;

      max-width:650px;

      box-shadow:
        0 0 25px #00d2ff;
      `;

      document.body.appendChild(
        msg
      );

      setTimeout(() => {

        msg.style.transition =
          "1s";

        msg.style.opacity =
          "0";

      }, 6000);

      setTimeout(() => {

        msg.remove();

      }, 7000);

      tiempo = -999999;

    }

  }, 1000);

}

// ======================================
// 📂 TERMINAL FALSA
// ======================================

function terminalFake() {

  document.addEventListener(

    "keydown",

    (e) => {

      // 👀 abrir con T
      if (
        e.key.toLowerCase() ===
        "t"
      ) {

        const terminal =
          document.createElement(
            "div"
          );

        terminal.innerHTML =
        `
        <div style="
          color:#00ffcc;
          margin-bottom:15px;
        ">
          📂 dev_terminal.exe
        </div>

        <div>

          loading secrets...

          <br>

          loading glitches...

          <br>

          next_update.rar found

          <br>

          easter_egg.exe loaded

          <br>

          system_celebration.dll

          <br><br>

          👀 hidden files detected...

        </div>
        `;

        terminal.style =
        `
        position:fixed;

        top:50%;

        left:50%;

        transform:
          translate(-50%,-50%);

        background:black;

        color:white;

        padding:30px;

        border-radius:20px;

        font-family:monospace;

        font-size:1.2em;

        z-index:999999;

        width:90%;

        max-width:650px;

        box-shadow:
          0 0 25px #00ffcc;
        `;

        document.body.appendChild(
          terminal
        );

        setTimeout(() => {

          terminal.remove();

        }, 7000);

      }

    }

  );

}

// 🚀 ACTIVAR TODO
cuentaOculta();

modoCaos();

mensajeOculto();

terminalFake();
// ======================================
// 👀 TEXTO SIGUIENDO EL MOUSE
// ======================================

const ojoTexto =
document.createElement("div");

ojoTexto.innerHTML =
"👀 te estoy viendo...";

ojoTexto.style =
`
position:fixed;

left:0;
top:0;

font-size:18px;

color:#00ffcc;

pointer-events:none;

z-index:999999;

text-shadow:
  0 0 10px #00ffcc;

transition:
  transform 0.08s linear;
`;

document.body.appendChild(
  ojoTexto
);

// 👀 SEGUIR MOUSE
document.addEventListener(

  "mousemove",

  (e) => {

    ojoTexto.style.transform =
    `
    translate(
      ${e.clientX + 20}px,
      ${e.clientY + 20}px
    )
    `;

  }

);

// ======================================
// 🧠 MENSAJE EN CONSOLA
// ======================================

console.log(
`
🧠 no deberias estar aqui...

[ system ] hidden files loaded
[ warning ] secrets detected
[ info ] next update in progress...

👀
`
);
// ======================================
// 👀 MENSAJES GLITCH DEL DESARROLLADOR
// ======================================

const mensajesGlitch = [

  "[DEV] cargando nueva actualización...",

  "[ERROR] versión móvil inestable",

  "[DEV] archivos secretos detectados",

  "[ADVERTENCIA] glitches aumentando...",

  "[DEV] evento oculto encontrado",

  "[SISTEMA] update_final.rar cargado",

  "[DEV] easter eggs desbloqueados",

  "[INFO] modo desarrollador activo"

];

// ======================================
// ✨ GLITCHES RANDOM
// ======================================

function glitchesDev() {

  setInterval(() => {

    const glitch =
      document.createElement(
        "div"
      );

    // 👀 mensaje random
    glitch.innerHTML =
      mensajesGlitch[
        Math.floor(
          Math.random() *
          mensajesGlitch.length
        )
      ];

    glitch.style =
    `
    position:fixed;

    top:${Math.random()*100}%;

    left:${Math.random()*100}%;

    color:#00ffcc;

    font-size:${16 + Math.random()*20}px;

    font-family:monospace;

    z-index:999999;

    opacity:0.9;

    pointer-events:none;

    text-shadow:
      3px 0 red,
      -3px 0 blue,
      0 0 15px #00ffcc;

    transform:
      skew(
        ${Math.random()*20-10}deg
      );

    animation:
      glitchAnim 0.15s infinite;
    `;

    document.body.appendChild(
      glitch
    );

    // 👀 temblor pantalla
    document.body.style.transform =
    `
    translate(
      ${Math.random()*10-5}px,
      ${Math.random()*10-5}px
    )
    `;

    // ✨ quitar glitch
    setTimeout(() => {

      glitch.remove();

      document.body.style.transform =
        "translate(0px,0px)";

    }, 700);

  }, 2500);

}

// 🚀 ACTIVAR
glitchesDev();

// ======================================
// 📺 ANIMACION GLITCH
// ======================================

const style =
document.createElement("style");

style.innerHTML =
`
@keyframes glitchAnim {

  0%{
    transform:
      translate(0px,0px);
  }

  20%{
    transform:
      translate(-3px,2px);
  }

  40%{
    transform:
      translate(3px,-2px);
  }

  60%{
    transform:
      translate(-2px,-1px);
  }

  80%{
    transform:
      translate(2px,1px);
  }

  100%{
    transform:
      translate(0px,0px);
  }

}
`;

document.head.appendChild(
  style
);