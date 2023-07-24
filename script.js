function validar() {
  if (document.getElementById("mascota").value.trim() === "") {
      document.getElementById("msj1").style.display = "block";
      document.getElementById("msj1").textContent = "*Por favor, digite el nombre de la mascota*";
      setTimeout(() => {
          document.getElementById("msj1").style.display = "none";
      }, 2000);
      return false;
  } else if (document.getElementById("propietario").value.trim() === "") {
      document.getElementById("msj1").style.display = "block";
      document.getElementById("msj1").textContent = "*Por favor, digite su nombre*";
      setTimeout(() => {
          document.getElementById("msj1").style.display = "none";
      }, 2000);
      return false;
  } else if (document.getElementById("telefono").value.trim() === "") {
      document.getElementById("msj1").style.display = "block";
      document.getElementById("msj1").textContent = "*Por favor, digite un teléfono*";
      setTimeout(() => {
          document.getElementById("msj1").style.display = "none";
      }, 2000);
      return false;
  } else if (document.getElementById("telefono").value.length !== 10) {
      document.getElementById("msj1").style.display = "block";
      document.getElementById("msj1").textContent = "*Por favor, digite un número de teléfono con 10 dígitos*";
      setTimeout(() => {
          document.getElementById("msj1").style.display = "none";
      }, 2000);
      return false;
  } else if (document.getElementById("tipo").selectedIndex === 0) {
      document.getElementById("msj1").style.display = "block";
      document.getElementById("msj1").textContent = "*Por favor, seleccione el tipo de mascota*";
      setTimeout(() => {
          document.getElementById("msj1").style.display = "none";
      }, 2000);
      return false;
  } else if (document.getElementById("fecha").value.trim() === "") {
      document.getElementById("msj1").style.display = "block";
      document.getElementById("msj1").textContent = "*Por favor, seleccione una fecha para reservar*";
      setTimeout(() => {
          document.getElementById("msj1").style.display = "none";
      }, 2000);
      return false;
  } else if (document.getElementById("hora").value.trim() === "") {
      document.getElementById("msj1").style.display = "block";
      document.getElementById("msj1").textContent = "*Por favor, elija una hora disponible*";
      setTimeout(() => {
          document.getElementById("msj1").style.display = "none";
      }, 2000);
      return false;
  }else if (document.getElementById("sintomas").value.trim() === ""){
      document.getElementById("msj1").style.display = "block";
      document.getElementById("msj1").textContent = "*Por favor, digite los sintomas*";
      setTimeout(() => {
          document.getElementById("msj1").style.display = "none";
      }, 2000);
      return false;
  } else {
      let seleccionFecha = new Date(document.getElementById("fecha").value);
      let fechaActual = new Date();
      fechaActual.setHours(0, 0, 0, 0);
      let seleccionHora = parseInt(document.getElementById("hora").value);
      if (seleccionFecha < fechaActual || (seleccionFecha.getTime() === fechaActual.getTime() && seleccionHora < 8)) {
          document.getElementById("msj1").style.display = "block";
          document.getElementById("msj1").textContent = "*Debe seleccionar una fecha correcta*";
          setTimeout(() => {
              document.getElementById("msj1").style.display = "none";
          }, 2000);
          return false;
      } else if (seleccionHora < 8 || seleccionHora > 19) {
          document.getElementById("msj1").style.display = "block";
          document.getElementById("msj1").textContent = "*La hora debe estar entre las 8 AM y las 7 PM.*";
          setTimeout(() => {
              document.getElementById("msj1").style.display = "none";
          }, 2000);
          return false;
      } else {
          document.getElementById("msj2").style.display = "block";
          document.getElementById("msj2").textContent = "Registro exitoso";
          setTimeout(() => {
              document.getElementById("msj2").style.display = "none";
          }, 2000);
          return true;
      }
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  pintar(tarjetas)
  cambiar()
})

