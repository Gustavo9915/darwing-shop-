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