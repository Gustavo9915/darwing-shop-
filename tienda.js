function crearFlor(){
    let flor = document.createElement("div");
    flor.innerText = Math.random() > 0.5 ? "💐" : "💖";

    flor.style.position = "fixed";
    flor.style.left = Math.random() * 100 + "vw";
    flor.style.top = "-30px"
    flor.style.fontSize = "18px";
    flor.style.opacity = "0.8";
    flor.style.pointerEvents = "none";
    flor.style.transition = "transform 4s linear";

    document.body.oppendChild(flor);
    setTimeout(() =>{
        flor.style.transform = "translateY(110vh)";
    }, 10);

    setTimeout(() =>{
        flor.remove();
    }, 4000);
}
setInterval(crearFlor, 1200);
    let cupos = localStorage.getItem("cupos");

    if (cupos === null) {
        cupos = 5;
    } else {
        cupos = parseInt(cupos);
    }

    document.getElementById("cupos").innerText = cupos;

    function participar() {
        if (cupos > 0) {
            cupos--;
            localStorage.setItem("cupos", cupos);
            document.getElementById("cupos").innerText = cupos;

                window.open(
                    "https://wa.me/5215520956356?text=Quiero participar en el dibujo gratis del Día de las Madres",
                    "_blank"
                );

            if (cupos === 0) {
                alert("❌ Ya no hay cupos disponibles");
            }
             } else {
                alert("❌ Cupos agotados");
            }
        }
let fecha = new Date("May 10, 2026 00:00:00").getTime();
let intervalo = setInterval(() =>{
    let ahora  = new Date().getTime();
    let tiempo = fecha - ahora;

    if(tiempo <= 0){
        clearInterval(intervalo);
        document.getElementById("contador").innerText =
        "ya esta activo el especial de las madres";
        return;
    }
    let dias = Math.floor(tiempo / (1000 *60*60*24));
    let horas = Math.floor((tiempo % (1000*60*60*24)) / (1000*60*60));
    let minutos = Math.floor((tiempo % (1000*60*60)) / (1000*60));
    let segundos = Math.floor((tiempo % (1000*60)) / 1000);


    document.getElementById("contador").innerText =
    dias + "d " + horas + "h " + minutos  + "m " + segundos + "s";
}, 1000);
/*setTimeout(() =>{
    document.getElementById("secreto").style.display = "block";
    let suerte  = Math.random();
    if(suerte < 0.1){
        document.getElementById("codigoImg").style.display = "block";
        let extra = document.createElement("p");
        extra.innerText = "encontrasteel codigo secreto de la pagina"
        extra.style.textAlign = "center";
        extra.style.fontWeight = "bold";

        document.body.appendChild(extra);
    }
}, 8000);*/