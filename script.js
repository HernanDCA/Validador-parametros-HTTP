// 1. Función requerida en el Ejercicio 1 (Sin usar if/else)
function configurarPaginacion(pagina, limite, mostrarOcultos) {
  // Coerción numérica y reemplazo para valores falsy (0, "", null, undefined)
  const paginaFinal = Number(pagina) || 1;

  // Respetar el 0 usando Nullish Coalescing (??) para evaluar solo null o undefined
  const limiteFinal = Number(limite ?? 10);

  // Comparación estricta (===) para devolver booleano
  const mostrarOcultosFinal = mostrarOcultos === "true" || mostrarOcultos === true;

  return `Página: ${paginaFinal} | Límite: ${limiteFinal} | Ocultos: ${mostrarOcultosFinal}`;
}

// 2. Captura de eventos e interacción con el DOM
document.getElementById("formPaginacion").addEventListener("submit", (event) => {
  event.preventDefault();

  // Capturar valores desde la interfaz
  const paginaInput = document.getElementById("pagina").value.trim();
  const limiteInput = document.getElementById("limite").value.trim();
  const ocultosSelect = document.getElementById("mostrarOcultos").value;

  // Mapear entradas vacías o especiales a tipos reales de JS (null/undefined/booleans)
  const pagina = paginaInput === "null" ? null : (paginaInput === "undefined" ? undefined : paginaInput);
  
  const limite = limiteInput === "" ? undefined : (limiteInput === "null" ? null : limiteInput);

  let mostrarOcultos;
  if (ocultosSelect === "boolean_true") mostrarOcultos = true;
  else if (ocultosSelect === "boolean_false") mostrarOcultos = false;
  else mostrarOcultos = ocultosSelect;

  // Ejecutar la función
  const resultadoTexto = configurarPaginacion(pagina, limite, mostrarOcultos);

  // Mostrar el resultado en pantalla
  document.getElementById("resultado").textContent = resultadoTexto;
});