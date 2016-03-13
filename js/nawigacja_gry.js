/**
 * Created by Konrad on 2016-03-10.
 */
var $game = $('#gra');
var $table;
var $row;
var $cell;


//1. tworzenie planszy do gry:
function CreateTable(height, width) {
   $table = $('<table>');
    for (y = 0; y < height; y++) {
       $row = $('<tr>');
        for (x = 0; x < width; x++) {
            $cell = $('<td>');
            if (y==0 && x==0) {
                $cell.addClass('pole');
                //$cell.html('start');
            };
            $cell.html('działa!');
            $row.append($cell);
            }

        $table.append($row);
    }
    return $table;
}

$game.append(CreateTable(8, 16));

//2. funkcja dostawania sie do wybranych komorek na planszy np zeby okreslic stan danej komorki
//if na komorke 0/0

//3. ustawienie poczatkowego stanu gry- miejsca startu dla gracza

var start

//interaktywność komórek w tabeli
//pobierz tabele i wykonaj na niej event click dla komorki:

$table.on('click', 'td', function () {
    $(this).addClass('pole');
});

//ustawienie dla ruchów klawiatury in progress spr trigger i eq
$table.on('keydown', 'td', function () {
    if (e.keyCode == 37) {
    $(this).toggleClass('pole');
    }
});
