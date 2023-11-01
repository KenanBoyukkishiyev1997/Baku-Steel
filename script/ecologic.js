export function ecologicSlider() {
    $(document).ready(function () {
        let $customPrevArrowEco = $('.slider-prevEcologic');
        let $customNextArrowEco = $('.slider-nextEcologic');
        let $sliderEcologic = $('.slider-ecologic')
        let $customDots = $('.custom-dot');
        let $ecologicBoxes = $('.ecologic__box');

        $sliderEcologic.slick({
            slidesToShow: 1,       // Show one slide at a time
          slidesToScroll: 1,
          mobileFirst:true,//add this one

          centerPadding: '100px',   // Remove center padding
          infinite: true,  
          arrows: true,

          autoplay: true,
          autoplaySpeed: 2000,
          prevArrow: $('.slider-prev'),
          nextArrow: $('.slider-next'),

          responsive: [

           
            {
              breakpoint: 1023,
              settings: {
                centerMode: true,     // Enable center mode
                slidesToShow: 1,       // Show one slide at a time

              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,       // Show one slide at a time

                centerMode: false,     // Enable center mode

              }
            },
           ],

          
        });

        $sliderEcologic.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $customDots.removeClass('active');
            $customDots.eq(nextSlide).addClass('active');
            if (nextSlide === 0) {
              $customPrevArrowEco.addClass('disabled');
            } else {
              $customPrevArrowEco.removeClass('disabled');
            }
        
            if (nextSlide === slick.slideCount - 1) {
              $customNextArrowEco.addClass('disabled');
            } else {
              $customNextArrowEco.removeClass('disabled');
            }
          });

          $sliderEcologic.on('afterChange', function (event, slick, currentSlide) {
            updateActiveClasses(currentSlide);
        });

          function updateActiveClasses(index) {
            $customDots.removeClass('active');
            $customDots.eq(index).addClass('active');
            $ecologicBoxes.removeClass('active');
            $ecologicBoxes.eq(index).addClass('active');
        }

        $customNextArrowEco.click(function () {
            // Check if the slider is not on the last slide
            if ($sliderEcologic.slick('slickCurrentSlide') !== $sliderEcologic.slick('getSlick').slideCount - 1) {
                let nextSlideIndex = $sliderEcologic.slick('slickCurrentSlide') + 1;
                updateActiveClasses(nextSlideIndex);
                $sliderEcologic.slick('slickNext');
            }
        });

        $customPrevArrowEco.click(function () {
            // Check if the slider is not on the first slide
            if ($sliderEcologic.slick('slickCurrentSlide') !== 0) {
                let prevSlideIndex = $sliderEcologic.slick('slickCurrentSlide') - 1;
                updateActiveClasses(prevSlideIndex);
                $sliderEcologic.slick('slickPrev');
            }
        });

        // Click event for custom dots
        $customDots.click(function () {
            let dotIndex = $(this).index();
            updateActiveClasses(dotIndex);
            $sliderEcologic.slick('slickGoTo', dotIndex);
        });
    
    })
}