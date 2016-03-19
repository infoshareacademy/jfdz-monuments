/**
 * Created by Konrad on 2016-03-10.
 */
var $game = $('#game');
var $table;
var $row;
var $cell;
var board = [];

//1. tworzenie planszy do gry z zaznaczeiem komorki startowej:
function CreateTable(height, width) {
    $table = $('<table>');
    for (y = 0; y < height; y++) {
        $row = $('<tr>');
        for (x = 0; x < width; x++) {
            $cell = $('<td>');
            if (y == 0 && x == 0) {
                //$cell.addClass('selectedCell');
                //$cell.html('Ruszaj!');
            };
            $row.append($cell);
        }

        $table.append($row);
    }
    return $table;
}

$game.append(CreateTable(8, 8));

//2. podczepienie tablicy ze współrzędnymi pod planszę

function initiateCells(size) {
    board = new Array(size);
    for (var x = 0; x < size; x++) {
        board[x] = [];
        for (var y = 0; y < size; y++) {
            board[x][y] = {};
        }
    }
    //
    //board[3][4] = { player: 1 };
    //board[2][4] = { player: 2 };
    //board[3][1] = { player: 1 };
};

initiateCells(8);

//2. funkcja pobierająca wartości indexu/współrzędne dla kliniętej komórki
var $selectedCell = {
    row_index: 0,
    col_index: 0
};

function getIndexClick() {
    $table.on('click', 'td', function () {
        $selectedCell.row_index = $(this).parent().index();
        $selectedCell.col_index = $(this).index();
    });
}
getIndexClick();

function getIndexKeydown() {
        $selectedCell.row_index = $(this).fist().parent().index();
        $selectedCell.col_index = $(this).first().index();
};

var firstCell = $('td').first();
var selectedField = $('td').hasClass('selectedCell');
var firstRow = $('tr').first();
var nextCell = $('tr :nth-child(1)');


function interactiveMouse() {
    $table.on('click', 'td', function () {
        $(this).addClass('selectedCell');
        //firstCell.addClass('selectedCell');
        $score += 1;
        $playerScore.text('TWÓJ WYNIK TO:' + ' ' + $score + ' ' + 'pkt');
        $distance -= 1;
        $distanceBoard.text('ZOSTAŁO :' + ' ' + $distance + ' ' + 'km');
        //wywolaj funkcje ktora odejmie 1km od tablicy distance
    });
}
interactiveMouse();

var rightMove = {
    x: $selectedCell.col_index + 1,
    y: $selectedCell.row_index };


//getIndexKeydown();
var currentPosition;

//3. interaktywność dla ruchów klawiatury jesli nacisniesz strzalke w prawo to wykonaj ruch x =x+1 a y =y
function interactiveKeyboard() {
    $(document).on('keydown', function (e) {
        if (e.keyCode == 39) {
            firstCell = firstCell.next();
            firstCell.addClass('selectedCell');
        }
        else if (e.keyCode == 40) {
            firstRow = firstRow.next();
            firstRow.addClass('selectedCell');

        }
    });
}

interactiveKeyboard();
//$(document).on('keydown', function (e)  {
//    if (e.keyCode ==37 || e.which ==38 || e.which ==39 || e.which ==40)
//    {
//        $('tr :nth-child(2) ').addClass('czerwony');
//
//        }
//    }
//);


//4. ustawienianie początkowego stanu gry


//. funkcja losujaca komorki na mapie gdzie beda zabytki
//. funkcja losujaca komorki na mapie gdzie beda punkty
//. funkcja dostawania sie do wybranych komorek na planszy np zeby okreslic stan danej komorki
//if click/strzalka na komorke wylosowana to dodaj x punktow dla playera, if click na zabytek = oblicz droge i odejmij od sumy km




