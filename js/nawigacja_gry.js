/**
 * Created by Konrad on 2016-03-10.
 */
var $game = $('#gra');
var $table;
var $row;
var $cell;


//tworzenie planszy do gry:
function CreateTable(height, width) {
   $table = $('<table>');
    for (y = 0; y < height; y++) {
       $row = $('<tr>');
        for (x = 0; x < width; x++) {
            $cell = $('<td>');
            $cell.css({
                width: 50,
                height: 50,
                border: '1px solid'
            });
            $cell.html('działa!');
            $row.append($cell);
        }

        $table.append($row);
    }
    return $table;
}

$game.append(CreateTable(8, 16));

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
