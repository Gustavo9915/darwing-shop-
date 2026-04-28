 function irArriba(){
       window.scrollTo({top: 0, behavior: `smooth`})
    }
const btn = document.getElementById("btnModo");
btn.addEventListener("click", () =>{
      document.body.classList.toggle("oscuro");
      let activo = document.body.classList.contains("oscuro");
      localStorage.setItem("modoOscuro", activo);
      btn.innerText = activo ? "☀️" : "🌙"
});
window.addEventListener("load", () =>{
      let guardado = localStorage.getItem("modoOscuro");
      if(guardado === "true"){
            document.body.classList.add("modoOscuro");
            btn.innerHTML = "☀️";
      }
});