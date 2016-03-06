//alert(rand(1, 64));



function rand(min, max) {
    var argc = arguments.length;
    if (argc === 1) {
        min = 1;
        max = 8;
    } else if (argc === 1) {
        throw new Error('Funkcja wymaga podania obu argumentów min i max');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function losowanie(ile) {
    while (ile>0) {
        var y = Math.round(Math.random() * 8); //losujemy wiersz
        var x = Math.round(Math.random() * 8); //losujemy kolumne
        if (t[y][x] != -1) { //czy w wylosowanym miejscu jest pusto
        t[y][x]=-1; //stawiamy zabytek w wylosowanym miejscu
        ile--; //zmniejszamy ilość zabytków pozostałych do postawienia
    };
}


//console.log(losowanie(ile));