/**
 * Created by Konrad on 2016-03-10.
 */
var $table = $('<table>');
var board = [];
var $row = $('<tr>');
var $cell =$('<td>');
var size = 10;


function CreateBoard () {
    var size =10;
    for (x=0;x < size; x++) {
        board[x] =[];
        console.log('twoja stara');
    }
}

CreateBoard();