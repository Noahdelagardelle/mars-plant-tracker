$(function () {

  $('.action-modal .close').on( "click", function() {
    $('.action-modal').removeClass('open');
  });

  $('.empty-plant-plot').on( "click", function() {
    $('.action-modal__plant-health').addClass('open');
  });

  $('.overfolw__card--home').on( "click", function() {
    window.location.href = "map.html"
  });

  $('.tray__plant').on( "click", function() {
    $('.action-modal__add-plant').addClass('open');
  });

  $('.plant-cell--availible').on( "click", function() {
    $('td').removeClass('empty-plant-plot');
    $('.action-modal').removeClass('open');
  });

  $('.btn--add-journal').on( "click", function() {
    $('.action-modal--journal').addClass('open');
  });

  $('.btn--post').on( "click", function() {
    $('.action-modal').removeClass('open');
  });

  



 
  



  

  // 'use strict';

  // var $body = $('html, body');
  // var resultsDisplayed = 2;
  // var options = {
  //     prefetch: true,
  //     cacheLength: 2,
  //     pageCacheSize: 100,
  //     onStart: {
  //       duration: 250, // Duration of our animation
  //       render: function ($container) {
  //         // Add your CSS animation reversing class
  //         $container.addClass('is-exiting');

  //         // Restart your animation
  //         smoothState.restartCSSAnimations();
  //       }
  //     },
  //     onReady: {
  //       duration: 250,
  //       render: function ($container, $newContent) {
  //         // Remove your CSS animation reversing class
  //         $container.removeClass('is-exiting');

  //         // Inject the new content
  //         $container.html($newContent);

  //       }
  //     }
  //   },
  //   smoothState = $('#main').smoothState(options).data('smoothState');

});