$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:2000,
        navText: [ '', ' ' ],
        nav: true,
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
    $( function() {
        $( "#dialog" ).dialog({
            autoOpen: false,
            modal: true,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });

        $( "#opener" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });
    } );
});