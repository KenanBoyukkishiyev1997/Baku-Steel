

export function scrollpage(){
    const slider = tns({
        container: '.hero-slider',
        navContainer: false,
        items: 1,
        speed: 400,

        swipeAngle: false,
    });

    $(document).ready(function(){

      let $slider = $('.slider-newes-item');
      let $sliderTender = $('.slider-tender-item');
let $sliderProduct = $('.slider-product')
let $sliderEcologic = $('.slider-ecologic')

  let $customPrevArrow = $('.slider-prev');
  let $customNextArrow = $('.slider-next');
  let $customDots = $('.custom-dot');


        $slider.slick({
          // Slick slider options here
          infinite:true,
          mobileFirst:true,//add this one
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
      
        // Update arrow states on beforeChange event
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
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


        $sliderTender.slick({
          // Slick slider options here
          infinite:true,
          arrows: true, // Hide the default arrows
          prevArrow: $('.slider-prev'), // Target the custom previous arrow element
          nextArrow: $('.slider-next'),
          autoplay: true,
          autoplaySpeed: 2000,
          mobileFirst:true,//add this one

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

      
        // Update arrow states on beforeChange event
        $sliderTender.on('beforeChange', function(event, slick, currentSlide, nextSlide){
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
                breakpoint: 1000,
                settings: {
                  slidesToShow: 1,
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



        $sliderEcologic.on('beforeChange', function(event, slick, currentSlide, nextSlide){
          $customDots.removeClass('active');
          $customDots.eq(nextSlide).addClass('active');
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



        $customPrevArrow.click(function() {
          // Check if the slider is not on the first slide
          if ($sliderTender.slick('slickCurrentSlide') !== 0) {
            $sliderTender.slick('slickPrev');
          }

          if ($slider.slick('slickCurrentSlide') !== 0) {
            $slider.slick('slickPrev');
          }

          if ($sliderProduct.slick('slickCurrentSlide') !== 0) {
            $sliderProduct.slick('slickPrev');
          }

          if ($sliderEcologic.slick('slickCurrentSlide') !== 0) {
            $sliderEcologic.slick('slickPrev');
          }

          
        });

        $customDots.click(function() {
          let dotIndex = $(this).index();
          $sliderEcologic.slick('slickGoTo', dotIndex);
        });
      
        $customNextArrow.click(function() {
          // Check if the slider is not on the last slide
          if ($sliderTender.slick('slickCurrentSlide') !== $sliderTender.slick('getSlick').slideCount - 1) {
            $sliderTender.slick('slickNext');
          }

          if ($sliderProduct.slick('slickCurrentSlide') !== $sliderProduct.slick('getSlick').slideCount - 1) {
            $sliderProduct.slick('slickNext');
          }

          if ($slider.slick('slickCurrentSlide') !== $slider.slick('getSlick').slideCount - 1) {
            $slider.slick('slickNext');
          }
        });
      });

    
    


    // const sliderEcolog = tns({
    //     container: '.slider-ecologic',
    //     items: 2,
    //     speed: 400,
    //    // edgePadding: 100,
    //     // fixedWidth: 400,
    //     loop: false,
    //     gutter: 10,
    //     controlsText:["",""]

    //        //   center: true,

    // });

}