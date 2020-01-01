window.setInterval(function () {
    var randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
    $('.square.one').css({
        'background': randomColor,
    });
    $('.square.four').css({
        'background': randomColor,
    });
    $('.square.seven').css({
        'background': randomColor,
    });
    $('.square.ten').css({
        'background': randomColor,
    });

    $('.square.two').css({
        'height': '15px',
        'width': '15px',
        'border-radius': '50%',
    });
    $('.square.five').css({
        'height': '15px',
        'width': '15px',
        'border-radius': '50%',
    });
    $('.square.eight').css({
        'height': '15px',
        'width': '15px',
        'border-radius': '50%',
    });

    $('.square.three').css({
        'height': '15px',
        'width': '15px',
    });
    $('.square.six').css({
        'height': '15px',
        'width': '15px',
    });
    $('.square.nine').css({
        'height': '15px',
        'width': '15px',
    });
}, 2000);

window.setInterval(function () {
    var randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
    $('.square.two').css({
        'background': randomColor,
        'height': '100px',
        'width': '1px',
    });
    $('.square.five').css({
        'background': randomColor,
        'height': '100px',
        'width': '1px',
    });
    $('.square.eight').css({
        'background': randomColor,
        'height': '100px',
        'width': '1px',
    });

    $('.square.three').css({
        'border-radius': '50%',
    });
}, 4000);

window.setInterval(function () {
    var randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
    $('.square.three').css({
        'background': randomColor,
        'height': '100px',
        'width': '1px',
    });
    $('.square.six').css({
        'background': randomColor,
        'height': '100px',
        'width': '1px',
    });
    $('.square.nine').css({
        'background': randomColor,
    });

    $('.square.five').css({
        'height': '100px',
        'width': '1px',
    });
    $('.square.eight').css({
        'height': '100px',
        'width': '1px',
    });
}, 6000);