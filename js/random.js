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


        //
        //
        //$('table td').eq(rand(1, 64)).append(targetImage_1);
        //$('table td').eq(rand(1, 64)).append(targetImage_2);
        //$('table td').eq(rand(1, 64)).append(targetImage_3);
        //$('table td').eq(rand(1, 64)).append(targetImage_4);
        //$('table td').eq(rand(1, 64)).append(targetImage_5);



        //if ($('#50').hasClass("selected")) {
        //    confirm('Masz dodatkowe punkty,albo coś');
            //while( var randTd = rand(1,64) && $('table td').eq( randTd ).hasClass(targetImage) ){ }
        //}
    }
}

