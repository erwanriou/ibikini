$(document).ready(function(){
  // This fonction is linked to the slick plugin that make the banner carousel
  $(".banner").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  });
  // Fonction to change the image of the content
  $(".product").hover(function(){
    $(this).find(".product-image img").attr("src", function(index, attr){
        return attr.replace(".jpg", "-active.jpg");
    });
  }, function(){
    $(this).find(".product-image img").attr("src", function(index, attr){
        return attr.replace("-active.jpg", ".jpg");
    });
  });
});