function cambiar() {

  const radios = document.getElementsByClassName("radio")
  const radioarr = Array.from(radios)

  radioarr.forEach((e) => {
    e.addEventListener('change', () => {

      estado = e.id;
      document.getElementById('cartas').innerHTML = "";
      if(estado=="abi") pintar(tarjetas)
      if(estado=="ter") pintar(terminada)
      if(estado=="anu") pintar(anulada)
      })
    })
  }


  function pintar(datos) {
    datos.forEach((e, i) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");

      const img = document.createElement("img");
      img.classList.add("img");
      img.classList.add("esperi");

      if (e.tipo === "Perro") {
        img.src = "./perro.png";
      }else if(e.tipo === "Gato"){
        img.src = "./gato.png"
      }else if(e.tipo === "Conejo"){
        img.src = "./conejo.png"
      }else if(e.tipo === "Caballo"){
        img.src = "./caballo.png"
      }else if(e.tipo === "Vaca"){
        img.src = "./vaca.png"
      }else if(e.tipo === "Toro"){
        img.src = "./toro.png"
      }else if(e.tipo === "Cabra"){
        img.src = "./cabro.png"
      }else if(e.tipo === "Cerdo"){
        img.src = "./cerdo.png"
      }else if(e.tipo === "Gallo"){
        img.src = "./gallo.png"
      }else if(e.tipo === "Gallina"){
        img.src = "./gallina.png"
      }else if(e.tipo === "Loro"){
        img.src = "./loro.png"
      }

      const nombre = document.createElement("div");
      nombre.classList.add("nombre");

      const h3 = document.createElement("h3");
      h3.textContent = e.nombre;

      nombre.appendChild(h3);

      const descripcion = document.createElement("div");
      descripcion.classList.add("descripcion");

      const propietario = document.createElement("div");
      propietario.classList.add("fila");

      const negrita = document.createElement("p");
      negrita.classList.add("negrita");
      negrita.textContent = "Propietario:";

      const normal = document.createElement("p");
      normal.classList.add("normal");
      normal.textContent = e.propietario;

      propietario.appendChild(negrita);
      propietario.appendChild(normal);

      const telefono = document.createElement("div");
      telefono.classList.add("fila");

      const negrita2 = document.createElement("p");
      negrita2.classList.add("negrita");
      negrita2.textContent = "Telefono:";

      const normal2 = document.createElement("p");
      normal2.classList.add("normal");
      normal2.textContent = e.telefono;

      telefono.appendChild(negrita2);
      telefono.appendChild(normal2);

      const fecha = document.createElement("div");
      fecha.classList.add("fila");

      const negrita3 = document.createElement("p");
      negrita3.classList.add("negrita");
      negrita3.textContent = "Fecha:";

      const normal3 = document.createElement("p");
      normal3.classList.add("normal");
      normal3.textContent = e.fecha;

      fecha.appendChild(negrita3);
      fecha.appendChild(normal3);

      const hora = document.createElement("div");
      hora.classList.add("fila");

      const negrita4 = document.createElement("p");
      negrita4.classList.add("negrita");
      negrita4.textContent = "Hora:";

      const normal4 = document.createElement("p");
      normal4.classList.add("normal");
      normal4.textContent = e.hora;

      hora.appendChild(negrita4);
      hora.appendChild(normal4);

      const sintomas = document.createElement("div");
      sintomas.classList.add("fila");

      const negrita5 = document.createElement("p");
      negrita5.classList.add("negrita");
      negrita5.textContent = "Sintomas:";

      const normal5 = document.createElement("p");
      normal5.classList.add("normal");
      normal5.textContent = e.sintomas;

      sintomas.appendChild(negrita5);
      sintomas.appendChild(normal5);

      descripcion.appendChild(propietario);
      descripcion.appendChild(telefono);
      descripcion.appendChild(fecha);
      descripcion.appendChild(hora);
      descripcion.appendChild(sintomas);

      tarjeta.appendChild(img);
      tarjeta.appendChild(nombre);
      tarjeta.appendChild(descripcion);

      const divBotones = document.createElement("div");
      divBotones.classList.add("botones");

      const btnEditar = document.createElement("button");
      btnEditar.classList.add("editar");
      btnEditar.setAttribute("data-bs-toggle", "modal");
      btnEditar.setAttribute("data-bs-target", "#exampleModal");
      btnEditar.textContent = "Editar⚙️";

      let selectButton = document.createElement('select');
        selectButton.classList.add('form-select');
        selectButton.addEventListener('change', function(event) {
        let selectedOption = event.target.value;
        console.log('Opción seleccionada:', selectedOption);
        });

   
            let option1 = document.createElement('option');
            option1.value = 'abierta';
            option1.textContent = 'Abierta';
    
            let option2 = document.createElement('option');
            option2.value = 'terminado';
            option2.textContent = 'Terminado';
    
            let option3 = document.createElement('option');
            option3.value = 'anulada';
            option3.textContent = 'Anulada';
        
        

        selectButton.addEventListener("change", ()=>{
            borrar(e, i, selectButton)
        })

        if(datos==tarjetas){
            selectButton.appendChild(option1);
            selectButton.appendChild(option2);
            selectButton.appendChild(option3);
        }else if(datos==terminada){
            selectButton.appendChild(option2);
            selectButton.appendChild(option1);
            selectButton.appendChild(option3);
        }else if(datos==anulada){
            selectButton.appendChild(option3);
            selectButton.appendChild(option1);
            selectButton.appendChild(option2);
        }

        btnEditar.addEventListener("click", () => {
          editar(e);
        });

      divBotones.appendChild(btnEditar);
      divBotones.appendChild(selectButton)
      tarjeta.appendChild(divBotones);

      document.getElementById("cartas").appendChild(tarjeta);
    });
  }

  function borrar(e, i, cartas) {
    if (cartas.value == "abierta") {
      tarjetas.push(e);
      document.getElementById('cartas').innerHTML = "";
  
      if (estado == "ter") {
        terminada.splice(i, 1);
        pintar(terminada);
      } else if (estado == "anu") {
        anulada.splice(i, 1);
        pintar(anulada);
      }
    } else if (cartas.value == "terminado") {
      terminada.push(e);
      document.getElementById('cartas').innerHTML = "";
  
      if (estado == "abi") {
        tarjetas.splice(i, 1);
        pintar(tarjetas);
      } else if (estado == "anu") {
        anulada.splice(i, 1);
        pintar(anulada);
      }
    } else if (cartas.value == "anulada") {
      anulada.push(e);
      document.getElementById('cartas').innerHTML = "";
  
      if (estado == "abi") {
        tarjetas.splice(i, 1);
        pintar(tarjetas);
      } else if (estado == "ter") {
        terminada.splice(i, 1);
        pintar(terminada);
      }
    }
  }
    

  function cerrarModal() {
    let modal = document.getElementById("exampleModal");
    let basModal = bootstrap.Modal.getInstance(modal);
    basModal.hide();
  }

  let bd = "";
  let id = 0;
  let id2;
  let estado = "abi"
  let tarjetas = [
    {
        id: 1,
        tipo: "Perro",
        nombre: "LULU",
        propietario: "Pepito Perez",
        telefono: "1234567890",
        fecha: "2023-08-04",
        hora: "19:59",
        sintomas: "Dolor de cabeza"
    }
];
  let terminada=[
    {
        id: 2,
        tipo: "Perro",
        nombre: "LUNA",
        propietario: "Pepito Perez",
        telefono: "1234567890",
        fecha: "2023-08-04",
        hora: "19:59",
        sintomas: "Dolor de muela"
    }
]
  let anulada=[
    {
        id: 3,
        tipo: "Perro",
        nombre: "LOL",
        propietario: "Pepito Perez",
        telefono: "1234567890",
        fecha: "2023-08-04",
        hora: "19:59",
        sintomas: "Dolor de estomago"
    }
]



