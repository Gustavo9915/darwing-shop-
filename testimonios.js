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