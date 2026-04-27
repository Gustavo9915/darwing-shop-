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