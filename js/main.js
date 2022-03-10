$(function () {
  $('.header_slider').slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="prev.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/next.svg" alt="next.svg"></button>',
    fade: true,
  });

  $('.product_name').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product_content',
    vertical: true,
    prevArrow:
      '<button type="button" class="product_prev"><img src="images/product_prev.svg" alt="prev.svg"></button>',
    nextArrow:
      '<button type="button" class="product_next"><img src="images/product_next.svg" alt="next.svg"></button>',
    centerMode: true,
  });
  $('.product_content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product_name',
    fade: true,
    arrows: false,
  });

  $('.menu_btn').on('click', function () {
    $('.menu_list').toggleClass('.menu_list__active');
  });
});
