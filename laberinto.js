const mapa = [

[1,1,1,1,1,1,1,1,1,1],
[1,2,0,0,0,0,1,0,3,1],
[1,0,1,1,1,0,1,0,1,1],
[1,0,0,0,1,0,0,0,0,1],
[1,1,1,0,1,1,1,1,0,1],
[1,0,0,0,0,0,0,1,0,1],
[1,0,1,1,1,1,0,1,0,1],
[1,0,0,0,0,1,0,0,0,1],
[1,1,1,1,0,1,1,1,0,1],
[1,1,1,1,1,1,1,1,1,1]

];

const game =
document.getElementById("game");

let x = 1;
let y = 1;

// 💀 enemigo
let enemigoX = 8;
let enemigoY = 7;

// ⏳ tiempo
let tiempo = 60;

const reloj =
setInterval(() => {

  tiempo--;

  document.getElementById(
    "timer"
  ).innerHTML =
  `⏳ Tiempo: ${tiempo}`;

  if (tiempo <= 0) {

    clearInterval(reloj);

    alert(
      "⌛ Tiempo agotado"
    );

    location.reload();

  }

}, 1000);

function dibujar() {

  game.innerHTML = "";

  for (
    let fila = 0;
    fila < mapa.length;
    fila++
  ) {

    for (
      let col = 0;
      col < mapa[fila].length;
      col++
    ) {

      const cell =
      document.createElement(
        "div"
      );

      cell.classList.add(
        "cell"
      );

      if (
        mapa[fila][col] === 1
      ) {

        cell.classList.add(
          "wall"
        );

      }

      else {

        cell.classList.add(
          "path"
        );

      }

      if (
        fila === y &&
        col === x
      ) {

        cell.innerHTML =
          "🔵";

      }

      else if (
        fila === enemigoY &&
        col === enemigoX
      ) {

        cell.innerHTML =
          "💀";

      }

      else if (
        mapa[fila][col] === 3
      ) {

        cell.innerHTML =
          "🚀";

      }

      game.appendChild(
        cell
      );

    }

  }

}

dibujar();

// 🎮 mover jugador
document.addEventListener(
"keydown",

(e) => {

  let nx = x;
  let ny = y;

  if (
    e.key === "ArrowUp"
  ) ny--;

  if (
    e.key === "ArrowDown"
  ) ny++;

  if (
    e.key === "ArrowLeft"
  ) nx--;

  if (
    e.key === "ArrowRight"
  ) nx++;

  if (
    mapa[ny][nx] === 1
  ) {

    alert(
      "💀 Tocaste una pared"
    );

    x = 1;
    y = 1;

    dibujar();

    return;

  }

  x = nx;
  y = ny;

  if (
    enemigoX === x &&
    enemigoY === y
  ) {

    alert(
      "💀 El guardián te atrapó"
    );

    x = 1;
    y = 1;

  }

  if (
    mapa[y][x] === 3
  ) {

    clearInterval(
      reloj
    );

    localStorage.setItem(
      "exploradorMaestro",
      "true"
    );

    alert(
      `🏆 ¡GANASTE!\n⏳ Tiempo restante: ${tiempo}s`
    );

    // 🎉 premio
    document.body.innerHTML = `
      <h1>🏆 EXPLORADOR MAESTRO</h1>

      <h2>🔓 ARCHIVO RECUPERADO</h2>

      <p>📂 next_update.rar</p>

      <p>📱 mobile_build.apk</p>

      <p>👀 Información clasificada encontrada</p>

      <br>

      <button onclick="location.reload()">
      🔄 Jugar otra vez
      </button>
    `;

    return;

  }

  dibujar();

});

// 💀 mover enemigo
let velocidad = 700;

const enemigo =
setInterval(() => {

  const movimientos = [

    [0,-1],
    [0,1],
    [-1,0],
    [1,0]

  ];

  const mov =
  movimientos[
    Math.floor(
      Math.random() *
      movimientos.length
    )
  ];

  const nx =
    enemigoX + mov[0];

  const ny =
    enemigoY + mov[1];

  if (

    mapa[ny] &&

    mapa[ny][nx] !== 1

  ) {

    enemigoX = nx;
    enemigoY = ny;

  }

  if (

    enemigoX === x &&

    enemigoY === y

  ) {

    alert(
      "💀 El guardián te atrapó"
    );

    x = 1;
    y = 1;

  }

  dibujar();

}, velocidad);