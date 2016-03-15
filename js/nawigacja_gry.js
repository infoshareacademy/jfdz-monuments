/**
 * Created by Konrad on 2016-03-10.
 */
var $game = $('#game');
var $table;
var $row;
var $cell;
var $playerScore;

//1. tworzenie planszy do gry z zaznaczeiem komorki startowej:
function CreateTable(height, width) {
    $table = $('<table>');
    for (y = 0; y < height; y++) {
        $row = $('<tr>');
        for (x = 0; x < width; x++) {
            $cell = $('<td>');
            if (y == 0 && x == 0) {
                $cell.addClass('czerwony');
                $cell.html('Ruszaj!');
            }
            ;
            $row.append($cell);
        }

        $table.append($row);
    }
    return $table;
}

$game.append(CreateTable(8, 8));

//2. interaktywność komórek w tabeli na click
var firstCell = $('td').first();

function makeInteractive() {
    $table.on('click', 'td', function () {
        $(this).addClass('czerwony');
        firstCell.addClass('czerwony');
        $playerScore = $('#playerScore');
        $playerScore.html("+1");
        //wywolaj funkcje ktora doda 1km do tablicy playerScore
        //wywolaj funkcje ktora odejmie 1km od tablicy distance
    });}
makeInteractive();

//3. interaktywność dla ruchów klawiatury
function interactiveKeyboard() {
    $(document).on('keydown', function (e) {
        if (e.keyCode == 39) {
            firstCell = firstCell.next();
            firstCell.addClass('czerwony');

        }
        //if (e.keyCode == 40) {
        //    firstCell.next('tr').addClass('czerwony');
        //}
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

var state = {
    scoreName: 'Pokonana odległość',
    time: 20,
    score: {
        player: 0,
    }
};

$('#startGameButton').click(function () {
    startGame(state);
});


//. wprowadzenie stanu gry, czyli if ruch o 1 pozycje = zabierz mu 1km z puli i dopisz to sumy przebytych km
//. funkcja losujaca komorki na mapie gdzie beda zabytki
//. funkcja losujaca komorki na mapie gdzie beda punkty
//. funkcja dostawania sie do wybranych komorek na planszy np zeby okreslic stan danej komorki
//if click/strzalka na komorke wylosowana to dodaj x punktow dla playera, if click na zabytek = oblicz droge i odejmij od sumy km




