//IMDB node module
//This module simulates basic IMDb features such as adding movies,
//storing reviews, calculating average ratings, searching, filtering,
//and sorting movies.
//Arrays are used as a "database".


module.exports = {
  description: "Sanjana's mini IMDb",

  // Arrays as "database"
  movies: [
    { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 },
    { id: 2, title: "Titanic", genre: "Romance", year: 1997 }
  ],
  reviews: [
    { movieId: 1, user: "Alice", rating: 9 },
    { movieId: 1, user: "Bob", rating: 8 }
  ],

  // Function 1: Add a new movie
  addMovie: function (id, title, genre, year) {
    this.movies.push(
    { id: id,
      title: title,
      genre: genre,
      year: year 
    });
    return "Movie added: " + title;
  },

  // Function 2: Show all movies
  listMovies: function () {
    return this.movies;
  },

  // Function 3: Add a review (now shows movie title)
  addReview: function (movieId, user, rating) {

    // Find movie title based on movieId
    var title = "";
    for (var i = 0; i < this.movies.length; i++) {
      if (this.movies[i].id == movieId) {
        title = this.movies[i].title;
      }
    }

    // Add the review
    this.reviews.push(
    {
      movieId: movieId,
      user: user,
      rating: rating
    });

    // Return message including title
    return "Review added for movie: " + title;
  },


  // Function 4: Get average rating for movie (with title)
  getAverageRating: function (movieId) {

    var total = 0, 
    count = 0, 
    title = "";

    // Find title + calculate rating in one loop
    for (var i = 0; i < this.movies.length; i++) {
      if (this.movies[i].id == movieId) {
        title = this.movies[i].title;
      }
    }
    for (var j = 0; j < this.reviews.length; j++) {
      if (this.reviews[j].movieId == movieId) {
        total += this.reviews[j].rating;
        count++;
      }
    }

    var avg = (count == 0) ? 0 : total / count;

    return title + " has an average rating of " + avg;
  },


  // Function 5: Search movie by title or genre
  searchMovie: function (keyword) {
    var key = keyword.toLowerCase();
    var found = [];
    for (var i = 0; i < this.movies.length; i++) {
      var m = this.movies[i];
      if (m.title.toLowerCase().indexOf(key) !== -1 || m.genre.toLowerCase().indexOf(key) !== -1) {
        found.push(m);
      }
    }
    return found;
  },


  // Function 6: List all reviews for a movie 
  listReviews: function (movieId) {

  // find the movie title
    var title = "";
    for (var i = 0; i < this.movies.length; i++) {
      if (this.movies[i].id == movieId) {
        title = this.movies[i].title;
      }
    }

    // collect review objects without movieId
    var result = [];
    for (var j = 0; j < this.reviews.length; j++) {
      if (this.reviews[j].movieId == movieId) {
        result.push({
          user: this.reviews[j].user,
          rating: this.reviews[j].rating
        });
      }
    }

    return {
      movieTitle: title,
      reviews: result
    };
  },


  // Function 7: Filter movies by genre
  filterByGenre: function (genre) {

    var result = [];
    
    // collect movies
    for (var i = 0; i < this.movies.length; i++) {
      if (this.movies[i].genre == genre) {
         result.push(this.movies[i]); 
      }
    }

    // return both genre and the list
    return {
      genre: genre,
      movies: result
    };
  },


  // Function 8: Filter movies by release year
  filterByYear: function (year) {
    var result = [];

    // collect movies from that year
    for (var i = 0; i < this.movies.length; i++) {
      if (this.movies[i].year == year) {
         result.push(this.movies[i]); 
      }
    }

    // return both year and the results
    return {
      year: year,
      movies: result
    };
  },


  // Function 9: Filter by year range and sort alphabetically (A–Z)
  sortByTitleAfterYearFilter: function (startYear, endYear) {
    var result = [];

    // Step 1: Filter by year range
    for (var i = 0; i < this.movies.length; i++) {
      if (this.movies[i].year >= startYear && this.movies[i].year <= endYear) {
        result.push(this.movies[i]);
      }
    }

    // Step 2: Sort A–Z by title
    for (var a = 0; a < result.length - 1; a++) {
      for (var b = a + 1; b < result.length; b++) {
        if (result[a].title > result[b].title) {
          var swap = result[a];
          result[a] = result[b];
          result[b] = swap;
        }
      }
    }

    return {
    startYear: startYear,
    endYear: endYear,
    movies: result
    };
  },

  // Function 10 (Bonus Function): Rating label (Excellent / Average / Poor)
  // Enhancement beyond IMDb for clarity
  ratingLabelFor: function (movieId) {

    // Find title
    var title = "";
    for (var i = 0; i < this.movies.length; i++) {
      if (this.movies[i].id == movieId) {
        title = this.movies[i].title;
      }
    }

    // Get average rating 
    var total = 0, count = 0;
    for (var j = 0; j < this.reviews.length; j++) {
      if (this.reviews[j].movieId == movieId) {
        total += this.reviews[j].rating;
        count++;
      }
    }

    var avg = (count == 0) ? 0 : total / count;

    // Determine label
    var label = "";
    if (avg >= 8) label = "Excellent";
    else if (avg >= 5) label = "Average";
    else label = "Poor";

    return title + " is rated as: " + label;
  }


};

