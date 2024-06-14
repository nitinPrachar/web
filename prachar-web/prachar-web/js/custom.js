// 1.cursor start
var cursorFollower = document.getElementById("cursor-follower");
var cursor = {
  x: 0,
  y: 0
};
var follower = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0
};
const stiffness = 0.1; // Spring stiffness
const damping = 0.05; // Damping coefficient
document.addEventListener("mousemove", function(e) {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
  var cursor_el = document.getElementById("cursor");
  cursor_el.style.left = e.clientX + "px";
  cursor_el.style.top = e.clientY + "px";
});
document.addEventListener("DOMContentLoaded", function(event) {
  function animate() {
    // Calculate spring force
    let dx = cursor.x - follower.x;
    let dy = cursor.y - follower.y;
    let springForceX = dx * stiffness;
    let springForceY = dy * stiffness;
    // Damping
    follower.vx *= damping;
    follower.vy *= damping;
    // Apply forces to velocity
    follower.vx += springForceX;
    follower.vy += springForceY;
    // Update position
    follower.x += follower.vx;
    follower.y += follower.vy;
    // Apply position to the DOM element
    cursorFollower.style.left = follower.x + "px";
    cursorFollower.style.top = follower.y + "px";
    requestAnimationFrame(animate);
  }
  animate();
});


// 2.hero slider swiper js

  // HERO SLIDER
  var menu = [];
  jQuery('.swiper-slide').each(function(index) {
    menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
  });
  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      progress: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".slide-inner").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },
      touchStart: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function(speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-inner").style.transition = speed + "ms";
        }
      }
    }
  };
  var swiper = new Swiper(".swiper-container", swiperOptions);
  // DATA BACKGROUND IMAGE
  var sliderBgSetting = $(".slide-bg-image");
  sliderBgSetting.each(function(indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
  });

// 3.logo swiper slider

var swiper = new Swiper(".nkSwiper", {
    slidesPerView: 7,
    pagination: {
      clickable: true,
    },
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });


//   4. services hover
$(document).ready(function() {
    $('#digital').mouseenter(function() {
      $('.d-digital').css("display", "block");
     
    })
    $('#digital').mouseleave(function() {
      $('.d-digital').css("display", "none");
      

    })

    $('#print').mouseenter(function() {
      $('.d-print').css("display", "block");
     
    })
    $('#print').mouseleave(function() {
      $('.d-print').css("display", "none");
     
    })

    $('#media').mouseenter(function() {
      $('.d-media').css("display", "block");
     
    })
    $('#media').mouseleave(function() {
      $('.d-media').css("display", "none");
     
    })

    $('#sports-marketing').mouseenter(function() {
      $('.d-sports').css("display", "block");
     

    })
    $('#sports-marketing').mouseleave(function() {
      $('.d-sports').css("display", "none");
     

    })

    $('#celebrity-endors').mouseenter(function() {
      $('.d-sports').css("display", "block");
     

    })
    $('#celebrity-endors').mouseleave(function() {
      $('.d-sports').css("display", "none");
     

    })

    $('#ad-film').mouseenter(function() {
      $('.d-adfilm').css("display", "block");
     

    })
    $('#ad-film').mouseleave(function() {
      $('.d-adfilm').css("display", "none");
     

    })
    $('#creative').mouseenter(function() {
      $('.d-creative').css("display", "block");
     

    })
    $('#creative').mouseleave(function() {
      $('.d-creative').css("display", "none");
     

    })
  })

//   5.counter 

$(window).load(function() {
    $('.counter').counterUp({
       delay: 20,
       time: 1000
     });
    })

// 6.button hover with text-change

