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
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product_content',
    vertical: true,
    prevArrow:
      '<button type="button" class="product-prev"><img src="images/product_prev.svg" alt="prev.svg"></button>',
    nextArrow:
      '<button type="button" class="product-next"><img src="images/product_next.svg" alt="next.svg"></button>',
  });
  $('.product_content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product_name',
    fade: true
  });
    

});
