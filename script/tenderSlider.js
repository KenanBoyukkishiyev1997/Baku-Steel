export function tenderSlider() {
    $(document).ready(function () {
        let $customPrevArrowTender = $('.slider-prevTender');
        let $customNextArrowTender = $('.slider-nextTender');
        let $sliderTender = $('.slider-tender-item');

        $sliderTender.slick({
            // Slick slider options here
            infinite: false,
            arrows: true, // Hide the default arrows
            prevArrow: $('.slider-prev'), // Target the custom previous arrow element
            nextArrow: $('.slider-next'),
            autoplay: true,
            autoplaySpeed: 2000,
            mobileFirst: true,//add this one

            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                    }
                },

                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                    }
                },

            ],  // Target the custom next arrow element
        });

        $sliderTender.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            if (nextSlide === 0) {
                $customPrevArrowTender.addClass('disabled');
            } else {
                $customPrevArrowTender.removeClass('disabled');
            }

            if (nextSlide === slick.slideCount - 1) {
                $customNextArrowTender.addClass('disabled');
            } else {
                $customNextArrowTender.removeClass('disabled');
            }
        });

        $customNextArrowTender.click(function () {
            // Check if the slider is not on the last slide
            if ($sliderTender.slick('slickCurrentSlide') !== $sliderTender.slick('getSlick').slideCount - 1) {
                $sliderTender.slick('slickNext');
            }
        });

        $customPrevArrowTender.click(function () {
            // Check if the slider is not on the first slide
            if ($sliderTender.slick('slickCurrentSlide') !== 0) {
                $sliderTender.slick('slickPrev');
            }
        });

        $('.tab-item').on('click', function () {
            let slideIndex = $(this).data('slide-index');

            // Activate the clicked tab and deactivate others
            $('.tab-item').removeClass('active');
            $(this).addClass('active');

            // Hide all slides
            $('.slider-tender-item .item').removeClass('active').hide();

            // Show the corresponding slide
            $('.item[data-slide-index="' + slideIndex + '"]').addClass('active').show();

            // Go to the corresponding slide in the slider
            // $sliderTender.slick('slickGoTo', slideIndex);
        });
    })
}