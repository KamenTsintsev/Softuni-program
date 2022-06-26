function songs(arr) {
    let tracksCount = arr.shift();
    let playlistNeeded = arr.pop()

    let tracks = [];

    class Song {
        constructor(playlist, name, time) {
            this.playlist = playlist;
            this.name = name;
            this.time = time;
            this.print = () => console.log(this.name);
        }
    }

    for (let i = 0; i < tracksCount; i++) {
        let track = arr[i].split("_");
        let playlist = track.shift();
        let name = track.shift();
        let duration = track.shift();

        let song = new Song(playlist, name, duration);

        tracks.push(song);
    }

    if (playlistNeeded === "all") {
        tracks.forEach(s => s.print())
    } else {
        tracks
            .filter(s => s.playlist === playlistNeeded)
            .forEach(s => s.print());
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'casual_Smooth Criminal_4:01',
    'favourite'])