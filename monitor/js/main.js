alert("Hola Mundo");

let Respuesta = document.getElementById("Respuesta");

function CallApiRequest() {
  // Hacer una petición para un usuario con ID especifico
  axios
    .get("http://3.146.107.81/iot-car-control/back-end/apis/getRegistro.php")
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response);

      let respuestaServidor =
        response.data == "F"
          ? "Adelante"
          : response.data == "B"
          ? "Atras"
          : response.data == "L"
          ? "Izquierda"
          : response.data == "T"
          ? "Testeando Carro, espere........"
          : response.data == "R"
          ? "Derecha"
          : "Detener";
      Respuesta.innerHTML = "Respuesta: <strong>" + respuestaServidor + "</strong>";
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
}

setInterval(CallApiRequest, 2000);
