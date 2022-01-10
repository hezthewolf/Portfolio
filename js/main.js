$(document).ready(function () {


  let $btns = $('.project-area .button-group button');


  $btns.click(function (e) {

      $('.project-area .button-group button').removeClass('active');
      e.target.classList.add('active');

      let selector = $(e.target).attr('data-filter');
      $('.project-area .grid').isotope({
          filter: selector
      });

      return false;
  });

  $('.project-area .button-group #btn1').trigger('click');

  $('.project-area .grid .test-popup-link').magnificPopup({
      type: 'image',
      gallery: { enabled: true }

    });



  //Sticky Nav Menu

  let nav_offset_top = $('.header-area').height() + 50;

  function navbarFixed() {
      if ($('.header-area').length) {
          $(window).scroll(function () {
              let scroll = $(window).scrollTop();
              if (scroll >= nav_offset_top) {
                  $('.header-area .main-menu').addClass('navbar-fixed');
              } else {
                  $('.header-area .main-menu').removeClass('navbar-fixed');
              }
          })
      }
  }

  navbarFixed();


    // Typing Effect
    let i = 0;
    const txt = "I'm Hesbon";
    let speed = 200;

    const typeWriter = () => {
      if (i < txt.length) {
        document.getElementById("typing-effect").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter()

})