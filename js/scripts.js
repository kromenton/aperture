$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:2000,
        navText: [ '', ' ' ],
        nav: false,
        dots: true,


        responsive:{
            0:{
                items:2
            },
            440:{
                items:3
            },
            665:{
                items:4
            },
            1100:{
                items:5
            }
        }
    });
});