$(document).ready(function () {
    const viewportOffset = {
        x: 0,
        y: $(window).scrollTop()
    };

    const Magnet = (elements) => {
        elements.each(function () {
            const element = $(this);
            let isMagnetic = false;
            let isTransformed;
            const max = element.attr("offset-hover-max") || 0.7;
            const min = element.attr("offset-hover-min") || 0.5;

            const grap = (dx, dy) => {
                gsap.to(element, { duration: 0.3, x: 0.6 * dx, y: 0.6 * dy, rotation: 0.07 * dx, ease: "power2.out" });
            };

            const reset = () => {
                gsap.to(element, { duration: 0.7, x: 0, y: 0, scale: 1, rotation: 0, ease: "elastic.out" });
            };

            $(window).on("mousemove", function (e) {
                const mouse = {
                    x: e.clientX,
                    y: e.clientY - viewportOffset.y
                };
                const maxDistance = isMagnetic ? max : min;
                const width = element.outerWidth();
                const height = element.outerHeight();
                const offset = element.offset();
                const center = {
                    x: offset.left + width / 2,
                    y: offset.top + height / 2
                };
                const dx = mouse.x - center.x;
                const dy = mouse.y - center.y;
                isTransformed = false;
                if (Math.sqrt(dx * dx + dy * dy) < width * maxDistance) {
                    isTransformed = true;
                    if (!isMagnetic) isMagnetic = true;
                    grap(dx, dy);
                }
                if (!isTransformed && isMagnetic) {
                    reset();
                    isMagnetic = false;
                }
            });
        });
    };

    $('.magnet-btn').on("mouseenter mouseleave", function (e) {
        const $element = $(this);
        const width = $element.outerWidth();
        const height = $element.outerHeight();
        const x = (e.pageX - $element.offset().left - width / 2) * (width > height ? height / width : 1);
        const y = (e.pageY - $element.offset().top - height / 2) * (height > width ? width / height : 1);
        const $background = $element.find(".magnet-btn__bg");
        const direction = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
        if (e.type === "mouseenter") {
            switch (direction) {
                case 0:
                    gsap.fromTo($background, { left: "0%", top: "-100%" }, { duration: 0.3, top: "0%", left: "0%", ease: "power3.out" });
                    break;
                case 1:
                    gsap.fromTo($background, { left: "100%", top: "0%" }, { duration: 0.3, top: "0%", left: "0%", ease: "power3.out" });
                    break;
                case 2:
                    gsap.fromTo($background, { left: "0%", top: "100%" }, { duration: 0.3, top: "0%", left: "0%", ease: "power3.out" });
                    break;
                case 3:
                    gsap.fromTo($background, { left: "-100%", top: "0%" }, { duration: 0.3, top: "0%", left: "0%", ease: "power3.out" });
                    break;
            }
        } else {
            switch (direction) {
                case 0:
                    gsap.to($background, { duration: 0.3, left: "0%", top: "-100%", ease: "power3.out" });
                    break;
                case 1:
                    gsap.to($background, { duration: 0.3, left: "100%", top: "0%", ease: "power3.out" });
                    break;
                case 2:
                    gsap.to($background, { duration: 0.3, left: "0%", top: "100%", ease: "power3.out" });
                    break;
                case 3:
                    gsap.to($background, { duration: 0.3, left: "-100%", top: "0%", ease: "power3.out" });
                    break;
            }
        }
    });

    const btn = $('.magnet-btn');
    Magnet(btn);
});


// 7.button move

var hoverMouse = function ($el) {
    $el.each(function () {
      var $self = $(this);
      var hover = false;
      var offsetHoverMax = $self.attr("offset-hover-max") || 0.7;
      var offsetHoverMin = $self.attr("offset-hover-min") || 0.5;
  
      var attachEventsListener = function () {
        $(window).on("mousemove", function (e) {
          //
          var hoverArea = hover ? offsetHoverMax : offsetHoverMin;
  
          // cursor
          var cursor1 = {
            x: e.clientX,
            y: e.pageY
          };
  
          // size
          var width = $self.outerWidth();
          var height = $self.outerHeight();
  
          // position
          var offset = $self.offset();
          var elPos = {
            x: offset.left + width / 2,
            y: offset.top + height / 2
          };
  
          // comparaison
          var x = cursor1.x - elPos.x;
          var y = cursor1.y - elPos.y;
  
          // dist
          var dist = Math.sqrt(x * x + y * y);
  
          // mutex hover
          var mutHover = false;
  
          // anim
          if (dist < width * hoverArea) {
            mutHover = true;
            if (!hover) {
              hover = true;
            }
            onHover(x, y);
          }
  
          // reset
          if (!mutHover && hover) {
            onLeave();
            hover = false;
          }
        });
      };
  
      var onHover = function (x, y) {
        TweenMax.to($self, 0.4, {
          x: x * 0.8,
          y: y * 0.8,
          //scale: .9,
          rotation: x * 0.05,
          ease: Power2.easeOut
        });
      };
      var onLeave = function () {
        TweenMax.to($self, 0.7, {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          ease: Elastic.easeOut.config(1.2, 0.4)
        });
      };
  
      attachEventsListener();
    });
  };
  
  hoverMouse($(".magnet-btn"));