/* =========================================================
   DARWING SHOP — DÍA DE MUERTOS 2026
   Edición renovada: efectos unificados, ligeros y responsivos.
========================================================= */

(() => {
  "use strict";

  const CONFIG = {
    nombre: "DARWING SHOP",
    evento: "DÍA DE MUERTOS",
    maxPetalos: 18,
    maxLuces: 12,
    intervaloPetalos: 1100,
    mostrarBienvenida: true,
    bienvenidaUnaVez: true
  };

  const reducirMovimiento = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const estilos = `
    :root {
      --dm-noche: #160d24;
      --dm-vino: #35152e;
      --dm-morado: #54213c;
      --dm-naranja: #ff9418;
      --dm-dorado: #ffc66b;
      --dm-crema: #ffe8cb;
    }

    body {
      background:
        radial-gradient(ellipse at 15% 0%, rgba(126, 52, 83, .34), transparent 38%),
        radial-gradient(ellipse at 90% 20%, rgba(214, 107, 32, .13), transparent 32%),
        linear-gradient(140deg, #100b1c, #28132e 48%, #401b2b 78%, #160d24) !important;
      background-attachment: fixed !important;
      color: var(--dm-crema);
    }

    header {
      position: relative;
      overflow: hidden;
      background: linear-gradient(120deg, #170d27, #512039, #28132e) !important;
      border-bottom: 3px solid var(--dm-dorado);
      box-shadow: 0 5px 24px rgba(233, 121, 32, .28);
    }

    .titulos h1 {
      color: #ffb342;
      text-shadow: 0 0 12px rgba(255, 117, 24, .8);
    }

    footer {
      background: linear-gradient(120deg, #170d27, #35152d) !important;
      border-top: 2px solid #e98b32;
    }

    .imagen_box {
      background: linear-gradient(145deg, #29182f, #421e32) !important;
      border: 1px solid #b86a2c !important;
      border-radius: 16px;
      box-shadow: 0 8px 22px rgba(0, 0, 0, .24);
      transition: transform .3s ease, box-shadow .3s ease;
    }

    .imagen_box:hover {
      transform: translateY(-7px);
      box-shadow: 0 0 24px rgba(255, 140, 39, .34) !important;
    }

    .imagen_box img {
      transition: transform .45s ease, filter .45s ease;
    }

    .imagen_box:hover img {
      transform: scale(1.035);
      filter: brightness(1.08);
    }

    .btn_compra,
    .imagen_box button {
      transition: transform .25s ease, box-shadow .25s ease;
    }

    .btn_compra:hover,
    .imagen_box button:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 14px rgba(255, 117, 24, .5);
    }

    .dm-papel-picado {
      display: flex;
      justify-content: center;
      gap: clamp(5px, 1.4vw, 14px);
      padding: 10px 5px;
      overflow: hidden;
      background: rgba(26, 16, 37, .92);
      border-bottom: 2px dashed #e98b32;
    }

    .dm-papel-picado span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 28px;
      font-size: clamp(17px, 2.5vw, 25px);
      animation: dm-papel 2.8s ease-in-out infinite alternate;
    }

    .dm-ofrenda {
      position: relative;
      max-width: 950px;
      margin: 26px auto;
      padding: 22px clamp(14px, 4vw, 30px);
      text-align: center;
      color: #ffe8cb;
      background: linear-gradient(125deg, rgba(50, 20, 45, .96), rgba(84, 38, 45, .96));
      border: 1px solid #df8b2c;
      border-radius: 20px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, .25), 0 0 20px rgba(185, 91, 36, .18);
    }

    .dm-ofrenda h2 {
      margin: 10px 0;
      color: #ffb342;
      text-shadow: 0 0 10px rgba(255, 145, 24, .35);
    }

    .dm-ofrenda p {
      line-height: 1.8;
      margin: 10px auto;
      max-width: 720px;
    }

    .dm-ofrenda-deco {
      font-size: clamp(24px, 4vw, 36px);
      letter-spacing: 5px;
    }

    .dm-cinta {
      margin: 18px 0;
      padding: 12px 10px;
      text-align: center;
      color: white;
      font-weight: 800;
      letter-spacing: 1.5px;
      background: linear-gradient(90deg, #762d24, #bd5b20, #762d24);
      box-shadow: 0 5px 18px rgba(0, 0, 0, .18);
    }

    .dm-petalo {
      position: fixed;
      top: -45px;
      z-index: 9000;
      pointer-events: none;
      user-select: none;
      will-change: transform, opacity;
      animation: dm-caida linear forwards;
    }

    .dm-luz {
      position: fixed;
      z-index: 8999;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      pointer-events: none;
      background: #ffbd52;
      box-shadow: 0 0 12px 4px rgba(255, 117, 24, .6);
      animation: dm-luz 4s ease-in-out infinite alternate;
    }

    #dm-progreso {
      position: fixed;
      inset: 0 auto auto 0;
      z-index: 20001;
      width: 0;
      height: 4px;
      background: linear-gradient(90deg, #ff7518, #ffce66, #d94c21);
      box-shadow: 0 0 12px #ff9418;
    }

    .dm-revelar {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity .7s ease, transform .7s ease;
    }

    .dm-revelar.dm-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .dm-boton,
    .dm-cerrar {
      border: 1px solid rgba(255, 210, 140, .65);
      border-radius: 999px;
      padding: 11px 17px;
      color: #fff;
      background: linear-gradient(135deg, #a9441d, #e47720);
      font: inherit;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 5px 18px rgba(0, 0, 0, .25);
      transition: transform .2s ease, filter .2s ease;
    }

    .dm-boton:hover,
    .dm-cerrar:hover {
      transform: translateY(-2px);
      filter: brightness(1.12);
    }

    #dm-mensaje-btn {
      position: fixed;
      left: 18px;
      bottom: 18px;
      z-index: 9500;
    }

    .dm-capa {
      position: fixed;
      inset: 0;
      z-index: 30000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px;
      background: rgba(8, 5, 13, .84);
      backdrop-filter: blur(7px);
      opacity: 0;
      transition: opacity .3s ease;
    }

    .dm-capa.dm-abierta {
      opacity: 1;
    }

    .dm-ventana {
      width: min(100%, 490px);
      max-height: min(85vh, 720px);
      overflow: auto;
      padding: clamp(22px, 5vw, 34px);
      text-align: center;
      color: #ffe8cb;
      background: linear-gradient(145deg, #24102f, #54213c, #32152d);
      border: 1px solid #ffae35;
      border-radius: 22px;
      box-shadow: 0 0 35px rgba(255, 117, 24, .28);
      transform: translateY(14px) scale(.98);
      transition: transform .3s ease;
    }

    .dm-capa.dm-abierta .dm-ventana {
      transform: translateY(0) scale(1);
    }

    .dm-ventana h2 {
      color: #ffb342;
      text-shadow: 0 0 12px rgba(255, 117, 24, .55);
    }

    .dm-ventana p {
      line-height: 1.8;
    }

    .dm-emoji-grande {
      font-size: 48px;
      margin-bottom: 8px;
    }

    @keyframes dm-papel {
      from { transform: rotate(-6deg) translateY(0); }
      to { transform: rotate(6deg) translateY(3px); }
    }

    @keyframes dm-caida {
      0% { transform: translate3d(0, -5vh, 0) rotate(0); opacity: 0; }
      12% { opacity: .9; }
      100% { transform: translate3d(var(--dm-deriva), 110vh, 0) rotate(560deg); opacity: 0; }
    }

    @keyframes dm-luz {
      from { opacity: .2; transform: translateY(8px); }
      to { opacity: .95; transform: translateY(-18px); }
    }

    @media (max-width: 600px) {
      .dm-ofrenda { margin: 18px 12px; }
      #dm-mensaje-btn { left: 12px; bottom: 12px; }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: .01ms !important;
      }
      .dm-revelar { opacity: 1; transform: none; }
    }
  `;

  function agregarEstilos() {
    if (document.getElementById("dm-estilos-renovados")) return;
    const style = document.createElement("style");
    style.id = "dm-estilos-renovados";
    style.textContent = estilos;
    document.head.appendChild(style);
  }

  function crearElemento(tag, clase, texto) {
    const el = document.createElement(tag);
    if (clase) el.className = clase;
    if (texto !== undefined) el.textContent = texto;
    return el;
  }

  function mostrarModal({ titulo, contenido, boton = "Cerrar ✨", emoji = "🌼🕯️💀" }) {
    const capa = crearElemento("div", "dm-capa");
    capa.setAttribute("role", "dialog");
    capa.setAttribute("aria-modal", "true");
    capa.setAttribute("aria-label", titulo);

    const ventana = crearElemento("div", "dm-ventana");
    const decoracion = crearElemento("div", "dm-emoji-grande", emoji);
    const encabezado = crearElemento("h2", "", titulo);
    const texto = crearElemento("div");
    texto.innerHTML = contenido;

    const cerrar = crearElemento("button", "dm-cerrar", boton);
    cerrar.type = "button";

    ventana.append(decoracion, encabezado, texto, cerrar);
    capa.appendChild(ventana);
    document.body.appendChild(capa);

    const cerrarModal = () => {
      capa.classList.remove("dm-abierta");
      setTimeout(() => capa.remove(), 300);
      document.removeEventListener("keydown", teclaEscape);
    };

    const teclaEscape = (event) => {
      if (event.key === "Escape") cerrarModal();
    };

    cerrar.addEventListener("click", cerrarModal);
    capa.addEventListener("click", (event) => {
      if (event.target === capa) cerrarModal();
    });
    document.addEventListener("keydown", teclaEscape);

    requestAnimationFrame(() => capa.classList.add("dm-abierta"));
    cerrar.focus();
  }

  function bienvenida() {
    if (!CONFIG.mostrarBienvenida) return;

    const clave = "darwingShopBienvenidaDM2026";
    if (CONFIG.bienvenidaUnaVez && localStorage.getItem(clave)) return;

    mostrarModal({
      titulo: "¡ESTAMOS DE REGRESO!",
      emoji: "🎃 🕯️ 🌼",
      boton: "¡Explorar la página!",
      contenido: `
        <p>Después de varios meses sin actualizaciones, ¡por fin volvimos!</p>
        <p>Darwing Shop regresa con una decoración especial, mejoras visuales y algunos detalles escondidos para descubrir.</p>
        <p>Gracias a quienes siguen visitando y apoyando este pequeño proyecto. Cada visita y cada muestra de apoyo nos anima a continuar.</p>
        <p><strong style="color:#ffb342">Esto no es solamente una actualización: es el comienzo de una nueva etapa.</strong></p>
        <p>— El desarrollador de Darwing Shop 💛</p>
      `
    });

    localStorage.setItem(clave, "1");
  }

  function mensajeEspecial() {
    const boton = crearElemento("button", "dm-boton", "🕯️ Mensaje especial");
    boton.id = "dm-mensaje-btn";
    boton.type = "button";
    boton.addEventListener("click", () => {
      mostrarModal({
        titulo: "Una tradición que vive en nosotros",
        contenido: `
          <p>Hoy recordamos con cariño a quienes dejaron una huella en nuestras vidas.</p>
          <p>Cada vela ilumina un recuerdo, cada flor representa un camino y cada fotografía guarda una historia.</p>
          <p>Aunque pase el tiempo, los recuerdos y las enseñanzas permanecen con nosotros.</p>
          <p><strong style="color:#ffb342">Que nunca mueran los recuerdos. 🧡</strong></p>
          <p>Con cariño, <strong>Darwing Shop</strong>.</p>
        `
      });
    });
    document.body.appendChild(boton);
  }

  function decoracionSuperior() {
    const header = document.querySelector("header");
    if (!header || document.querySelector(".dm-papel-picado")) return;

    const papel = crearElemento("div", "dm-papel-picado");
    ["🏵️", "🌼", "💀", "🕯️", "🌼", "🏵️", "🕯️", "💀", "🌼", "🏵️", "🕯️"].forEach((simbolo, i) => {
      const pieza = crearElemento("span", "", simbolo);
      pieza.style.animationDelay = `${(i % 5) * .22}s`;
      papel.appendChild(pieza);
    });
    header.after(papel);
  }

  function agregarOfrendaYCinta() {
    const tienda = document.querySelector(".container");
    if (!tienda || document.querySelector(".dm-ofrenda")) return;

    const ofrenda = crearElemento("section", "dm-ofrenda");
    ofrenda.innerHTML = `
      <div class="dm-ofrenda-deco">🌼 🕯️ 💀 🕯️ 🌼</div>
      <h2>Una tradición que vive en nosotros</h2>
      <p>En este Día de Muertos celebramos nuestras raíces, recordamos a quienes dejaron huella en nuestras vidas y mantenemos vivas nuestras tradiciones.</p>
      <div class="dm-ofrenda-deco">🏵️ 🧡 🏵️</div>
    `;

    const cinta = crearElemento(
      "div",
      "dm-cinta",
      "🌼 DARWING SHOP  •  ACTUALIZACIÓN ESPECIAL 2026  •  DÍA DE MUERTOS 💀"
    );

    tienda.before(ofrenda);
    tienda.after(cinta);
  }

  function iniciarPetalos() {
    if (reducirMovimiento) return;

    const simbolos = ["🌼", "🏵️", "🍂"];
    let activos = 0;

    const crearPetalo = () => {
      if (document.hidden || activos >= CONFIG.maxPetalos) return;

      activos++;
      const petalo = crearElemento(
        "span",
        "dm-petalo",
        simbolos[Math.floor(Math.random() * simbolos.length)]
      );

      const duracion = 7 + Math.random() * 5;
      petalo.style.left = `${Math.random() * 100}vw`;
      petalo.style.fontSize = `${15 + Math.random() * 15}px`;
      petalo.style.setProperty("--dm-deriva", `${Math.random() * 150 - 75}px`);
      petalo.style.animationDuration = `${duracion}s`;

      petalo.addEventListener("animationend", () => {
        petalo.remove();
        activos--;
      }, { once: true });

      document.body.appendChild(petalo);
    };

    setInterval(crearPetalo, CONFIG.intervaloPetalos);
  }

  function iniciarLuces() {
    if (reducirMovimiento) return;

    for (let i = 0; i < CONFIG.maxLuces; i++) {
      const luz = crearElemento("div", "dm-luz");
      luz.style.left = `${Math.random() * 100}vw`;
      luz.style.top = `${Math.random() * 100}vh`;
      luz.style.animationDelay = `${Math.random() * 4}s`;
      document.body.appendChild(luz);
    }
  }

  function barraProgreso() {
    const barra = crearElemento("div");
    barra.id = "dm-progreso";
    document.body.appendChild(barra);

    let programado = false;
    const actualizar = () => {
      const recorrido = document.documentElement.scrollHeight - window.innerHeight;
      const porcentaje = recorrido > 0 ? (window.scrollY / recorrido) * 100 : 0;
      barra.style.width = `${Math.min(100, Math.max(0, porcentaje))}%`;
      programado = false;
    };

    window.addEventListener("scroll", () => {
      if (!programado) {
        requestAnimationFrame(actualizar);
        programado = true;
      }
    }, { passive: true });

    actualizar();
  }

  function revelarTarjetas() {
    const tarjetas = document.querySelectorAll(".imagen_box");
    if (!tarjetas.length) return;

    if (reducirMovimiento || !("IntersectionObserver" in window)) return;

    const observador = new IntersectionObserver((entradas, observer) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("dm-visible");
          observer.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });

    tarjetas.forEach((tarjeta) => {
      tarjeta.classList.add("dm-revelar");
      observador.observe(tarjeta);
    });
  }

  function iniciar() {
    agregarEstilos();
    decoracionSuperior();
    agregarOfrendaYCinta();
    mensajeEspecial();
    barraProgreso();
    revelarTarjetas();
    iniciarPetalos();
    iniciarLuces();

    console.info(
      `%c${CONFIG.nombre} — ${CONFIG.evento} 2026%c\n🌼 Decoración activada\n🕯️ Ofrenda cargada\n✨ Efectos visuales listos\n💛 Gracias por visitar el proyecto`,
      "color:#ffb342;font-size:16px;font-weight:bold",
      "color:#ffe8cb"
    );

    if (CONFIG.mostrarBienvenida) {
      setTimeout(bienvenida, 700);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar, { once: true });
  } else {
    iniciar();
  }
})();
