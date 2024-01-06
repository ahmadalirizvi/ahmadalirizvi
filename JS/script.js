// Pre loader
window.setTimeout(function () {
    document.getElementById('preloader').style.display = 'none';
}, 5000);
// Nav Scroll
var lastscrolly = window.scrollY;
window.addEventListener('scroll', () => {
    if (lastscrolly < window.scrollY) {
        document.getElementById('on-scroll-nav').style.display = "block";
    }
    else{
        document.getElementById('on-scroll-nav').style.display = "none";
    }

});

// href scroll
$("a[href^='#']").click(function(e) {
    e.preventDefault();
    var position = $($(this).attr("href")).offset().top;
    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});