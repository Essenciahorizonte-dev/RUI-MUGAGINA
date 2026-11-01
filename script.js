
/* =========================================
   RUI MUGAGINE — JAVASCRIPT
========================================= */


/* MENU DE NAVEGAÇÃO */

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

if (menuButton && navigation) {

  menuButton.addEventListener('click', () => {

    const isOpen = navigation.classList.toggle('open');

    menuButton.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

  });

  // Fechar o menu depois de seleccionar uma opção

  navigation.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      navigation.classList.remove('open');

      menuButton.setAttribute(
        'aria-expanded',
        'false'
      );

    });

  });

}


/* ACTUALIZAÇÃO AUTOMÁTICA DO ANO */

const year = document.getElementById('year');

if (year) {

  year.textContent = new Date().getFullYear();

}


/* FORMULÁRIO DE CONTACTO */

const form = document.getElementById('contactForm');

if (form) {

  form.addEventListener('submit', event => {

    event.preventDefault();

    const note = document.getElementById('formNote');

    note.textContent =
      'O formulário está preparado visualmente. Para receber mensagens, é necessário configurar o e-mail profissional ou ligar o formulário a um serviço de envio.';

  });

}
