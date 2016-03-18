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
        var icon = $('table, td').eq(rand(1, 64)).addClass('selected');
        icon.append(targetImage_1);
        icon.append(targetImage_2);
        icon.append(targetImage_3);
        icon.append(targetImage_4);
        icon.append(targetImage_5);
        if ($('#50').hasClass("selected")) {
            confirm('Masz dodatkowe punkty,albo coś');
        }
    }
}
