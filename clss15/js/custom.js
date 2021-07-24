$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.venobox').venobox(); 
    var mixer = mixitup('.latest_main');
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if (scrolling > 50){
            $(".back_to_top").fadeIn(500);
        } else{
            $(".back_to_top").fadeOut(500);
        }
        if(scrolling > 100){
            $(".menu").addClass("nav_bg");
        } else{
            $(".menu").removeClass("nav_bg");
        }
    });

   

    $(".back_to_top").click(function(){
        $('html,body').animate({
            scrollTop:0
        },2000)
    });

    $('.img-area').hiSlide();
   
    $('.banner_slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:".prev",
        nextArrow:".next",
        dots: true,
      });
    
});