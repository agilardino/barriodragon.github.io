(function (a, b) {
    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(a)) {
        window.location = b;
    }
})(navigator.userAgent || navigator.vendor || window.opera, 'https://agilardino.github.io/barriodragon.github.io/mobile/index.html');

function isSafariOniPhone() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
}

if (isSafariOniPhone()) {
    window.location.href = "https://agilardino.github.io/barriodragon.github.io/mobile/index.html";
}

function isMobileOrTablet() {
    return $(window).width() <= 1080; // Adjust the screen width threshold as needed 768
}

function redirectIfMobileOrTablet() {
    if (isMobileOrTablet()) {
        window.location.href = "https://agilardino.github.io/barriodragon.github.io/mobile/index.html";
    }
}

$(document).ready(function () {
    // Check and redirect on page load
    redirectIfMobileOrTablet();

    // Check and redirect when the window is resized
    $(window).resize(function () {
        redirectIfMobileOrTablet();
    });
});
