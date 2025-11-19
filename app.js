// Test File for IMDb node module
// This file demonstrates how each function in imdb.js works,
// including adding movies, reviews, searching, filtering, and sorting.
// Run using:  node app.js

const imdb = require("./sanjana_imdb.js");

// ---------------------------------------------------------
// 1. ADD MOVIE
// ---------------------------------------------------------
console.log("\n=== 🎬 Function 1: Add Movie ===");
console.log(imdb.addMovie(3, "Avatar", "Sci-Fi", 2009));


// ---------------------------------------------------------
// 2. LIST ALL MOVIES
// ---------------------------------------------------------
console.log("\n=== 🎥 Function 2: List All Movies ===");
console.log(imdb.listMovies());


// ---------------------------------------------------------
// 3. ADD REVIEW
// ---------------------------------------------------------
console.log("\n=== ⭐ Function 3: Add Review ===");
console.log(imdb.addReview(1, "Sanjana", 10));   // Add review for Inception


// ---------------------------------------------------------
// 4. GET AVERAGE RATING
// ---------------------------------------------------------
console.log("\n=== 📊 Function 4: Average Rating ===");
console.log(imdb.getAverageRating(1));           // Inception


// ---------------------------------------------------------
// 5. SEARCH MOVIE (title / genre)
// ---------------------------------------------------------
console.log("\n=== 🔍 Function 5: Search Movie (title / genre) ===");
console.log(imdb.searchMovie("sci"));            // Should find Sci-Fi movies


// ---------------------------------------------------------
// 6. LIST REVIEWS OF A MOVIE
// ---------------------------------------------------------
console.log("\n=== 📝 Function 6: List Reviews ===");
console.log(imdb.listReviews(1));                // Reviews for Inception


// ---------------------------------------------------------
// 7. FILTER MOVIES BY GENRE
// ---------------------------------------------------------
console.log("\n=== 🎭 Function 7: Filter by Genre ===");
console.log(imdb.filterByGenre("Sci-Fi"));


// ---------------------------------------------------------
// 8. FILTER MOVIES BY YEAR
// ---------------------------------------------------------
console.log("\n=== 📅 Function 8: Filter by Year ===");
console.log(imdb.filterByYear(2010));


// ---------------------------------------------------------
// 9. FILTER BY YEAR RANGE + SORT A–Z
// ---------------------------------------------------------
console.log("\n=== 🔄 Function 9: Filter by Year Range & Sort A–Z ===");
console.log(imdb.sortByTitleAfterYearFilter(1995, 2015));


// ---------------------------------------------------------
// 10. RATING LABEL (Excellent / Average / Poor)
// ---------------------------------------------------------
console.log("\n=== 🏆 Function 10: Rating Label ===");
console.log(imdb.ratingLabelFor(1));


// ---------------------------------------------------------
// YAY
// ---------------------------------------------------------
console.log("\n✅ All functions executed successfully!");


