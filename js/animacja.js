/**
 * Created by konrad5 on 06.02.16.
 */


//function wplywanieElementow(){
//$('.funkcjonalnosc').addClass("load");
//
//};
//
//
////wywolanie funkcji przy uruchomieniu strony:
//
//$(document).ready(function () {
//    wplywanieElementow();
//});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    //podaj aktualna pozycje skrola (gornej krawedzi)


    $('.menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            console.log(currLink);
            $('.menu li a ').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

$(document).on('scroll', onScroll);
//funkcja reagująca na scroll strony i wywołanie funkcji onScroll

    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 1000, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });