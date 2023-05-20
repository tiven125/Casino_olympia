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
  // Obtener el valor actual almacenado en localStorage (si existe)
  var valorActual = localStorage.getItem("turnos");
  // Verificar si el valor existe y convertirlo a número
  var numeroActual = valorActual ? parseInt(valorActual) : 0;
  // Sumar 1 al número actual
  var nuevoNumero = numeroActual + 1;

  if (nuevoNumero < 2000) {
    localStorage.setItem("turnos", nuevoNumero);

    let rand = Math.random() * 7200;
    calcular(rand);
    var sonido = document.querySelector("#audio");
    sonido.setAttribute("src", "sonido/ruleta.mp3");
    document.querySelector(".contador").innerHTML = "TURNOS: " + nuevoNumero;
  }

  // Alertas Swal

  SigueIntentando = () => {
    Swal.fire({
      title: `Sigue Intentando`,
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
    });
  };

  finalista = () => {
    Swal.fire({
      confirmButton: "btn btn-success",
      title: `Felicitaciones Eres finalista`,
      // html: `
      // <a href="../finalista.html">Llenar Formulario</a>
      // `,
      confirmButtonText: "Cerrar",
      imageUrl: `https://i.pinimg.com/originals/8f/d4/29/8fd429e6f62ec2bb69e16314f81a2cc4.gif`,
      imageHeight: 600,
      padding: "3em",
      imageAlt: "A tall image",
      backdrop: `
          rgba(0,0,123,0.4)
        `,
    });
  };

  ganasteRaspa = () => {
    Swal.fire({
      title: `Felicidades Ganaste Raspa y gana`,
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
    });
  };

  ganaste20 = () => {
    Swal.fire({
      title: `Felicidades Ganaste 20.000`,
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
    });
  };

  ganaste30 = () => {
    Swal.fire({
      title: `Felicidades Ganaste 30.000`,
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
    });
  };
  ganaste40 = () => {
    Swal.fire({
      title: `Felicidades Ganaste 40.000`,
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
    });
  };
  ganaste100 = () => {
    Swal.fire({
      title: `Felicidades Ganaste 100.000`,
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
    });
  };

  // Premios
  function premio(premios) {
    document.querySelector(".elije").innerHTML = "Ganaste: " + premios;
  }

  // Funcion Calcular

  function calcular(rand) {
    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    ruleta.style.transform = "rotate(" + rand + "deg)";

    setTimeout(() => {
      switch (true) {
        case valor > 0 && valor <= 10: // Eres Finalista
          // Obtener el valor actual almacenado en localStorage (si existe)
          var valorActual = localStorage.getItem("Finalistas");
          // Verificar si el valor existe y convertirlo a número
          var numeroActual = valorActual ? parseInt(valorActual) : 0;
          // Sumar 1 al número actual
          var nuevoNumero = numeroActual + 1;
          if (nuevoNumero <= 40) {
            localStorage.setItem("Finalistas", nuevoNumero);
            reproducirAudio();
            finalista();
          } else {
            reproducirAudio();
            SigueIntentando();
          }
          break;
        case valor > 10 && valor <= 12: //  Ganaste intentos100
          // Obtener el valor actual almacenado en localStorage (si existe)
          var valorActual = localStorage.getItem("intentos100");
          // Verificar si el valor existe y convertirlo a número
          var numeroActual = valorActual ? parseInt(valorActual) : 0;
          // Sumar 1 al número actual
          var nuevoNumero = numeroActual + 1;
          if (nuevoNumero <= 2) {
            reproducirAudio();
            ganaste100();

            localStorage.setItem("intentos100", nuevoNumero);
          } else {
            reproducirAudio();
            SigueIntentando();
          }
          break;
        case valor > 12 && valor <= 15: //  Ganaste intentos40
          // Obtener el valor actual almacenado en localStorage (si existe)
          var valorActual = localStorage.getItem("intentos40");
          // Verificar si el valor existe y convertirlo a número
          var numeroActual = valorActual ? parseInt(valorActual) : 0;
          // Sumar 1 al número actual
          var nuevoNumero = numeroActual + 1;
          if (nuevoNumero <= 5) {
            localStorage.setItem("intentos40", nuevoNumero);
            reproducirAudio();
            ganaste40();
          } else {
            reproducirAudio();
            SigueIntentando();
          }
          break;
        case valor > 15 && valor <= 20: //  Ganaste intentos30
          // Obtener el valor actual almacenado en localStorage (si existe)
          var valorActual = localStorage.getItem("intentos30");
          // Verificar si el valor existe y convertirlo a número
          var numeroActual = valorActual ? parseInt(valorActual) : 0;
          // Sumar 1 al número actual
          var nuevoNumero = numeroActual + 1;

          if (nuevoNumero <= 5) {
            // Guardar el nuevo valor en localStorage
            localStorage.setItem("intentos30", nuevoNumero);
            reproducirAudio();
            ganaste30();
          } else {
            reproducirAudio();
            SigueIntentando();
          }
          break;
        case valor > 20 && valor <= 23: // Ganaste intentos 20
          // Obtener el valor actual almacenado en localStorage (si existe)
          var valorActual = localStorage.getItem("intentos20");
          // Verificar si el valor existe y convertirlo a número
          var numeroActual = valorActual ? parseInt(valorActual) : 0;
          // Sumar 1 al número actual
          var nuevoNumero = numeroActual + 1;
          // Guardar el nuevo valor en localStorage

          if (nuevoNumero <= 5) {
            localStorage.setItem("intentos20", nuevoNumero);

            reproducirAudio();
            ganaste20();
            // Guardar el nuevo valor en localStorage
            localStorage.setItem("intentos20", nuevoNumero);
          } else {
            reproducirAudio();
            SigueIntentando();
          }
          break;
        case valor > 23 && valor <= 60: // Ganaste Raspa
          // Obtener el valor actual almacenado en localStorage (si existe)
          var valorActual = localStorage.getItem("intentosRaspa");
          // Verificar si el valor existe y convertirlo a número
          var numeroActual = valorActual ? parseInt(valorActual) : 0;
          // Sumar 1 al número actual
          var nuevoNumero = numeroActual + 1;
          // Guardar el nuevo valor en localStorage
          if (nuevoNumero <= 150) {
            localStorage.setItem("intentosRaspa", nuevoNumero);

            reproducirAudio();
            ganasteRaspa();
          } else {
            reproducirAudio();
            SigueIntentando();
          }
          break;
        case valor > 55 && valor <= 220: // Sigue Intentando
          console.log(finalista);
          reproducirAudio();
          SigueIntentando();

          break;
        case valor > 220 && valor <= 360: // Sigue intentando
          reproducirAudio();
          SigueIntentando();
          break;
      }
    }, 5000);
  }
}

// Formulario Turnos

// Finalistas
const finalista = document.querySelector(`.finalista`);
finalista.innerHTML = localStorage.getItem("Finalistas");

// Turnos
const forTurno = document.querySelector(`.forTurno`);
forTurno.innerHTML = localStorage.getItem("turnos");

// intentosRaspa
const forRaspa = document.querySelector(`.forRaspa`);
forRaspa.innerHTML = localStorage.getItem("intentosRaspa");

// intentos100
const for100 = document.querySelector(`.for100`);
for100.innerHTML = localStorage.getItem("intentos100");

// intentos40
const for40 = document.querySelector(`.for40`);
for40.innerHTML = localStorage.getItem("intentos40");

// intentos30
const for30 = document.querySelector(`.for30`);
for30.innerHTML = localStorage.getItem("intentos30");

// intentos20
const for20 = document.querySelector(`.for20`);
for20.innerHTML = localStorage.getItem("intentos20");
