
/* =====================================
   DRAWINGS SHOP
   Sistema de descuentos y promociones
===================================== */

// COPIAR CODIGOS DE DESCUENTO

function copiarCodigo(codigo) {

    if (navigator.clipboard && window.isSecureContext) {

        navigator.clipboard.writeText(codigo)
            .then(() => {
                mostrarNotificacion(
                    "¡Código copiado! " + codigo
                );
            })
            .catch(() => {
                copiarAlternativo(codigo);
            });

    } else {
        copiarAlternativo(codigo);
    }
}


// SISTEMA ALTERNATIVO PARA COPIAR

function copiarAlternativo(codigo) {

    const campo = document.createElement("textarea");

    campo.value = codigo;
    campo.style.position = "fixed";
    campo.style.opacity = "0";

    document.body.appendChild(campo);

    campo.select();

    try {
        const resultado = document.execCommand("copy");

        if (resultado) {
            mostrarNotificacion("¡Código copiado! " + codigo);
        } else {
            mostrarNotificacion("No se pudo copiar el código.");
        }

    } catch (error) {
        mostrarNotificacion("Error al copiar el código.");
    }

    document.body.removeChild(campo);
}


// NOTIFICACIONES

function mostrarNotificacion(mensaje) {

    let notificacion = document.getElementById(
        "notificacion-descuentos"
    );

    if (!notificacion) {

        notificacion = document.createElement("div");

        notificacion.id = "notificacion-descuentos";

        document.body.appendChild(notificacion);

        Object.assign(notificacion.style, {
            position: "fixed",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#f39c24",
            color: "#28113e",
            padding: "15px 25px",
            borderRadius: "12px",
            fontWeight: "bold",
            boxShadow: "0 5px 20px #0008",
            zIndex: "9999",
            textAlign: "center",
            maxWidth: "90%",
            transition: "opacity 0.3s"
        });
    }

    notificacion.textContent = mensaje;
    notificacion.style.opacity = "1";
    notificacion.style.display = "block";

    clearTimeout(window.temporizadorNotificacion);

    window.temporizadorNotificacion = setTimeout(() => {
        notificacion.style.opacity = "0";

        setTimeout(() => {
            notificacion.style.display = "none";
        }, 300);

    }, 2500);
}


// EFECTO DE ENTRADA DE LAS TARJETAS

document.addEventListener("DOMContentLoaded", () => {

    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach((tarjeta, indice) => {

        tarjeta.style.animationDelay = (indice * 0.15) + "s";

    });

    console.log(
        "Drawings Shop: sistema de descuentos iniciado correctamente."
    );

});


// MENSAJE DE BIENVENIDA

window.addEventListener("load", () => {

    console.log("¡Bienvenido a las promociones de Drawings Shop!");

});
