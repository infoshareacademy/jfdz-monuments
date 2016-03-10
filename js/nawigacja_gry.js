/**
 * Created by Konrad on 2016-03-10.
 */
var $game = $('#gra');
var $table = $('<table>');
var board = [];
var $row = $('<tr>');
var $cell = $('<td>');


$($game).css({
    backgroundColor: 'grey',
});

function CreateBoard(height, width) {
    var $table = $('<table>');
    for (y = 0; y < height; y++) {
        $row = $('<tr>');
        for (x = 0; x < width; x++) {
            $cell = $('<td>');
            $cell.css({
                width: 50,
                height: 50,
                border: '1px solid',
                backgroundColor: 'green'
            })
            $cell.html('działa!')
            $row.append($cell);
        }

        $table.append($row);
    }
    return $table;
}

$game.append(CreateBoard(8, 16));