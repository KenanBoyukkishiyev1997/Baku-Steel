

export function scrollpage(){
    const slider = tns({
        container: '.hero-slider',
        navContainer: false,
        items: 1,
        speed: 400,
        mouseDrag: true,

       autoplay: true,
       autoplayTimeout: 3500,
       
    });

    $(document).ready(function(){

let $sliderProduct = $('.slider-product')

  let $customPrevArrow = $('.slider-prev');
  let $customNextArrow = $('.slider-next');



        $sliderProduct.slick({
            infinite:true,
            arrows: true, // Hide the default arrows
            prevArrow: $('.slider-prev'), // Target the custom previous arrow element
            nextArrow: $('.slider-next'), 
            mobileFirst:true,//add this one
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [

              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                }
              },
              {
                breakpoint: 300,
                settings: {
                  slidesToShow: 2,
                }
              },
             
             ], // Target the custom next arrow element
            onInit: function(slick) {
              // Remove the 'last-active' class from all slides initially
              $sliderProduct.find('.slick-slide').removeClass('last-active');
              // Add the 'last-active' class to the last slide
              $sliderProduct.find('.slick-slide:last').addClass('last-active');
            },
            afterChange: function(event, slick, currentSlide) {
              // Remove the 'last-active' class from all slides
              $sliderProduct.find('.slick-slide').removeClass('last-active');
              // Calculate the index of the last slide in the current set of visible slides
              const lastVisibleIndex = currentSlide + slick.options.slidesToShow - 1;
              // Add the 'last-active' class to the new last slide
              $sliderProduct.find('.slick-slide[data-slick-index="' + lastVisibleIndex + '"]').addClass('last-active');
            }
        })
      
      
        // Update arrow states on beforeChange event
        $sliderProduct.on('beforeChange', function(event, slick, currentSlide, nextSlide){
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

        $customPrevArrow.click(function() {
         
          if ($sliderProduct.slick('slickCurrentSlide') !== 0) {
            $sliderProduct.slick('slickPrev');
          }

        });
      
        $customNextArrow.click(function() {

          if ($sliderProduct.slick('slickCurrentSlide') !== $sliderProduct.slick('getSlick').slideCount - 1) {
            $sliderProduct.slick('slickNext');
          }

        });
      });
    
}