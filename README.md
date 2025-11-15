# Assignment 1 : IMDB Node Module

This small Node.js module is designed to mimic the basic idea behind modern movie-rating websites such as IMDb.
For reference, the real IMDb website’s search page can be found here:
[https://www.imdb.com/search/title/](url)

The goal of this project is to provide a simple movie system where you can add films, write reviews, calculate average ratings, and perform basic searches.
All information is stored inside JavaScript arrays, so there is no need for an external database.

Below is a screenshot of IMDb’s “Advanced Title Search” page, which shows the type of features this module is based on.
<img width="1027" height="913" alt="image" src="https://github.com/user-attachments/assets/395f1fc7-2850-459e-a604-af52a534926e" />

The module does not recreate every feature shown in the image, but it includes simplified versions such as searching, filtering by year range, and sorting A–Z.

---------------------------------------------------------------------------------------------------------------------
Getting Started

1. Install Node.js on your computer.
2. Copy the file sanjana_imdb.js into a new project folder.
3. Create a second file (usually called app.js) to test the functions found in sanjana_imdb.js.
4. Run your test file using the command: node app.js
   
If everything is placed correctly, the terminal will display the results of all functions that you call.

---------------------------------------------------------------------------------------------------------------------
Function Guide – How to Use the Module

Below is a quick reference guide for each feature in the module, along with example calls and the type of information each function needs.

1. addMovie(id, title, genre, year)
Adds a new movie.
Example: imdb.addMovie(3, "Avatar", "Sci-Fi", 2009)
Required parameters:
  -id (number)
  -title (string)
  -genre (string)
  -year (number)

2. listMovies()
Returns all movies currently in the system.
Example: imdb.listMovies()
Required parameters:
  -none

3. addReview(movieId, user, rating)
Adds a review for the movie with the matching ID.
Example: imdb.addReview(1, "Sanjana", 10)
Required parameters:
  -movieId (number)
  -user (string)
  -rating (number)

4. getAverageRating(movieId)
Computes and returns the average rating for a movie.
Example: imdb.getAverageRating(1)
Required parameters:
  -movieId (number)

5. searchMovie(keyword)
Searches for movies by checking if the keyword exists in the title or genre.
Example: imdb.searchMovie("sci")
Required parameters:
  -keyword (string)

6. listReviews(movieId)
Returns the movie title together with all the reviews written for it.
Example: imdb.listReviews(1)
Required parameters:
  -movieId (number)

7. filterByGenre(genre)
Shows all movies under a specific genre.
Example: imdb.filterByGenre("Sci-Fi")
Required parameters:
  -genre (string)

8. filterByYear(year)
Shows all movies released in a specific year.
Example: imdb.filterByYear(2010)
Required parameters:
  -year (number)

9. sortByTitleAfterYearFilter(startYear, endYear)
Returns movies released within a year range, sorted alphabetically by title.
Example: imdb.sortByTitleAfterYearFilter(1995, 2015)
Required parameters:
  -startYear (number)
  -endYear (number)

10. ratingLabelFor(movieId)
Returns a simple label (“Excellent”, “Average”, or “Poor”) based on the movie’s overall rating.
Example: imdb.ratingLabelFor(1)
Required parameters:
  -movieId (number)
