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
        $('#awesome').css('color','#fff')
        $('#awesome2').css('color','#fff')
        $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
          },4000);
        });
        }else if(mvh2 < top ){
          $('body').css('background-color', '#f1c600');
          $('.page3').css('color','black')

        } else {
          $('body').css('background-color', '#efeff0');
          $('.page2').css('color','black')
          $('.page3').css('color','#fff')
          $('#awesome').css('color','black')
          $('#awesome2').css('color','black')
        }
    });

    $('.intro').fadeToggle(2000);

      $('.single').slick({
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<span class="prev-arrow">&lt;</span>',
        nextArrow: '<span class="next-arrow">&gt;</span>',
      });

      $('#merukari').click(function(){
        $('.merukari-modal-wrapper').fadeIn();
      })
      $('.close-modal').click(function(){
        $('.merukari-modal-wrapper').fadeOut();
      })

      $('#task').click(function(){
        $('.task-modal-wrapper').fadeIn();
      })
      $('.close-modal').click(function(){
        $('.task-modal-wrapper').fadeOut();
      })

      $('#twitter').click(function(){
        $('.twitter-modal-wrapper').fadeIn();
      })
      $('.close-modal').click(function(){
        $('.twitter-modal-wrapper').fadeOut();
      })

      $('#react').click(function(){
        $('.react-modal-wrapper').fadeIn();
      })
      $('.close-modal').click(function(){
        $('.react-modal-wrapper').fadeOut();
      })
  });


  
  