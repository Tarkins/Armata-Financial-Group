$(document).ready(function() {
  //menu toggle
  $('.toggle-menu').on('click', function() {
    $(this).toggleClass('on');
    $('.main-menu').slideToggle();
    return false;
  });

  //cards transformation
  $('.section_advantages').waypoint(function() {
    $('.section_advantages .cooperation__card').each(function(index){
      var $this = $(this);
      setTimeout(function() {
        $this.removeClass('card_off').addClass('card_on');
      }, 100*index);
    })
  }, {offset: '50%'});

  //arrows animation
  $('.section_how-work').waypoint(function() {
    $('.section_how-work .arrow').each(function(index){
      var $this = $(this);
      setTimeout(function() {
        var myAnimation = new DrawFillSVG({
          elementId: 'arrow-' + index
        });
      }, 500*index);
    })
    this.destroy();
  }, {offset: '70%'});

  //Contacts Slider
  $('.slider_feedback').owlCarousel({
    autoplay: true,
    items: 1,
    loop: true,
    nav: true,
    navText: []
  });

  //Footer-menu scroll on click
  $('.footer__content .toggle-menu').on( 'click', function() {
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
    return false;
  });

  //Header arrow scroll on click
  $('.arrow-bottom').on('click', function() {
    $('html, body').animate({ scrollTop: $('.main-header').outerHeight() }, 'slow');
  });

  //Footer arrow scroll on click
  $('.to-top').on('click', function() {
      $('html, body').animate({ scrollTop: 0 }, 1500);
    });

  //Section connect cards animation

  $('.section_contact').waypoint(function() {
    $(' .contact__card ').each(function(index) {
      var $this = $(this);
      setTimeout(function() {
        $this.removeClass('card_off').addClass('card_on');
      }, index * 100);
    });
  }, {offset: '60%'});

  //SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  //E-mail Ajax Send
  //Documentation & Example: https://github.com/agragregra/uniMail
  $(".form").on ('submit', function(e) { //Change
    e.preventDefault();
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php", //Change
      data: th.serialize()
    }).done(function(message) {
      if (message === 'ok') {
        $.magnificPopup.open({
          items: {
            src: '.ok',
            type: 'inline',
            midClick: true
          }
        });
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      } else {
        $('.error').magnificPopup({
          type: 'inline',
          midClick: true
        });
      }
    });
    return false;
  });

  // Modal window on click
  $('.section__footer .button').on('click', function() {
    $( '#modal .form__title' ).html($(this).text());
    $( '#modal input[type="hidden"]' ).html($(this).text());
  }).magnificPopup({
    type:'inline',
    midClick: true,
    mainClass: 'mfp-form'
  });


  //Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };

  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});


//animate dom elements
$('.section__head').animated('fadeInRight');