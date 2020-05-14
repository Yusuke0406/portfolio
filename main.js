$(function() {
    $("#panel-btn").click(function() {
      $("#panel").slideToggle(200);
      $("#panel-btn-icon").toggleClass("close");
      $('.dropdown').fadeToggle(200)
      return false;
    });


    var mvh = $('.page1').height();
    var mvh2 = $('.page1').height() + $('.page2').height();
    $(window).scroll(function() {
      var top = $(window).scrollTop();
      if (mvh < top && mvh2 > top) {
        $('body').css('background-color', ' #437076');
        $('.page2').css('color','Window')
        $('.page3').css('color','#fff')
        $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
          },4000);
        });
        }else if(mvh2 < top ){
          $('body').css('background-color', '#FFD700');
          $('.page3').css('color','black')
        } else {
          $('body').css('background-color', '#efeff0');
          $('.page2').css('color','black')
          $('.page3').css('color','#fff')
        }
    });

    $('.intro').fadeToggle(2000);

      $('.single').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        responsive: [                    
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
      });

      $('#login-show').click(function(){
        $('.login-modal-wrapper').fadeIn();
      //   $('body').css({
      //     position:'fixed',
      //     top: -posi,
      // });
      // return false;
      })

      $('.close-modal').click(function(){
        $('.login-modal-wrapper').fadeOut();
        // $('body').attr('style', '');
        // $(window).scrollTop(posi);
        // return false;
      })
  });


  
  