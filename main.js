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
        $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
          },4000);
        });
        }else if(mvh2 < top){
          $('body').css('background-color', '#efeff0');
        } else {
          $('body').css('background-color', '#efeff0');
          $('.page2').css('color','black')
        }
    });

    $('.intro').fadeToggle(2000);

      $('.single').slick({
        arrows:true,
        slidesToScroll: 1,
        slidesToShow:3,
        autoplay: false,
        autoplaySpeed: 2000,
      });
  });


  
  