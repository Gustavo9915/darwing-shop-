
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