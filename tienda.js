// ======================================
// 🇲🇽 UPDATE INDEPENDENCIA 2026
// ======================================

// Fecha del lanzamiento
const fechaLanzamiento = new Date("September 16, 2026 00:00:00");

// ======================================
// ⏳ CUENTA REGRESIVA
// ======================================

function cuentaRegresiva() {

    const hoy = new Date();

    const diferencia =
        fechaLanzamiento - hoy;

    const dias =
        Math.max(
            0,
            Math.floor(
                diferencia /
                (1000 * 60 * 60 * 24)
            )
        );

    return dias;

}

// ======================================
// 👀 MENSAJES SECRETOS DEL DESARROLLADOR
// ======================================

function mensajesDev() {

    const dias = cuentaRegresiva();

    const logs = [

        "[DEV] iniciando Update Independencia...",
        "[DEV] compilando update del 16 de septiembre...",
        "[DEV] preparando fuegos artificiales...",
        "[DEV] creando nuevos secretos...",
        "[DEV] optimizando version movil...",
        "[DEV] agregando mejoras visuales...",
        "[DEV] cargando evento patrio...",
        "[DEV] generando trailer 2...",
        "[DEV] ocultando archivos secretos...",
        "[DEV] faltan " + dias + " dias..."

    ];

    setInterval(() => {

        const msg =
            document.createElement("div");

        msg.innerHTML =
            logs[
                Math.floor(
                    Math.random() *
                    logs.length
                )
            ];

        msg.style = `
            position:fixed;
            top:${Math.random()*85}%;
            left:${Math.random()*85}%;

            color:${
                ["#00ff66","#ffffff","#ff3333"][
                    Math.floor(Math.random()*3)
                ]
            };

            font-family:monospace;

            font-size:${14 + Math.random()*10}px;

            z-index:999999;

            pointer-events:none;

            opacity:.9;

            text-shadow:
            0 0 15px white;
        `;

        document.body.appendChild(msg);

        setTimeout(()=>{

            msg.style.transition=".5s";

            msg.style.opacity="0";

        },1800);

        setTimeout(()=>{

            msg.remove();

        },2500);

    },6000);

}

// ======================================
// ⚠️ DEV LOGS
// ======================================

function devLogs() {

    setInterval(()=>{

        if(Math.random()>0.5){

            const dias =
                cuentaRegresiva();

            const mensajes=[

                "update_independencia.rar 35%",
                "calidad_visual 98%",
                "evento patrio preparado",
                "trailer_02.mp4 listo",
                "spoiler bloqueado",
                "nuevas imagenes cargadas",
                "version movil optimizada",
                "faltan "+dias+" dias",
                "16_sep_update.exe",
                "secretos activos"

            ];

            const log =
                document.createElement("div");

            log.innerHTML =
                mensajes[
                    Math.floor(
                        Math.random()*
                        mensajes.length
                    )
                ];

            log.style=`
                position:fixed;

                bottom:20px;
                left:20px;

                background:rgba(0,0,0,.85);

                color:#00ff66;

                font-family:monospace;

                padding:10px;

                border-radius:10px;

                box-shadow:
                0 0 15px #00ff66;

                z-index:999999;
            `;

            document.body.appendChild(log);

            setTimeout(()=>{

                log.remove();

            },3000);

        }

    },12000);

}

// ======================================
// 👀 SPOILERS RANDOM
// ======================================

function spoilerRandom(){

    setInterval(()=>{

        if(Math.random()>0.7){

            const dias =
                cuentaRegresiva();

            const spoilers=[

                "🇲🇽 La Update de Independencia se acerca...",
                "🎆 Nuevos efectos detectados...",
                "👀 Nuevas funciones preparadas...",
                "📂 Archivo secreto encontrado...",
                "🎬 El segundo trailer esta casi listo...",
                "🔒 La fecha ya fue confirmada...",
                "⏳ Faltan "+dias+" dias...",
                "💙 Gracias por apoyar el proyecto."

            ];

            const spoiler =
                document.createElement("div");

            spoiler.innerHTML=
                spoilers[
                    Math.floor(
                        Math.random()*
                        spoilers.length
                    )
                ];

            spoiler.style=`
                position:fixed;

                top:50%;
                left:50%;

                transform:
                translate(-50%,-50%);

                color:white;

                font-size:24px;

                font-family:monospace;

                z-index:999999;

                text-shadow:
                0 0 20px #00ff66;
            `;

            document.body.appendChild(spoiler);

            setTimeout(()=>{

                spoiler.remove();

            },1800);

        }

    },15000);

}
// ======================================
// 🧠 MENSAJE EN CONSOLA
// ======================================

console.clear();

console.log(`

██████╗ ███████╗██╗   ██╗
██╔══██╗██╔════╝██║   ██║
██║  ██║█████╗  ██║   ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝
██████╔╝███████╗ ╚████╔╝
╚═════╝ ╚══════╝  ╚═══╝

====================================

🇲🇽 UPDATE INDEPENDENCIA 2026

====================================

Estado del proyecto

🛠️ Desarrollo...........35%

🎨 Calidad visual.......98%

📱 Versión móvil........Optimizada

🎬 Tráiler 2...........En desarrollo

📂 Archivos secretos...Activos

👀 Easter Eggs.........Preparados

🚀 Evento patrio.......En construcción

====================================

📅 Lanzamiento Oficial

16 DE SEPTIEMBRE 2026

====================================

💙 Gracias por explorar
el proyecto.

☕ El café sigue siendo
parte del equipo.

====================================

`);


// ======================================
// ⏳ CONTADOR EN CONSOLA
// ======================================

