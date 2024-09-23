document.addEventListener('DOMContentLoaded', () => {

  const buttonText = document.getElementById('buttonText');
  const inputText = document.getElementById('inputText');

   // Agregamos un evento de clic al botón
   buttonText.addEventListener('click', function() {
   // Obtenemos el valor del input
   const data = inputText.value;

   // Guardamos el valor en el localStorage
   localStorage.setItem('dato', data);

   // Limpiamos el campo de texto después de guardar
   inputText.value = '';
   });
});
  
