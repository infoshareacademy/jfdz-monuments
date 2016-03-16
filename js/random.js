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
        $('table, td').eq(rand(1, 64)).addClass('selected');
    }
}