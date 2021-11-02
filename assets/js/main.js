'use strict'

  addEventListener('DOMContentLoaded', () => {
    const btnmenu = document.querySelector('.btn-menu');
    if (btnmenu) {
      btnmenu.addEventListener('click', () => {
        const menuitems = document.querySelector('.menu-items');
        menuitems.classList.toggle('show');
      });
    }
  });