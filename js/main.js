$(document).ready(function () {
    "use strict";
    
    $(".header_top_burger").click(function() {
        $(this).toggleClass("active");
        $(".modal_header").toggleClass("active");
    });

    $(".investor_block_text_list_item_head").click(function() {
      $(this).parent().toggleClass("active");
    });

    $(".footer_block_second_btn").click(function() {
      $(this).toggleClass("active");
      $(".footer_nav").toggleClass("active");
    });

    $(".back_modal").click(function() {
      $(this).removeClass("active");
      $(".modal_window").removeClass("active");
    });

    $(".modal_header_btn").click(function() {
      $(".modal_header").removeClass("active");
      $(".header_top_burger").removeClass("active");
      $(".back_modal").addClass("active");
      $(".modal_window").addClass("active");
      $(".footer_block_second_btn").removeClass("active");
      $(".footer_nav").removeClass("active");
    });

    $(".header_bottom_callback").click(function() {
      $(".back_modal").addClass("active");
      $(".modal_window").addClass("active");
    });

    $(".investor_block_text_callback").click(function() {
      $(".back_modal").addClass("active");
      $(".modal_window").addClass("active");
    });

    $(".main_block_text_callback").click(function() {
      $(".back_modal").addClass("active");
      $(".modal_window").addClass("active");
    });

    
    $('.project_block_mob_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        dots: false,
        prevArrow: $('.project_block_mob_prev'),
        nextArrow: $('.project_block_mob_next'),
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                fade: true,
                slidesToScroll: 1
              }
            }
        ]
    });


});