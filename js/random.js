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
        $('table td').eq(rand(1, 64)).append(targetImage_1);
        $('table td').eq(rand(1, 64)).append(targetImage_2);
        $('table td').eq(rand(1, 64)).append(targetImage_3);
        $('table td').eq(rand(1, 64)).append(targetImage_4);
        $('table td').eq(rand(1, 64)).append(targetImage_5);
        if ($('#50').hasClass("selected")) {
            confirm('Masz dodatkowe punkty,albo coś');
        }
    }
}
