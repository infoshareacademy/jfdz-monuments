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

    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('.menu li a ').removeClass("active");
        $('.menu a[href="#Copyright"]').addClass('active');
    }
}

$(document).on('scroll', onScroll);
//funkcja reagująca na scroll strony i wywołanie funkcji onScroll

    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            //wylaczamy domyslne zachowanie przegladarki dla klikniec w menu
            $(document).off("scroll");
            //wylacza scroll
            $('a').each(function () {
                $(this).removeClass('active');
            })
            //odczepia klase active
            $(this).addClass('active');
            ///doczepia klase active do kliknietego elementu

            var target = this.hash,
                menu = target;
            $target = $(target);

            $('html, body').stop().animate({
                //zatrzymanie pozostalych animacji w body i odpala nowa animacje jak nizej
                'scrollTop': $target.offset().top+2
                //przewijamy nasza strone do miejsca gdzie zaczyna sie div
            }, 1000, 'swing', function () {
                //wywolujemy callback o tresci jak nizej
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });