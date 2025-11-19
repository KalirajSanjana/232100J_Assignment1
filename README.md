# Assignment 1 : 🎬 Mini IMDb Movie Module

--------------------------------------------------------------------------------------------------------------------
#📘 Overview
This project implements a simplified version of IMDb’s movie and review system.
Users can add movies, store reviews, calculate average ratings, filter/search movies, and sort results.
All data is stored using JavaScript arrays, acting as an in-memory database.

The project is inspired by IMDb’s Advanced Title Search:
🔗 https://www.imdb.com/search/title/

--------------------------------------------------------------------------------------------------------------------
# 📂 Project Structure

```bash
├── Sanjana_Assignment1/
│   ├── sanjana_imdb.js
│   ├── app.js
│   ├── README.md
```
--------------------------------------------------------------------------------------------------------------------
# 🚀 Getting Started
1. Install Node.js on your computer.
2. Copy the file sanjana_imdb.js into a new project folder.
3. Create a second file called app.js to test the functions found in sanjana_imdb.js.
4. Run your test file using the command: node app.js
      
If everything is placed correctly, the terminal will display the results of all functions that you cal

--------------------------------------------------------------------------------------------------------------------
# 🧩 Module Features

 1. Add Movies

      Adds a new movie entry with ID, title, genre, and year.

 2. List All Movies
   
      Displays all stored movie objects.

 3. Add Reviews

      Stores reviews linked to movie IDs.
      The return message includes the movie title.

 4. Calculate Average Rating

      Returns the movie’s title and its calculated average rating.

 5. Search Movies

      Search by title or genre (case-insensitive).

 6. List Movie Reviews

      Returns all users and ratings for a specific movie (without movieId field).

 7. Filter by Genre

      Returns all movies belonging to a selected genre.

 8. Filter by Release Year

      Returns movies released in a specific year.

 9. Filter by Year Range & Sort A–Z

      Filters movies within a year range, then sorts the result alphabetically.

10. Bonus Feature – Rating Label

      Categorizes movies as Excellent, Average, or Poor based on their average rating.
--------------------------------------------------------------------------------------------------------------------
📘 Usage Examples

Below are example calls demonstrating how to use every function in the sanjana_imdb.js module.


## ▶ **Import the Module**

```js
const imdb = require("./sanjana_imdb.js");
```

---

## 🎬 **1. Add a Movie**

```js
imdb.addMovie(3, "Avatar", "Sci-Fi", 2009);
```

---

## 🎥 **2. List All Movies**

```js
imdb.listMovies();
```

---

## ⭐ **3. Add a Review**

```js
imdb.addReview(1, "Sanjana", 10);
```

---

## 📊 **4. Get Average Rating**

```js
imdb.getAverageRating(1);
```

---

## 🔍 **5. Search Movies (Title or Genre)**

```js
imdb.searchMovie("sci");
```

---

## 📝 **6. List Reviews for a Movie**

```js
imdb.listReviews(1);
```

---

## 🎭 **7. Filter Movies by Genre**

```js
imdb.filterByGenre("Sci-Fi");
```

---

## 📅 **8. Filter Movies by Year**

```js
imdb.filterByYear(2010);
```

---

## 🔄 **9. Filter by Year Range & Sort A–Z**

```js
imdb.sortByTitleAfterYearFilter(1995, 2015);
```

---

## 🏆 **10. Rating Label (Excellent / Average / Poor)**

```js
imdb.ratingLabelFor(1);
```

---



