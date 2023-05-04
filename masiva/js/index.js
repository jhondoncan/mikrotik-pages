const contacto = document.getElementById('btnContacto');

contacto.addEventListener('click', () => {
  window.open('https://api.whatsapp.com/send?phone=573153759631');
});
