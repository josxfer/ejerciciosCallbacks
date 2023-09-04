const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");

//Primer Callback
button1.addEventListener("click", () => {
  const miNombre = (x, y) => {
    return console.log(`${x} ${y}`);
  };

  const funcionPrincipal = (call) => {
    call("Hola", "Mundo");
  };

  funcionPrincipal(miNombre);
});


//Segundo Callbcak
button2.addEventListener("click", () => {
  function tipoDeDato(d) {
    return console.log(typeof d);
  }

  const funcionPrincipal = (variable, callback) => {
    callback(variable);
  };

  //Acá se ingresa el dato requerido para saber su tipo
  funcionPrincipal(65, tipoDeDato);
});


//Tercer Callback
button3.addEventListener("click", () => {
  const suma = (num1, num2) => {
    return num1 + num2;
  };

  const resta = (num1, num2) => {
    return num1 - num2;
  };

  const multiplicacion = (num1, num2) => {
    return num1 * num2;
  };

  const division = (num1, num2) => {
    return num1 / num2;
  };

  const resultado = (x) => {
    console.log(x(10, 5));
  };

  resultado(suma);
  resultado(resta);
  resultado(division);
  resultado(multiplicacion);
});


//Cuarto Callback
button4.addEventListener('click', () => {
  const cadena = (p) => {
    return console.log(p.toUpperCase(), p.toLowerCase());
  }

  const funcionPrincipal = (palabra, callback) => {
    callback(palabra)
  }

  //Acá se ingresa el String que se pasará a mayúscula y minúscula
  funcionPrincipal("Esta es la oracion que va a cambiar", cadena)
})


//Quinto Callback
button5.addEventListener('click', () => {
  
  const filtarArray = (data) => {
    
    const arregloNuevo = []
    for (let i = 0; i < data.length; i++) {
      if (data[i] >= 120) {
        arregloNuevo.push(data[i])
      }      
    }
    return console.log(arregloNuevo);
  }
  const funcionPrincipal = (callback, arreglo) => {
    callback(arreglo)
  }

  const arregloTiempo = [120, 80, 200, 100]

  funcionPrincipal(filtarArray, arregloTiempo)
})

