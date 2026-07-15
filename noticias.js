// Fecha
const fecha = document.getElementById("fecha");

const opciones = {
    year: "numeric",
    month: "long",
    day: "numeric"
};

fecha.textContent =
    "Homenaje • " + new Date().toLocaleDateString("es-MX", opciones);

// Animación de aparición
const contenido = document.querySelector(".contenido");

contenido.style.opacity = "0";
contenido.style.transform = "translateY(30px)";

setTimeout(() => {
    contenido.style.transition = "all 2s ease";
    contenido.style.opacity = "1";
    contenido.style.transform = "translateY(0)";
}, 300);

// Mensaje de homenaje
const mensaje = document.querySelector(".mensaje");

const texto = `
Con profundo respeto y cariño, hoy rendimos homenaje a nuestro amigo y compañero
Lozada Irving.

Irving formó parte del equipo de desarrollo de esta página y dejó una huella no
solo con su talento y dedicación, sino también con su amistad y calidad humana.

Su pasión por crear, aprender y ayudar a los demás permanecerá siempre en cada
línea de código, en cada proyecto y en el recuerdo de quienes tuvimos el privilegio
de trabajar a su lado.

Gracias por todo lo que compartiste con nosotros.

Descansa en paz, Irving.

Siempre serás parte de este equipo.
`;

mensaje.textContent = "";

let i = 0;

function escribir() {
    if (i < texto.length) {
        mensaje.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 25);
    }
}

setTimeout(escribir, 1200);

// =========================
// Fondo de estrellas
// =========================

const canvas = document.getElementById("particulas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const estrellas = [];

for (let i = 0; i < 180; i++) {
    estrellas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radio: Math.random() * 2 + 0.5,
        velocidad: Math.random() * 0.4 + 0.1,
        alpha: Math.random()
    });
}

function animar() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    estrellas.forEach(e => {

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${e.alpha})`;
        ctx.arc(e.x, e.y, e.radio, 0, Math.PI * 2);
        ctx.fill();

        e.y += e.velocidad;

        if (e.y > canvas.height) {
            e.y = -5;
            e.x = Math.random() * canvas.width;
        }

    });

    requestAnimationFrame(animar);
}

animar();
// ===============================
// Mensaje final del equipo
// ===============================

const mensajeEquipo = document.createElement("section");
mensajeEquipo.className = "mensaje-equipo";

mensajeEquipo.innerHTML = `
    <h2>Un último mensaje de todo el equipo</h2>

    <p>
        Irving, gracias por haber formado parte de este proyecto y de nuestras vidas.
        Tu talento, dedicación y compañerismo dejaron una huella que nunca será olvidada.
    </p>

    <p>
        Cada línea de código, cada idea y cada momento compartido permanecerán
        en la memoria de quienes tuvimos el privilegio de trabajar contigo.
    </p>

    <p>
        Aunque hoy tu ausencia nos duele, tu legado seguirá vivo en este proyecto
        y en el corazón de todo el equipo.
    </p>

    <p><strong>Descansa en paz, compañero y amigo.</strong></p>

    <p class="firma">
        — Con cariño y respeto,<br>
        <strong>Todo el Equipo de Desarrollo.</strong> 🕊️
    </p>
`;

// Lo agrega al final del contenido
document.querySelector(".contenido").appendChild(mensajeEquipo);