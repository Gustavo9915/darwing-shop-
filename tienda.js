// ======================================
// 👀 MENSAJES SECRETOS DEL DESARROLLADOR
// ======================================

function mensajesDev() {

  const logs = [

    "[DEV] iniciando sistema...",
    "[DEV] compilando update...",
    "[DEV] cargando secretos...",
    "[DEV] revisando errores...",
    "[DEV] optimizando version movil...",
    "[DEV] preparando nueva experiencia...",
    "[DEV] sincronizando archivos...",
    "[DEV] cargando easter eggs...",
    "[DEV] fase final detectada...",
    "[DEV] acceso autorizado..."
  ];

  setInterval(() => {

    const msg =
      document.createElement("div");

    msg.innerHTML =
      logs[Math.floor(
        Math.random() *
        logs.length
      )];

    msg.style = `
      position:fixed;
      top:${Math.random()*85}%;
      left:${Math.random()*85}%;

      color:#00ffcc;
      font-family:monospace;
      font-size:${14 + Math.random()*10}px;

      z-index:999999;
      pointer-events:none;

      opacity:0.9;

      text-shadow:
      2px 0 red,
      -2px 0 blue,
      0 0 15px #00ffcc;
    `;

    document.body.appendChild(msg);

    setTimeout(() => {

      msg.style.transition =
        "0.5s";

      msg.style.opacity =
        "0";

    }, 1800);

    setTimeout(() => {

      msg.remove();

    }, 2500);

  }, 6000);

}

// ======================================
// ⚠️ DEV LOGS OCULTOS
// ======================================

function devLogs() {

  const mensajes = [

    "update_final.rar 98%",
    "mobile_update.rar 40%",
    "nuevos secretos detectados",
    "fase_final.exe ejecutandose",
    "glitches cargados",
    "evento oculto preparado",
    "spoiler bloqueado",
    "next_update.rar protegido"
  ];

  setInterval(() => {

    if (Math.random() > 0.5) {

      const log =
        document.createElement("div");

      log.innerHTML =
        mensajes[Math.floor(
          Math.random() *
          mensajes.length
        )];

      log.style = `
        position:fixed;

        bottom:20px;
        left:20px;

        color:#00ffcc;

        font-family:monospace;

        background:
        rgba(0,0,0,0.8);

        padding:10px;

        border-radius:10px;

        z-index:999999;

        box-shadow:
        0 0 15px #00ffcc;
      `;

      document.body.appendChild(log);

      setTimeout(() => {

        log.remove();

      }, 3000);

    }

  }, 12000);

}

// ======================================
// 👀 SPOILER RANDOM
// ======================================

function spoilerRandom() {

  const spoilers = [

    "👀 algo grande se acerca...",
    "🛠️ nueva mecanica detectada...",
    "🎮 sistema oculto encontrado...",
    "📂 archivo secreto localizado...",
    "⚠️ spoiler bloqueado...",
    "👁️ acceso restringido...",
    "💙 gracias por apoyar el proyecto..."
  ];

  setInterval(() => {

    if (Math.random() > 0.7) {

      const spoiler =
        document.createElement("div");

      spoiler.innerHTML =
        spoilers[Math.floor(
          Math.random() *
          spoilers.length
        )];

      spoiler.style = `
        position:fixed;

        top:50%;
        left:50%;

        transform:
        translate(-50%,-50%);

        color:white;

        font-size:24px;

        font-family:monospace;

        z-index:999999;

        text-shadow:
        0 0 20px #00ffcc;
      `;

      document.body.appendChild(spoiler);

      setTimeout(() => {

        spoiler.remove();

      }, 1800);

    }

  }, 15000);

}

// ======================================
// 🧠 MENSAJE EN CONSOLA
// ======================================

console.log(`

██████╗ ███████╗██╗   ██╗
██╔══██╗██╔════╝██║   ██║
██║  ██║█████╗  ██║   ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝
██████╔╝███████╗ ╚████╔╝
╚═════╝ ╚══════╝  ╚═══╝

[ DEV LOG ]

Proyecto principal: 98%
Version movil: 40%

Estado:
✔ estable
✔ optimizado
✔ secretos activos

👀 gracias por explorar

`);

// ======================================
// 🚀 ACTIVAR
// ======================================

mensajesDev();
devLogs();
spoilerRandom();
// ==========================
// 👀 BOTON SECRETO GLOBAL
// ==========================

function crearBotonSecreto(id) {

  // ya encontrado
  if (
    localStorage.getItem(
      "secreto_" + id
    )
  ) return;

  const btn =
    document.createElement(
      "button"
    );

  btn.innerHTML = "👀";

  btn.style = `
  position:fixed;

  left:${10 + Math.random()*80}%;

  top:${10 + Math.random()*80}%;

  width:45px;
  height:45px;

  border:none;

  border-radius:50%;

  background:
  rgba(255,255,255,0.05);

  color:white;

  opacity:0;

  cursor:pointer;

  z-index:999999;

  transition:.3s;
  `;

  document.body.appendChild(
    btn
  );

  document.addEventListener(
    "mousemove",
    (e) => {

      const rect =
      btn.getBoundingClientRect();

      const distancia =
      Math.hypot(

      e.clientX -
      (rect.left + rect.width/2),

      e.clientY -
      (rect.top + rect.height/2)

      );

      btn.style.opacity =
      distancia < 120
      ? "1"
      : "0";

    }
  );

  btn.addEventListener(
    "click",
    () => {

      localStorage.setItem(
        "secreto_" + id,
        "true"
      );

      btn.remove();

      alert(
        `🔓 Secreto ${id}/5 encontrado`
      );

      verificarSecretos();

    }
  );

}

function verificarSecretos() {

  let encontrados = 0;

  for(
    let i = 1;
    i <= 5;
    i++
  ){

    if(
      localStorage.getItem(
        "secreto_" + i
      )
    ){

      encontrados++;

    }

  }

  if(
    encontrados === 5
  ){

    localStorage.setItem(
      "laberintoDesbloqueado",
      "true"
    );

    alert(
      "🏆 Has encontrado todos los secretos\n\n🎮 Minijuego desbloqueado"
    );

    window.location.href =
    "laberinto.html";

  }

}