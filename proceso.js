 function irArriba(){
       window.scrollTo({top: 0, behavior: `smooth`})
    }
 function pedido(e){
    e.preventDefault();
    document.getElementById ("msg").style.display = "block";

 }
 let estado = document.querySelector(".estado-horario");
 let ahora = new Date();
 let hora = let.gethours();
 let dia = ahora.getDay(); //0  = domingo
 if(dia ===0){
   estado.innerText = "cerrado(domingo)";
   estado.style.color = "red";
 }else if(hora >= 10 && hora < 20){
   estado.innerText = "disponible ahora";
   estado.style.color = "#00f00";
 }else{
   estado.innerText = "fuera de horario";
   estado.style.color = "orange";
 }
// ==========================
// 📂 ARCHIVO SECRETO
// ==========================

function crearArchivoSecreto(id){

  if(
    localStorage.getItem(
      "archivo_" + id
    )
  ) return;

  const archivos = [

    "📂 mobile_build.apk",
    "📂 update.rar",
    "📂 secret.dll",
    "📂 event.dat",
    "📂 core.sys"

  ];

  const archivo =
    document.createElement("div");

  archivo.innerHTML =
    archivos[id - 1];

  archivo.style = `
  position:fixed;

  left:${10 + Math.random()*70}%;

  top:${10 + Math.random()*70}%;

  background:
  rgba(0,0,0,.8);

  color:#00ffcc;

  padding:12px 18px;

  border-radius:12px;

  font-family:monospace;

  cursor:pointer;

  z-index:999999;

  box-shadow:
  0 0 15px #00ffcc;

  animation:
  flotar 3s ease-in-out infinite;
  `;

  document.body.appendChild(
    archivo
  );

  archivo.addEventListener(
    "click",
    () => {

      localStorage.setItem(
        "archivo_" + id,
        "true"
      );

      archivo.remove();

      alert(
        `📂 Archivo ${id}/5 recuperado`
      );

      verificarArchivos();

    }
  );

}
function verificarArchivos(){

  let encontrados = 0;

  for(
    let i=1;
    i<=5;
    i++
  ){

    if(
      localStorage.getItem(
        "archivo_" + i
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
      "🎮 Todos los archivos fueron recuperados.\n\n🔓 Acceso al laberinto concedido."
    );

    window.location.href =
      "laberinto.html";

  }

}