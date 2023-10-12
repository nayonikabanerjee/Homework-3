let allMovies = [];
document.body.style.backgroundColor = 'lightpink';

//Define a movie class with psarameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title; // string
        this.rating = rating; // number
        this.haveWatched = haveWatched; // boolean
    }
}

//add a movie OBJECT to the allMovies array
function addMovie(movie) {
    allMovies.push(movie);
    console.log("A new movie is added.");
    document.write("<br>" + "A new movie is added.");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
function printMovies() {
    console.log("<br>" + "printing all movies...");
    document.write("<br>" + "Printing all movies...");
    let size = 0;
    for (let i = 0; i < allMovies.length; i++) {
        console.log(allMovies[i].title + ", rating of " + allMovies[i].rating + ", haveWatched: " + allMovies[i].haveWatched);
        document.write("<br>" + "<br>" + allMovies[i].title + ", rating of " + allMovies[i].rating + ", haveWatched = " + allMovies[i].haveWatched);
        size++;
    }
    console.log("You have " + size + " movies in total");
    document.write("<br>" + "<br>" + "<br>" + " You have " + size + " movies in total");
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
function highRatings(rating) {
    let size = 0;
    console.log("printing movie that has a rating higher than " + rating);
    document.write("<br>" + "printing movie that has a rating higher than " + rating + "<br>");

    for (let i = 0; i < allMovies.length; i++) {
        if (rating < (allMovies[i]).rating) {
            console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating);
            document.write("<br>" + allMovies[i].title + " has a rating of " + allMovies[i].rating + "<br>");
            size++;
        }
    }
    console.log("In total, there are " + size + " matches");
    document.write("<br>" + "In total, there are " + size + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("changing the status of the movie...");
    document.write("<br>" + "changing the status of the movie...");
    let movie = allMovies.find((movieObj) => movieObj.title === title);
    movie.haveWatched = !movie.haveWatched;
}


////////////////////////////////////////////////////////////

//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
document.write("<br>" + "----------------");
console.log("running program......");
document.write("<br>" + "running program......");
console.log("----------------");
document.write("<br>" + "----------------");

printMovies();

let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
document.write("<br>" + "----------------");
addMovie(movie1);
console.log("----------------");
document.write("<br>" + "----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");
document.write("<br>" + "----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");
document.write("<br>" + "----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");
document.write("<br>" + "----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");
document.write("<br>" + "----------------");

highRatings(3.5);