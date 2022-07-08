let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myCarousel");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


//page

// function setTotalPageNumber() {
//   $('.total-pages-num').html(('0' + $('.page-wrapper .section').length).slice(-2));
// }

// function setDataNumberForSections() {
//   var k = 1;
//   $('.page-wrapper .section').each(function () {
//       $(this).data('num', ('0' + k).slice(-2));
//       k++;
//   });
// }

// function setActiveMenuItem() {
//   var currentSection = null;
//   var c = $('.page-wrapper .section.section-active').data("num");
//   $('.section').each(function () {
//       var element = $(this).attr('id');
//       if ($('#' + element).is('*')) {
//           if ($(window).scrollTop() >= $('#' + element).offset().top - 150) {
//               currentSection = element;
//           }
//       }
//   });
//   $('.nav-menu ul li').removeClass('current').find('a[href*="#' + currentSection + '"]').parent().addClass('current');
//   $('.page-wrapper .section').removeClass('section-active');
//   $('#' + currentSection).addClass('section-active');
//   if (c !== $('#' + currentSection).data("num")) {
//       c = $('#' + currentSection).data("num");
//       $('.current-num span').animate({"opacity": '0', "left": "-5px"}, 150, function () {
//           $(this).text(c).animate({"opacity": '1', "left": "0"}, 150);
//       });
//   }
// }

// function setSlowScroll() {
//   $('.nav-menu ul li a[href^="#"], a.button, .slow-scroll').on("click", function (e) {
//       if ($(this).attr('href') === '#') {
//           e.preventDefault();
//       } else {
//           $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1500);
//           return false;
//       }
//   });
// }