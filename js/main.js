$(function () {
    'use strict';
    // Adjust Slider Height
    var winHeight = $(window).height();
    var upperHeight  = $('.upper-bar').innerHeight();
    var navHeight    = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(winHeight - (upperHeight + navHeight));
    
    // Featured Work Shuffle
    $('.featured_work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') 
        {
            $('.shuffle-imgs .col-md').css('opacity', 1);
        }
        else 
        {
            $('.shuffle-imgs .col-md').css('opacity', '.10');
            $($(this).data('class')).parent() .css('opacity', 1);
        }
    });

});

