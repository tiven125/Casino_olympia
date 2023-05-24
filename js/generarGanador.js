// Boton de girar ruleta
// const btn_girar = document.querySelector(`#btn_girar`);
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    girar();
  }
});

function reproducirAudio() {
  var audio = document.getElementById("miAudio");
  audio.play();
}

function girar() {
  let rand = Math.random() * 7200;
  calcularGanador(rand);
  var sonido = document.querySelector("#audio");
  sonido.setAttribute("src", "sonido/ruleta.mp3");

  // Funcion Calcular
  function calcularGanador(rand) {
    var randomNumber = Math.floor(Math.random() * 40); //
    ruleta.style.transform = "rotate(" + rand + "deg)";

    const trarDatosFinalistas = localStorage.getItem("usersFinalistas");

    const datosFinalistas = JSON.parse(trarDatosFinalistas);

    console.log(randomNumber);
    // console.log(datosFinalistas);

    for (var i = 0; i < datosFinalistas.length; i++) {
      if (i === randomNumber) {
        console.log(datosFinalistas[i]);
        setTimeout(() => {
          reproducirAudio();
          Swal.fire({
            title: `Felicidades Ganaste Giro Millonario 500.000`,
            html: `<span class="nombreGanador">${datosFinalistas[i].nombre}</span>`,
            confirmButtonColor: "#3085d6",
            color: "#716add",
            imageUrl: `https://i.pinimg.com/originals/8f/d4/29/8fd429e6f62ec2bb69e16314f81a2cc4.gif`,
            imageHeight: 600,
            padding: "3em",
            imageAlt: "A tall image",
            backdrop: `
              rgba(0,0,123,0.4)      
            `,
            confirmButtonText: "Aceptar",
            customClass: {
              title: "tituloAlerta",
            },
          });
        }, 5000);
        break;
      }
    }
  }
}
