$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 40,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    responsiveclass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      },
      1400: {
        items: 4
      }

    }
  });
});

//owl-carousel part end

$('.autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  prevArrow: '<span class="prev_arrow"><i class="fa-solid fa-angle-left"></i></span>',
  nextArrow: '<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
  responsive: [{
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    }
  ]
});

//slick slider part end


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}