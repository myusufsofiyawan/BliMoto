$(document).ready(function () {

  // var kotaList = ['jakarta', 'bogor', 'depok', 'tanggerang', 'bekasi']


  $(".js-example-basic-single").select2(
    {
      placeholder: 'Select an option'
    }
  );

  // $('#kotaSelect').select2({ data: kotaList })

  $('.selectpicker').selectpicker();


  // const allRanges = document.querySelectorAll(".range-wrap");
  // allRanges.forEach(wrap => {
  //   const range = wrap.querySelector(".range");
  //   const bubble = wrap.querySelector(".bubble");

  //   range.addEventListener("input", () => {
  //     setBubble(range, bubble);
  //   });
  //   setBubble(range, bubble);
  // });

  // function setBubble(range, bubble) {
  //   const val = range.value;
  //   const min = range.min ? range.min : 0;
  //   const max = range.max ? range.max : 100;
  //   const newVal = Number(((val - min) * 100) / (max - min));
  //   bubble.innerHTML = val;

  //   // Sorta magic numbers based on size of the native UI thumb
  //   bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  // }



  // var navbar = $('.navbar2-child');
  // var customContainer = $('.navbar2-child');
  // var navbarHeight = navbar.outerHeight();

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > navbarHeight) {
  //     customContainer.css('background-color', 'white');
  //     $('#navbar-wrapper').removeClass('bg-basic');
  //   } else {
  //     customContainer.css('background-color', '#dd0202');
  //     $('#navbar-wrapper').addClass('bg-basic');
  //   }
  // });

  // $('.owl-carousel').owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  //   autoplay: false,
  //   autoplayTimeout: 5000,
  //   autoplayHoverPause: false,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 5
  //     }
  //   }
  // })
  // $('.play').on('click', function () {
  //   owl.trigger('play.owl.autoplay', [1000])
  // })
  // $('.stop').on('click', function () {
  //   owl.trigger('stop.owl.autoplay')
  // })

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })

});