/*
* MALIN - Perfect Coming Soon Template
* Build Date: August 2015
* Author: Madeon08
* Copyright (C) 2015 Madeon08
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Fullscreen Div
    3. Loader fadeIn
    4. Scroll plugins
    5. Scroll to anchor
    6. Buttons / Menu interactions
    7. Countdown
    9. Swipebox Gallery
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function() {

    setTimeout(function() {

        $(".loading-part").addClass("fadeOut");
        $("#home-part").removeClass("scale-max").addClass("scale-uni");
        $("#navigation").removeClass("").addClass("fadeInLeft");

    }, 2000);

    setTimeout(function() {
        $(".loading-part").addClass("display-none");
        $("#home-part").removeClass("scale-uni").addClass("");
    }, 3200);

});

$(document).ready(function(){

/* ------------------------------------- */
/* 2. Fullscreen Div ................... */
/* ------------------------------------- */

    function fullScreenContainer() {
    
        var screenWidth = $(window).width() + "px";
        var screenHeight = $(window).height() + "px";
        
        $("#home-part").css({
        width: screenWidth,
        height: screenHeight
        });

        $(".loader-part").css({
        width: screenWidth,
        height: screenHeight
        });
        
        $(window).resize( function () {
        
        var screenWidth = $(window).width() + "px";
        var screenHeight = $(window).height() + "px";
        
        $("#home-part").css({
        width: screenWidth,
        height: screenHeight
        }); 

        $(".loader-part").css({
        width: screenWidth,
        height: screenHeight
        });
        
        });
    
    }

    fullScreenContainer();

/* ------------------------------------- */
/* 3. Loader fadeIn .................... */
/* ------------------------------------- */

    setTimeout(function() {

        $(".loader-part").removeClass('opacity-0').addClass("fadeIn");

    }, 200);

/* ------------------------------------- */
/* 4. Scroll plugins ................... */
/* ------------------------------------- */

    $(function() {
        $('body').bind('mousewheel', function(event) {
          event.preventDefault();
          var scrollTop = this.scrollTop;
          this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
          //console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
        });
    });


    function scrollbar(){
        $('body').mCustomScrollbar({
            scrollInertia: 150,
            axis            :"y"
        });    
    }

  scrollbar();

/* ------------------------------------- */
/* 5. Scroll to anchor ................. */
/* ------------------------------------- */

    $('a.about-content').click(function(){
        $("#mcs_container").mCustomScrollbar("scrollTo", "#main-about",{
            scrollInertia:500,
            callbacks:false
        });
    });

    $('a.services-content').click(function(){
        $("#mcs_container").mCustomScrollbar("scrollTo", "#services-content",{
            scrollInertia:500,
            callbacks:false
        });
    });

    $('a.contact-content').click(function(){
        $("#mcs_container").mCustomScrollbar("scrollTo", "#contact-content",{
            scrollInertia:500,
            callbacks:false
        });
    });

/* ------------------------------------- */
/* 6. Buttons / Menu interactions ...... */
/* ------------------------------------- */

    $('.open-menu-mobile').click(function(){
            
        $('#navigation').toggleClass("translate-nav");
        $('.open-menu-mobile').toggleClass("translate-button");
        $('#home-part').toggleClass("opacity-03");
        $('#content-part').toggleClass("opacity-03");
        $(".opening-menu").toggleClass("display-none");
        $(".closing-menu").toggleClass("display-none");

    });

    $('ul.main-navigation a').click(function(){

        $(".opening-menu").removeClass("display-none");
        $(".closing-menu").addClass("display-none");
        $('#home-part').removeClass("opacity-03");
        $('#content-part').removeClass("opacity-03");
        $('#navigation').removeClass("translate-nav");
        $('.open-menu-mobile').removeClass("translate-button");

    });

    $('a.nav-link').click(function(){
        
        $(".open-menu-mobile").addClass("dark-button");

    });

    $('a.nav-link').click(function(){

        $('#content-part').removeClass("").addClass('right-content');

        $('.overlay').removeClass("").addClass('darky-overlay');

        $('#home-part').removeClass("").addClass('right-home');
        $('#home-part .item-title').removeClass("fadeIn").addClass('fadeOut');
            
        $('.mCSB_scrollTools').removeClass("").addClass('mCSB_scrollTools-left');

    });

    $('a.open-content').click(function(){
        
        $('#content-part').removeClass("opacity-03").addClass('right-content');

        $('.overlay').removeClass("").addClass('darky-overlay');

        $('#home-part').removeClass("opacity-03").addClass('right-home');
        $('#home-part .item-title').removeClass("fadeIn").addClass('fadeOut');

        $(".open-menu-mobile").addClass("dark-button").removeClass("translate-button");
            
        $('.mCSB_scrollTools').removeClass("").addClass('mCSB_scrollTools-left');

        $('#navigation').removeClass("translate-nav");
        $(".opening-menu").removeClass("display-none");
        $(".closing-menu").addClass("display-none");

    });

    $('a.nav-link-close').click(function(){

        $('#content-part').removeClass("right-content opacity-03").addClass('');

        $('.overlay').removeClass("darky-overlay").addClass('');

        $('#home-part').removeClass("right-home opacity-03").addClass('');
        $('#home-part .item-title').removeClass("fadeOut").addClass('fadeIn');
        
        $('.mCSB_scrollTools').removeClass("mCSB_scrollTools-left").addClass('');

        $(".open-menu-mobile").removeClass("dark-button");

        setTimeout(function() {

            $("#mcs_container").mCustomScrollbar("scrollTo", "#main-about",{
                scrollInertia:500,
                callbacks:false
            });

        }, 601);

    });

    // Esc key action / This part is used to close all the content and come back to home.
    // Commented because if you click ESC on your keyboard when you are viewing the gallery, the gallery is closed and you come back at the home.

    // $(document).keyup(function(e) {
    //     if (e.keyCode == 27) { // Esc
    //     $('#content-part').removeClass("right-content opacity-03").addClass('');

    //     $('.overlay').removeClass("darky-overlay").addClass('');

    //     $('#home-part').removeClass("right-home opacity-03").addClass('');
    //     $('#home-part .item-title').removeClass("fadeOut").addClass('fadeIn');
        
    //     $('.mCSB_scrollTools').removeClass("mCSB_scrollTools-left").addClass('');

    //     $(".open-menu-mobile").removeClass("dark-button");

    //     setTimeout(function() {

    //         $("#mcs_container").mCustomScrollbar("scrollTo", "#main-about",{
    //             scrollInertia:500
    //         });

    //     }, 601);
        
    // });

/* ------------------------------------- */
/* 7. Countdown ........................ */
/* ------------------------------------- */

    // Set you end date just below
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day': 31,
            'month': 12,
            'year': 2016,
            'hour': 11,
            'min': 13,
            'sec': 0
        },
        omitWeeks: true
    });

/* ------------------------------------- */
/* 8. Swipebox Gallery ................. */
/* ------------------------------------- */

    $('.swipebox').swipebox();

    /* Video */
    $('.swipebox-video').swipebox();
    
});