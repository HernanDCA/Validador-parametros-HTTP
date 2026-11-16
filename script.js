// 1. Función principal que genera la cadena ASCII
function generarVentana(ancho, alto) {
  // Validación de dimensiones mínimas
  if (ancho < 4 || alto < 4) {
    return "Error: El ancho y el alto deben ser números mayores o iguales a 4.";
  }

  let acumulador = "";

  // Bucle externo para las filas (y)
  for (let y = 0; y < alto; y++) {
    // Bucle interno para las columnas (x)
    for (let x = 0; x < ancho; x++) {
      
      // Regla 1: Esquinas (+)
      if ((x === 0 || x === ancho - 1) && (y === 0 || y === alto - 1)) {
        acumulador += "+";
      }
      // Regla 2: Bordes superior e inferior (-)
      else if (y === 0 || y === alto - 1) {
        acumulador += "-";
      }
      // Regla 3: Bordes laterales (|)
      else if (x === 0 || x === ancho - 1) {
        acumulador += "|";
      }
      // Regla 4: Barra de direcciones (=) en la segunda fila (índice 1)
      else if (y === 1) {
        acumulador += "=";
      }
      // Regla 5: Interior vacío (" ")
      else {
        acumulador += " ";
      }

    }
    // Salto de línea al terminar cada fila
    acumulador += "\n";
  }

  // Imprimir en la consola según las especificaciones del ejercicio
  console.log(acumulador);

  // Retornar la cadena para poder renderizarla en el navegador
  return acumulador;
}

// 2. Interacción con la interfaz web (DOM)
document.getElementById("formVentana").addEventListener("submit", (e) => {
  e.preventDefault();

  // Convertir los valores de los inputs a enteros
  const ancho = parseInt(document.getElementById("ancho").value, 10);
  const alto = parseInt(document.getElementById("alto").value, 10);

  // Generar la estructura ASCII
  const salidaASCII = generarVentana(ancho, alto);

  // Pintar el resultado en la etiqueta <pre>
  document.getElementById("resultado").textContent = salidaASCII;
});

// Renderizar un ejemplo por defecto al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("resultado").textContent = generarVentana(6, 5);
});