setInterval(() => {

    const dias = cuentaRegresiva();

    console.clear();

    console.log(`

██████╗ ███████╗██╗   ██╗
██╔══██╗██╔════╝██║   ██║
██║  ██║█████╗  ██║   ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝
██████╔╝███████╗ ╚████╔╝
╚═════╝ ╚══════╝  ╚═══╝

🇲🇽 UPDATE INDEPENDENCIA

⏳ Faltan ${dias} días.

📅 Lanzamiento:
16 de Septiembre de 2026

🛠️ Desarrollo: 35%

🎨 Calidad visual: 98%

☕ Café consumido:
Demasiado.

👀 Gracias por explorar.

`);

},10000);


// ======================================
// 🚀 ACTIVAR
// ======================================

mensajesDev();

devLogs();

spoilerRandom();
// ==========================
// 🇲🇽 BOTONES SECRETOS GLOBAL
// ==========================

const TOTAL_SECRETOS = 5;

function crearBotonSecreto(id){

    if(localStorage.getItem("secreto_"+id))
        return;

    const btn =
        document.createElement("button");

    btn.innerHTML="🇲🇽";

    btn.title="¿Qué será esto?";

    btn.style=`
        position:fixed;

        left:${10+Math.random()*80}%;

        top:${10+Math.random()*80}%;

        width:48px;
        height:48px;

        border:none;

        border-radius:50%;

        background:
        rgba(255,255,255,.05);

        color:white;

        font-size:22px;

        cursor:pointer;

        opacity:0;

        z-index:999999;

        transition:.3s;

        box-shadow:
        0 0 15px rgba(255,255,255,.4);
    `;

    document.body.appendChild(btn);

    document.addEventListener("mousemove",(e)=>{

        const rect=btn.getBoundingClientRect();

        const distancia=Math.hypot(

            e.clientX-
            (rect.left+rect.width/2),

            e.clientY-
            (rect.top+rect.height/2)

        );

        btn.style.opacity=
            distancia<130 ? "1":"0";

    });

    btn.onclick=()=>{

        localStorage.setItem(
            "secreto_"+id,
            "true"
        );

        btn.remove();

        mostrarMensaje(
            "🇲🇽 Archivo secreto "+id+
            "/"+TOTAL_SECRETOS+
            " encontrado"
        );

        verificarSecretos();

    };

}

// ==========================
// 💬 MENSAJE BONITO
// ==========================

function mostrarMensaje(texto){

    const div=
        document.createElement("div");

    div.innerHTML=texto;

    div.style=`
        position:fixed;

        top:50%;
        left:50%;

        transform:
        translate(-50%,-50%);

        padding:20px;

        border-radius:15px;

        background:
        rgba(0,0,0,.85);

        color:white;

        font-family:monospace;

        font-size:22px;

        z-index:999999;

        text-align:center;

        box-shadow:
        0 0 25px #00ff66;
    `;

    document.body.appendChild(div);

    setTimeout(()=>{

        div.style.transition=".5s";
        div.style.opacity="0";

    },1800);

    setTimeout(()=>{

        div.remove();

    },2400);

}

// ==========================
// 🏆 VERIFICAR SECRETOS
// ==========================

function verificarSecretos(){

    let encontrados=0;

    for(let i=1;i<=TOTAL_SECRETOS;i++){

        if(localStorage.getItem("secreto_"+i))
            encontrados++;

    }

    if(encontrados===TOTAL_SECRETOS){

        localStorage.setItem(
            "laberintoDesbloqueado",
            "true"
        );

        mostrarCelebracion();

    }

}

// ==========================
// 🎆 CELEBRACIÓN FINAL
// ==========================

function mostrarCelebracion(){

    const fondo=
        document.createElement("div");

    fondo.style=`
        position:fixed;
        inset:0;

        background:
        rgba(0,0,0,.9);

        z-index:999999;
    `;

    document.body.appendChild(fondo);

    const titulo=
        document.createElement("div");

    titulo.innerHTML=`
    🏆<br><br>

    ¡FELICIDADES!

    <br><br>

    Has encontrado
    los 5 archivos secretos.

    <br><br>

    🇲🇽 Evento de Independencia desbloqueado.

    <br><br>

    🎮 Accediendo al minijuego...
    `;

    titulo.style=`
        position:fixed;

        top:50%;
        left:50%;

        transform:
        translate(-50%,-50%);

        color:white;

        font-size:28px;

        text-align:center;

        font-family:monospace;

        z-index:1000000;

        text-shadow:
        0 0 20px #00ff66;
    `;

    document.body.appendChild(titulo);

    lanzarConfeti();

    setTimeout(()=>{

        window.location.href=
        "laberinto.html";

    },5000);

}

// ==========================
// 🎉 CONFETI
// ==========================

function lanzarConfeti(){

    const colores=[
        "#009739",
        "#ffffff",
        "#ce1126"
    ];

    for(let i=0;i<120;i++){

        const p=
            document.createElement("div");

        p.style=`
            position:fixed;

            width:8px;
            height:8px;

            border-radius:50%;

            background:${
                colores[
                    Math.floor(
                        Math.random()*3
                    )
                ]
            };

            left:${Math.random()*100}%;

            top:-10px;

            z-index:999999;
        `;

        document.body.appendChild(p);

        const tiempo=
            3000+
            Math.random()*3000;

        p.animate([

            {
                transform:
                "translateY(0)"
            },

            {
                transform:
                `translateY(${window.innerHeight+50}px)
                translateX(${Math.random()*200-100}px)`
            }

        ],{

            duration:tiempo,

            easing:"linear"

        });

        setTimeout(()=>{

            p.remove();

        },tiempo);

    }

}

// ==========================
// 🚀 CREAR LOS 5 SECRETOS
// ==========================

for(let i=1;i<=TOTAL_SECRETOS;i++){

    crearBotonSecreto(i);

}