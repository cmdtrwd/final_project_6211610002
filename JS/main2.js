$(window).on("load", function () {
    $('.loader-wrapper').fadeOut("slow");
});

$(document).ready(function () {

    var lastPos = 0;

    $(window).scroll(function () {

        var currentPos = $(this).scrollTop();

        console.log("current scrolling position: " + currentPos);

        if (currentPos > 1) {
            $("#nav-wrapper,#logo-top").addClass("active");

        } else {
            $("#nav-wrapper,#logo-top").removeClass("active");
        }

        if (currentPos > lastPos) {
            $("#nav-wrapper,#logo-top").addClass("down");
            $("#nav-wrapper,#logo-top").removeClass("up");
        } else {
            $("#nav-wrapper,#logo-top").addClass("up");
            $("#nav-wrapper,#logo-top").removeClass("down");
        }

        lastPos = currentPos;

        const mediaQuerydes = window.matchMedia('(max-width: 1710px)')

        if (mediaQuerydes.matches) {
            if (currentPos > 500) {
                $('body').addClass('changeColor1');
            } else {
                $('body').removeClass('changeColor1');
            }
            if (currentPos > 2173) {
                $('body').addClass('changeColor2');
                $('.raincon3').addClass('active');
            } else {
                $('body').removeClass('changeColor2');
            }
            if (currentPos > 3700) {
                $('body').addClass('changeColor3');
            } else {
                $('body').removeClass('changeColor3');
            }
            if (currentPos > 4600) {
                $('body').addClass('changeColor4');
            } else {
                $('body').removeClass('changeColor4');
            }
            if (currentPos > 5480) {
                $('body').addClass('changeColor5');
            } else {
                $('body').removeClass('changeColor5');
            }
            if (currentPos > 6300) {
                $('body').addClass('changeColor6');
            } else {
                $('body').removeClass('changeColor6');
            }
            if (currentPos > 7050) {
                $('body').addClass('changeColor7');
            } else {
                $('body').removeClass('changeColor7');
            }
            if (currentPos > 7650) {
                $('body').addClass('changeColor8');
            } else {
                $('body').removeClass('changeColor8');
            }
        } else {

            if (currentPos > 500) {
                $('body').addClass('changeColor1');
            } else {
                $('body').removeClass('changeColor1');
            }
            if (currentPos > 2173) {
                $('body').addClass('changeColor2');
            } else {
                $('body').removeClass('changeColor2');
            }
            if (currentPos > 3066) {
                $('body').addClass('changeColor3');
            } else {
                $('body').removeClass('changeColor3');
            }
            if (currentPos > 3634) {
                $('body').addClass('changeColor4');
            } else {
                $('body').removeClass('changeColor4');
            }
            if (currentPos > 4210) {
                $('body').addClass('changeColor5');
            } else {
                $('body').removeClass('changeColor5');
            }
            if (currentPos > 4790) {
                $('body').addClass('changeColor6');
            } else {
                $('body').removeClass('changeColor6');
            }
            if (currentPos > 5260) {
                $('body').addClass('changeColor7');
            } else {
                $('body').removeClass('changeColor7');
            }
            if (currentPos > 6000) {
                $('body').addClass('changeColor8');
            } else {
                $('body').removeClass('changeColor8');
            }
            if (currentPos > 6600) {
                $('.raincon3').addClass('deactive');
            } else {
                $('.raincon3').removeClass('deactive');
            }
        }
    });

});

//Ripple effect//
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

const buttons = document.getElementsByTagName("body");
for (const button of buttons) {
    button.addEventListener("click", createRipple);
}
//End Ripple effect//

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

TweenMax.set('svg', {
    visibility: 'visible'
});
TweenMax.staggerTo('.loader8 circle', 2, {
    attr: {
        r: 20
    },
    opacity: 0,
    repeat: -1
}, 1);
