function rand(min, max) {
    var argc = arguments.length;
    if (argc === 1) {
        min = 1;
        max = 64;
    } else if (argc === 1) {
        throw new Error('Funkcja wymaga podania obu argumentów min i max');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(rand(1, 64));