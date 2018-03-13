/*global $, JQuery , alert , console*/

$(function () {
'use strict';

//adjust header height

var myHeader =$('.header');

myHeader.height($(window).height());

$(window).resize(function(){

myHeader.height($(window).height());

});

// scroll down 

$('.header .arrow i').click(function() {

    $('html, body').animate({

        scrollTop: $('.features').offset().top

    },1000);


});


// this is scrolling down on the header

$('.hire').click(function(){

    $('html, body').animate({
        
        scrollTop: $('.our-team').offset().top
        
    },2000);

});

$('.works').click(function(){

    $('html, body').animate({
        
        scrollTop: $('.our-work').offset().top
        
    },2000);

});

    // trigger nicescroll
    $("html").niceScroll({
          cursorcolor: "#424242",
          cursorwidth: "7px"
    });

    //this is for scroll top button
    var scrollButton = $('#scroll-top');
    $(window).scroll(function(){

        if ($(this).scrollTop() >=700){
            scrollButton.show();
        }
        else{
          scrollButton.hide();   
        }
        
    });
    
    scrollButton.click(function(){
        
        $('body, html').animate({scrollTop:0}, 1000)
    });


    /*show more items*/ 
   var myItem = $('.our-work .hide'),
            showMore  =  $(".show-more");

    showMore.click(function(){

        if (myItem.hasClass('hide')){

            myItem.addClass('isShow').removeClass('hide');   
            showMore.text('Show Less');
        }
        else if (myItem.hasClass('isShow')){
        
             myItem.removeClass('isShow').addClass('hide');   
             showMore.text('Show More');
        }

    });

    /* this for slider*/ 

    var right = $('.testimonials .fa-angle-right'),
        left  = $('.testimonials .fa-angle-left');


    function checkClients(){

        if ($('.clients:first').hasClass('active')){
            left.fadeOut(500);
        }
        else {
            left.fadeIn(500);
        }

        if ($('.clients:last').hasClass('active')){
            right.fadeOut(500);
        }
        else {
            right.fadeIn(500);
        }
    }

    checkClients();

    $('.testimonials i').click(function(){

        if ($(this).hasClass('fa-angle-right')){

            $('.testimonials .active').fadeOut(1000,function(){
                $(this).removeClass('active').next('.clients').addClass('active').removeClass('hidden')
                .fadeIn();
                checkClients();
            });


        }
        else{

            $('.testimonials .active').fadeOut(1000,function(){
                $(this).removeClass('active').prev('.clients').addClass('active').removeClass('hidden')
                .fadeIn();
                checkClients();
            });
        }
    });



});

        
    
