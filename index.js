

const movies = [
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.8, releaseYear: 2014 },
    { title: "Fight club", genre: "Action", rating: 8.0, releaseYear: 1999 },
    { title: "Oppengheimer", genre: "Sci-Fi", rating: 8.6, releaseYear: 2024 }
];

const addMovie = (collection, movie) => {
    collection.push(movie);
};

addMovie(movies, { title: "Titanic", genre: "Romance", rating: 9.3, releaseYear: 1997 });
console.log(movies);

const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};

console.log(listMoviesByGenre(movies, "Sci-Fi"));

const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};

console.log(findHighestRatedMovie(movies));

const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};

console.log(getMovieTitles(movies));

const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};

console.log(moviesAfterYear(movies, 2010));

movies.forEach(movie => {
    console.log(`${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating} .`);
})

const listMoviesByName = (collection, word) => {
    return collection.filter(movie => movie.title.includes(word));
};

console.log(listMoviesByName(movies, "gh"));

// const longestLength = (collection) => {

// }
