function solve(arg1, arg2, arg3) {
    let band = arg1;
    let album = arg2;
    let song = arg3;

    let songDuration = band.length * album.length * song.length / 2;
    let rotations = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs')