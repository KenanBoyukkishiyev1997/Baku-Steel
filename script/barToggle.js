 
export function barToggle() {
    $(document).ready(function () {
        let $slider = $('.slider-newes-item');
        let $customPrevArrow = $('.slider-prev');
        let $customNextArrow = $('.slider-next');

      

        $slider.slick({
            // Slick slider options here
            infinite: false,
            mobileFirst: true,//add this one
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true, // Hide the default arrows
            prevArrow: $('.slider-prev'), // Target the custom previous arrow element
            nextArrow: $('.slider-next'),
            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },

                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                    }
                },

            ],  // Target the custom next arrow element
        });

        $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            if (nextSlide === 0) {
                $customPrevArrow.addClass('disabled');
            } else {
                $customPrevArrow.removeClass('disabled');
            }

            if (nextSlide === slick.slideCount - 1) {
                $customNextArrow.addClass('disabled');
            } else {
                $customNextArrow.removeClass('disabled');
            }
        });

     
  

        $customNextArrow.click(function () {
          
            if ($slider.slick('slickCurrentSlide') !== $slider.slick('getSlick').slideCount - 1) {
                $slider.slick('slickNext');
            }

        });

       

        $customPrevArrow.click(function () {
            // Check if the slider is not on the first slide
            if ($slider.slick('slickCurrentSlide') !== 0) {
                $slider.slick('slickPrev');
            }
        });

        $('.tab-item-newes').on('click', function () {
            let slideIndex = $(this).data('slide-newes');
            $('.tab-item-newes').removeClass('active');
            $(this).addClass('active');

            $('.slider-newes-item .item').removeClass('active').hide();

            $('.item[data-slide-newes="' + slideIndex + '"]').addClass('active').show();
            $slider.slick('slickPause');

            // Go to the corresponding slide in the slider
            //  $slider.slick('slickGoTo', slideIndex);

        })

    })
}