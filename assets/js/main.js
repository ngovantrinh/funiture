$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      524: {
        items: 2,
      },
      600: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
});
// show-info
// .account-settings
const home = {
  init: () => {
    home.showInfo('.button-menu', '.hide-menu');
    home.showMenu('.button-menu', '.icon-menu', '.icon-menu-hide');
  },
  showMenu: (btn, menu, hbtn) => {
    const button = document.querySelector(btn);
    const mainMenu = document.querySelector(menu);
    const hidebutton = document.querySelector(hbtn);
    if (!button || !mainMenu) return;
    button.addEventListener('click', () => {
      mainMenu.classList.toggle('hiding');
    });
    button.addEventListener('click', () => {
      hidebutton.classList.toggle('showing');
    });
  },
  showInfo: (btn, info) => {
    const button = document.querySelector(btn);
    const infoWrap = document.querySelector(info);
    if (!button || !infoWrap) return;
    button.addEventListener('click', () => {
      infoWrap.classList.toggle('active');
    });
  },
};

home.init();
