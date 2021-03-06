particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8,
        "random": false,
        "anim": {
          "enable":true,
          "speed": 1.5,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable":true,
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 170,
        "color": "#515152",
        "opacity": 1,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
  }

);
document.addEventListener("DOMContentLoaded", function(){
    Typed.new(".element", {
      strings: ["Conversion.^1500", "Engagement.^1500","Retention.^1500"],
      typeSpeed: 200,
      loop:true,
      backDelay:500
    });
  });
AOS.init();
var y=0;
function debounce(func, wait =20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
$(window).on('scroll',debounce(check));
function check(){
if(window.scrollY>960){
  if(y===0){
    y=1;
$('header').css({"position":"fixed"});
$('header').css({"background-color":"#fff"});
}
}
else{
  if(y===1){
    y=0;
  $('header').css({"position":"static"});
$('header').css({"background-color":"transparent"});
}
}
};
var x=0;
$('#logo div img').on('click',function(){
  $("#nav div:nth-child(1),#nav div:nth-child(2)").toggleClass("show")
  $(this).css({'transform':`rotate(${x+90}deg)`});
  x=x+90;
});
$('#interacttext button').on('click',function(){
  window.scroll(0,1975);
});



