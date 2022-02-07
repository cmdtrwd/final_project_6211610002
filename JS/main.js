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

const buttons = document.getElementsByTagName("hero");
for (const button of buttons) {
    button.addEventListener("click", createRipple);
}
//End Ripple effect//

//Rain//
function show() {
    $('.main').empty();
    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
        var x = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        var y = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        increment += y;
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (y + y - 1 + 100) + '%; animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"><div class="stem" style="animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div><div class="splat" style="animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (y + y - 1 + 100) + '%; animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"><div class="stem" style="animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div><div class="splat" style="animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div></div>';
    }
    $('.main').append(backDrops);
}
$('body').toggleClass('splat-toggle');
show();
//end rain//

