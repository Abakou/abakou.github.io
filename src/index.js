window.$ = window.jQuery = require('jquery');
import {tns} from "tiny-slider/src/tiny-slider";

window.app = {

};


/* ============= SKILLS SLIDE ================ */
(function () {
    tns({
        container: '.skills-slide ul',
        items: 1,
        controls: false,
        navPosition: "bottom",
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        loop: true,
        center: true,
        mouseDrag: true,
        swipeAngle: false,
        center: true

    });
})();

/* ============= SIDE BARS TOGGLE ================ */
(function () {

    $('.navbar.ruban.mobile .bars').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".mobile-offcanvas").toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".off-canvas-screen-overlay").toggleClass("show");
    });


    // Close menu when pressing ESC
    $(document).on('keydown', function (event) {
        if (event.keyCode === 27) {
            $(".off-canvas-screen-overlay").removeClass("show");
            $("body").removeClass("overlay-active");
            $(".mobile-offcanvas").removeClass("show");
        }
    });

    $(".bars-close, .off-canvas-screen-overlay").click(function (e) {
        $(".off-canvas-screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");
    });

    $(".mobile-offcanvas a").on('click', function(){
        setTimeout(function(){
            $('.bars-close').click();  
        }, 200)
    })
    
})();


(function () {

    $(document).ready(function () {
        if (window.pageYOffset > 100) {
            $('.header').addClass("srcolled");
        }
    })

    $(window).on('scroll', function name(evt) {
        let csp = window.pageYOffset;
        var header = $('.header');

        if (csp > 100) {
            header.addClass("srcolled");
        } else {
            header.removeClass("srcolled");
        }
    })

})();



/* =============== reCAPTCHA v3 =============== */

function ContactSubmit(token) {

    var form = $('.contact-me form');
    $('.contact-me').addClass('sending');


    var data = {
        name: form.find('input[name=fullname]').val(),
        email: form.find('input[name=email]').val(),
        message: form.find('textarea[name=message]').val()
    }

    //data.message = "Envoyé Par " + data.name + " ########### " + message;
    //data.name = undefined;
  
    $.ajax({
        method: 'POST',
        url: 'https://formspree.io/f/xjvpjeyq',
        contentType: "application/json",
        accepts: 'application/json',
        data: JSON.stringify(data)
    }).done(function (response) {
        $('.contact-me').addClass('send-success');
        if(form[0].reset)form[0].reset();
    }).fail(function(){
        $('.contact-me').addClass('send-error');
    })
    .always(function () {
    })
};

(function () {
    var contact = $('.contact-me');
    var sender = $('.contact-me .sender');
    sender.on('click', function (e) {
        if (contact.hasClass('send-error') || contact.hasClass('send-success') ){
            contact.removeClass('sending send-error  send-success sending');
        }
    })
})();


/* ======== SMOOTH SCROOL ================= */

$(document).ready(function(){

    if(getComputedStyle(document.body).scrollBehavior)return;
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
  // End if
    });
  });
  