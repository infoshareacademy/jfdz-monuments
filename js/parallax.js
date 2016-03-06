
$(window).on('scroll load',function (e) {
    var scrolled = $(window).scrollTop();
    $('.zajawka').css('background-position', 'center ' + -(-122 +scrolled * 0.5) + 'px');
    $('.zajawka-tekst').css('margin-top', scrolled * 0.75);
});