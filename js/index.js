$(document).ready(function(){

  $(".sub2").hide(); 

  $(".sub-item").hover(function(){
    $(this).find(".sub2").stop().slideDown();
    $(".sub-box").stop().slideDown();
},function(){
  $(this).find(".sub2").stop().slideUp();
  $(".sub-box").stop().slideUp();
});

$(".title").click(function(){
  $(this).siblings(".title").removeClass("active");
  $(this).toggleClass("active");
  $(this).siblings(".content").stop().slideUp();
  $(this).next().stop().slideToggle();

});

var swiper = new Swiper(".swiper", {
  spaceBetween: 30, 
  centeredSlides: true, 
  autoplay: {
    delay: 2500, 
    disableOnInteraction: false,},
  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev", 
  },
});




});