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

    });

});

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