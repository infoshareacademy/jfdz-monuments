/**
 * Created by konrad5 on 19.03.16.
 */
var imgPoints = [0, 10, 20, 50, 40, 20 ];
function rand(min, max) {
    var argc = arguments.length;
    if (argc === 1) {
        min = 1;
        max = 64;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function choise() {
    for (var i = 0; i < 5; i++) {
        var icon = $('table, td').eq(rand(1, 64));
        var k = j = 0;
        while( j < 5 && k++ < 20 ){
            randTd = rand(1,64); // losowanie liczby
            if( $('table td').eq( randTd ).is(':empty') ){
                $('table td').eq( randTd ).append( eval( 'targetImage_' + ( ++j ) ) );
            }else{
                console.log( 'Konflikt na polu ' + randTd );
            }
        }
        //if ($('#50').hasClass("selected")) {
        //    confirm('Masz dodatkowe punkty,albo coś');
    }
}