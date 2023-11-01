

export function mediaSlick(){
    $(document).ready(function() {
        $('.slider1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider2'
        });

        $('.slider2').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider1',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
    });
   
   
}