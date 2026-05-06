function abrirArchivo(tipo){
    let visor = document.getElementById("visor");

    if(tipo === "log"){
        visor.innerHTML = `
        > iniciando sistema... <br>
        > cargando módulos... <br>
        > estado: estable ✔
        `;
    }

    else if(tipo === "temp"){
        visor.innerHTML = `
        > render en proceso... 🎨 <br>
        > datos temporales cargados <br>
        > optimización activa
        `;
    }

    else if(tipo === "secreto"){
        visor.innerHTML = `
        > acceso detectado 👀 <br>
        > desbloqueando contenido... <br>
        > bienvenido al módulo oculto
        `;
    }
}