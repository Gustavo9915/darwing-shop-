function subirProgreso(card) {
            let barra = card.querySelector("progress");

            let progreso = parseInt(barra.value) || 0;

            if (progreso < 100) {
            barra.value = progreso + 10;
        }
    }
    function irArriba(){
       window.scrollTo({top: 0, behavior: `smooth`})
    }
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