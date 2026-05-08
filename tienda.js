let fondos = [

"linear-gradient(45deg,#1e1e2f,#2d3436)",

"linear-gradient(45deg,#2d1b4d,#111827)",

"linear-gradient(45deg,#3b1f2b,#1e272e)",

"linear-gradient(45deg,#ff4d88,#2d3436)"

];

setInterval(() => {

  document.body.style.transition =
    "2s";

  document.body.style.background =
    fondos[Math.floor(Math.random()*fondos.length)];

}, 6000);

setInterval(() => {

  document.body.style.transition = "0.3s";

  document.body.style.filter =
    "brightness(1.15)";

  setTimeout(() => {

    document.body.style.filter =
      "brightness(1)";

  }, 200);

}, 12000);


document.querySelectorAll("img")
.forEach(img => {

  img.addEventListener("mouseenter", () => {

    img.style.transition = "0.3s";

    img.style.transform =
      "scale(1.05)";

  });

  img.addEventListener("mouseleave", () => {

    img.style.transform =
      "scale(1)";

  });

});