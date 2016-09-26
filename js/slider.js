
    var slideWidth = $(".viewport").width();
    var sliderTimer;

$(document).ready(function(){

    console.log('$(.viewport).width() :' + $('.viewport').width());
    console.log('$(window).width() :' + $(window).width());

    $(document).mousemove(function() {
        
    if( $('.slide').width() > $(window).width() ) 
    $('.viewport').slideUp('2000');
    else
        $('.viewport').slideDown('2000');
    });


    $('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
    sliderTimer=setInterval(nextSlide,6000);
    $('.viewport,.dot').hover(function(){
        clearInterval(sliderTimer);
    },function(){
        sliderTimer=setInterval(nextSlide,6000);
    });

    $('.dot').click(function(){
        $('.dot.active').removeClass('active');
        $(this).addClass('active');
        var n = $('.dot').index(this);
        certainSlide(n);
    });

});

function nextSlide(){
    var currentSlide = parseInt($('.slidewrapper').data('current'));
    currentSlide++;
    if(currentSlide>=$('.slidewrapper').children().size())
    {
        currentSlide = 0;
    }

    $('.dot.active').removeClass('active');
    $('.dot').eq(currentSlide).addClass('active');
    $('.slidewrapper').fadeOut(1000).animate({left: -currentSlide * slideWidth}).fadeIn(1000).data('current',currentSlide);
}

function certainSlide(n){
    var currentSlide=n;
    $('.slidewrapper').fadeOut(1000).animate({left: -currentSlide*slideWidth},100).fadeIn(1000).data('current',currentSlide);
}