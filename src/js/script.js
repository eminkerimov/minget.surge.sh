$(function() {
    $('.calendar').pignoseCalendar();
});


function myFunction() {
   var element = document.querySelector(".mobil-menu");
   element.classList.toggle("open");
   var element = document.querySelector("body");
   element.classList.toggle("overflow-hidden");
}


$(document).ready(function(){
    $('.slick').slick({
        arrows:false,
        dots:true,
        slidesToShow:2,
        slidesToScroll:2,
        speed:2000,
        infinite:true,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        responsive:[
            {
                breakpoint:740,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ]
    });
    $('.slider').slick({
        infinite:true,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnDotsHover:false,
        arrows:false,
        fade:true,
    });
    $('.slideshow').slick({
        arrows:true,
        dots:true,
        slidesToShow:2,
        slidesToScroll:2,
        speed:1500,
        infinite:true,
        appendArrows:$('.arrow'),
        responsive:[
            {
                breakpoint:740,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ]
    });
});