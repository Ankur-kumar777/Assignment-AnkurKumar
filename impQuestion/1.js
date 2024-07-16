// Create a movie object with title, duration, and stars
const favoriteMovie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes"]
  };
  
  // Function to print out the movie information
  function printMovieInfo(movie) {
    console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(", ")}.`);
  }
  
  // Call the function to print the movie information
  printMovieInfo(favoriteMovie);
  