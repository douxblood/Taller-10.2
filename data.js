document.addEventListener('DOMContentLoaded', () => { 
    // Seleccionamos el elemento donde queremos mostrar el dato
 const dataSpan = document.getElementById('data');

  // Obtenemos el valor almacenado en el localStorage
 const storedData = localStorage.getItem('dato');

 // Mostramos el valor en el span si existe
 if (storedData) {
    dataSpan.textContent = storedData;
 } else {
    dataSpan.textContent = 'No hay datos guardados.';
 }

});