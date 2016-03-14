/**
 * Created by Konrad on 2016-03-10.
 */
var $game = $('#gra');
var $table;
var $row;
var $cell;


//1. tworzenie planszy do gry z zaznaczeiem komorki startowej:
function CreateTable(height, width) {
   $table = $('<table>');
    for (y = 0; y < height; y++) {
       $row = $('<tr>');
        for (x = 0; x < width; x++) {
            $cell = $('<td>');
            if (y==0 && x==0) {
                $cell.addClass('czerwony');
                $cell.html('Ruszaj!');
            };
            $row.append($cell);
            }

        $table.append($row);
    }
    return $table;
}

$game.append(CreateTable(8, 8));

//2. interaktywność komórek w tabeli dla click
//pobierz tabele i wykonaj na niej event click dla komorki:
//$table.on('click', 'td', function () {
//    $(this).addClass('pole');
//});

//3. interaktywność dla dla ruchów klawiatury in progress spr trigger i eq

$(document).on('keydown', function (e)  {
    if (e.keyCode ==37 || e.which ==38 || e.which ==39 || e.which ==40)
    {
        $('tr :nth-child(2) ').addClass('czerwony');
    }
});


//
//var board = [];
//function poczatekGry() {
//    var size = 8;
//    for (var x = 0; x < size; x++) {
//        board[x] = [];
//        for (var y = 0; y < size; y++) {
//            board[x][y] = {};
//            board[2][3].addClass('czerwony');
//        }
//    }
//}
//poczatekGry();







//. wprowadzenie stanu gry, czyli if ruch o 1 pozycje = zabierz mu 1km z puli i dopisz to sumy przebytych km
//. funkcja losujaca komorki na mapie gdzie beda zabytki
//. funkcja losujaca komorki na mapie gdzie beda punkty
//. funkcja dostawania sie do wybranych komorek na planszy np zeby okreslic stan danej komorki
//if click/strzalka na komorke wylosowana to dodaj x punktow dla playera, if click na zabytek = oblicz droge i odejmij od sumy km



