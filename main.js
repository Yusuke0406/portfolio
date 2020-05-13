$(function() {
    $("#panel-btn").click(function() {
      $("#panel").slideToggle(200);
      $("#panel-btn-icon").toggleClass("close");
      $('.dropdown').fadeToggle(200)
      return false;
    });


    var mvh = $('.page1').height();
    $(window).scroll(function() {
      var top = $(window).scrollTop();
      if (mvh <= top) {
        $('body').css('background-color', ' #437076');
        $('.page2').css('color','Window')
        $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
          },4000);
        });
        } else {
        $('body').css('background-color', '#efeff0');
        $('.page2').css('color','black')
      }
    });
  });

  
  