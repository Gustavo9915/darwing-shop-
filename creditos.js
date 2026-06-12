if(clicks >= 5){
    document.getElementById("secreto").style.display = "block";
    document.getElementById("mensajeSecreto").style.display = "block";
}
var countDownDate = new Date("may 10 , 2026 15:37:25").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 *24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if(distance < 0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
function calificar(mun){
   let estrellas = document.querySelectorAll(".estrellas span");
   estrellas.forEach((estrella, index ) =>{
        if(index < mun){
            estrella.style.color = "gold"
        }else{
            estrella.style.color = "gray"
        }
   });
   document.getElementById("resultado").innerText =
    "calificaste con" + mun + "estrellas";
}
function compartir(){
    let url = window.location.href;
    if(navigator.share){
        navigator.share({
            title: "mira mi pagina",
            url: url
        });
    }else{
        navigator.clipboard.writeText(url);
        alert("link copiado");
    }
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