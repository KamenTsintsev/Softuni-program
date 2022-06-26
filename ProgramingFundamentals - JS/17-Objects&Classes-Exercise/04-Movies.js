function movies(arr) {

    let allMovies = []

    let print = (array) => {
        array.forEach(movieObj => {
            movieObj = JSON.stringify(movieObj);
            if (movieObj.includes("name") && movieObj.includes("director") && movieObj.includes("date")) {
                console.log(movieObj)
            }
        })
    }

    for (let line of arr) {

        if (line.includes("addMovie")) {
            let name = line.split("addMovie ").pop();
            allMovies.push({ name });
        } else if (line.includes("directedBy")) {
            let [movieName, directedBy] = line.split(" directedBy ");
            let movie = allMovies.find(movieObj => movieObj.name === movieName);
            if (movie) {
                movie.director = directedBy;
            }
        } else if (line.includes("onDate")) {
            let [movieName, date] = line.split(" onDate ");
            let movie = allMovies.find(movieObj => movieObj.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }

    }
    print(allMovies);
}
// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]
// )

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])