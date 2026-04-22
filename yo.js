function calificar(mun){
    let estrellas = document.querySelectorAll(".estrellas span");
    estrellas.forEach((estrella, index) =>{
        if(index < mun){
            estrella.style.color = "gold";
        }else{
            estrella.style.color = "gray";
        }
    });
    document.getElementById("resultado").innerText =
        "Calificaste con" + mun + "estrellas"
}
function compartir(){
    let url  = window.location.href;
    if(navigator.share){
        navigator.share ({
            titlle: "mira mi pagina",
            url: url
        });
    }else{
        navigator.clipboard.writeText(url);
        alert("link copiado");
    }
}
function irArriba(){
    window.scrollTo({top: 0, behavior: `smooth`});
}