//calls the list of movies and sorts the data by sales (revenue) descending
function renderMovies(movie_list) {
  movie_list.sort((a, b) => {
    return b.revenue - a.revenue;
  });

  //selects the <tbody> element
  //you can make this more precise by using a descendant selector,
  //referring to a particular <table> by ID or style class name
  var tbody = document.querySelector("tbody");

  //clears any existing content in the body
  tbody.textContent = "";

  //for each element in the array...
  for (var idx = 0; idx < movie_list.length; idx++) {
    //get the movie record at the current index
    var movie = movie_list[idx];

    //render that movie record as a <tr> with <td>s
    //and append it to the <tbody>
    tbody.appendChild(renderMovie(movie));
  }
}

function renderMovie(movie) {
  //creates the <tr> element
  var tr = document.createElement("tr");

  //creates and appends the <td> elements
  tr.appendChild(renderMovieProp(movie.title, true));
  tr.appendChild(renderMovieProp(movie.revenue));
  tr.appendChild(renderMovieProp(movie.rating));

  //returns the table row to the caller
  return tr;
}

function renderMovieProp(content, nonNumeric) {
  //creates the new <td> element
  var td = document.createElement("td");

  //sets its text content to the provided value
  td.textContent = content;

  //if it should be formatted as nonNumeric...
  if (nonNumeric) {
    //add the "non-numeric" style class
    td.classList.add("non-numeric");
  }

  //return the new element to the caller
  return td;
}

//this defines the variable "input" and identifies the Id of "movie-filter" so that functions can be applied to it
var input = document.getElementById("movie-filter");

//once that var is defined this applies the filter function
//.toLowerCase tells the computer that all of the data is lowercase so that when upper or lowercase is searched results are still returned.
//Because of the console log I ran showing that -1 was returned on "var index = movie.title" I needed the "if" statement
//If the index = -1 then the return is false. To return the correct information else{ return true; --is added
input.addEventListener("input", function() {
  var filteredMovies = MOVIES.filter(function(movie) {
    var index = movie.title.toLowerCase().indexOf(input.value.toLowerCase());
    if (index == -1) {
      return false;
    } else {
      return true;
    }
  });
  renderMovies(filteredMovies);
});
// function renderBooks(book_list) {
//   book_list.sort((a, b) => {
//     return b.revenue - a.revenue;
//   });
//   //selects the <tbody> element
//   //you can make this more precise by using a descendant selector,
//   //referring to a particular <table> by ID or style class name
//   var tbody = document.querySelector("tbody");

//   //clears any existing content in the body
//   tbody.textContent = "";

//   //for each element in the array...
//   for (var idx = 0; idx < book_list.length; idx++) {
//     //get the movie record at the current index
//     var book = book_list[idx];

//     //render that movie record as a <tr> with <td>s
//     //and append it to the <tbody>
//     tbody.appendChild(renderBook(book));
//   }
// }
// function renderBook(book) {
//   //creates the <tr> element
//   var tr = document.createElement("tr");

//   //creates and appends the <td> elements
//   tr.appendChild(renderBookProp(book.title, true));
//   tr.appendChild(renderBookProp(book.price));
//   // (add back in if I add book rating) tr.appendChild(renderBookProp(book.rating));

//   //returns the table row to the caller
//   return tr;
// }

// function renderBookProp(content, nonNumeric) {
//   //creates the new <td> element
//   var td = document.createElement("td");

//   //sets its text content to the provided value
//   td.textContent = content;

//   //if it should be formatted as nonNumeric...
//   if (nonNumeric) {
//     //add the "non-numeric" style class
//     td.classList.add("non-numeric");
//   }

//   //return the new element to the caller
//   return td;
// }

// //this defines the variable "input" and identifies the Id of "movie-filter" so that functions can be applied to it
// var input = document.getElementById("book-filter");

// //once that var is defined this applies the filter function
// //.toLowerCase tells the computer that all of the data is lowercase so that when upper or lowercase is searched results are still returned.
// //Because of the console log I ran showing that -1 was returned on "var index = movie.title" I needed the "if" statement
// //If the index = -1 then the return is false. To return the correct information else{ return true; --is added
// input.addEventListener("input", function() {
//   var filteredBooks = BOOKS.filter(function(book) {
//     var index = book.title.toLowerCase().indexOf(input.value.toLowerCase());
//     if (index == -1) {
//       return false;
//     } else {
//       return true;
//     }
//   });
//   renderBooks(filteredBooks);
// });
