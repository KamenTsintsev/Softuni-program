function solve(arg1) {
    let num = arg1;

    console.log('<div class="chessboard">');
    let counter = 1

    for (let i = 0; i < num; i++) {
        console.log('  <div>');

        for (let j = 0; j < num; j++) {

            if (counter % 2 == 1) {
                console.log('    <span class="black"></span>');
            } else {
                console.log('    <span class="white"></span>');
            }
            counter++;
        }

        console.log('  </div>');
        if (num % 2 == 0) {
            counter++;
        }
    }

    console.log('</div>');

}
solve(6)