function crear() {
  bd = "agregar";
  limpiar();
}

function editar(cita) {
  bd = "editar";
  id2 = cita.id;
  console.log(cita);
  let tipoInput = document.getElementById('tipo');
  let mascotaInput = document.getElementById('mascota');
  let propietarioInput = document.getElementById('propietario');
  let telefonoInput = document.getElementById('telefono');
  let fechaInput = document.getElementById('fecha');
  let horaInput = document.getElementById('hora');
  let sintomasInput = document.getElementById('sintomas');

  tipoInput.value = cita.tipo;
  mascotaInput.value = cita.nombre;
  propietarioInput.value = cita.propietario;
  telefonoInput.value = cita.telefono;
  fechaInput.value = cita.fecha;
  horaInput.value = cita.hora;
  sintomasInput.value = cita.sintomas;

  let modal = document.getElementById('exampleModal');
  let modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.show();

  guardar();

  modal.addEventListener('hidden.bs.modal', function () {
    limpiar();
  });
}

function guardar() {
  if (!validar()) {
    return;
  }
  if (bd === "agregar") {
    let mascota = document.getElementById('mascota').value;
    let propietario = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let tipo = document.getElementById('tipo').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;
    id += 1;
    if(estado == "abi"){
    tarjetas.push({ id, tipo, nombre: mascota, propietario, telefono, fecha, hora, sintomas });
    }else if(estado == "ter"){
      terminada.push({ id, tipo, nombre: mascota, propietario, telefono, fecha, hora, sintomas });
    }else if(estado == "anu"){
      anulada.push({ id, tipo, nombre: mascota, propietario, telefono, fecha, hora, sintomas });
    }
    document.getElementById('cartas').innerHTML = "";
    pintar(tarjetas);
    limpiar();
  } else {
    tarjetas.forEach((e, i) => {
      if (e.id === id2) {
        e.tipo = document.getElementById('tipo').value;
        e.nombre = document.getElementById('mascota').value; 
        e.propietario = document.getElementById('propietario').value;
        e.telefono = document.getElementById('telefono').value;
        e.fecha = document.getElementById('fecha').value;
        e.hora = document.getElementById('hora').value;
        e.sintomas = document.getElementById('sintomas').value;
      }
    });
    document.getElementById('cartas').innerHTML = "";
    pintar(tarjetas);
    cerrarModal();
  }
}

function convertirhorafor(hora24) {
  let hora12 = "";
  let partesHora = hora24.split(":");
  let hora = parseInt(partesHora[0]);
  let min = partesHora[1];

  if (hora === 0) {
      hora12 = "12:" + min + " AM";
  } else if (hora < 12) {
      hora12 = hora + ":" + min + " AM";
  } else if (hora === 12) {
      hora12 = "12:" + min + " PM";
  } else {
      hora12 = (hora - 12) + ":" + min + " PM";
  }

  return hora12;
}

function limpiar() {
  document.getElementById("tipo").value = "";
  document.getElementById("mascota").value = "";
  document.getElementById("propietario").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("hora").value = "";
  document.getElementById("sintomas").value = "";
}
