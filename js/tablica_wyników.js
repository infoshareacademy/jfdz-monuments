/**
 * Created by Konrad on 2016-03-18.
 */

var $playerScore =$('#playerScore');
var $score = 0;
$playerScore.text('TWÓJ WYNIK TO:' + ' ' + $score + ' ' + 'pkt');

var $distanceBoard = $('#distanceBoard');
var $distance =30;
$distanceBoard.text('ZOSTAŁO:' + ' ' + $distance + ' ' + 'km');


$('#startGameButton').click(function () {
    startGame(state);
});
