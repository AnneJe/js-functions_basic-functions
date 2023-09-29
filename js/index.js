console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here -,-v--

// --^-- write your code here --^--
const title = "the Lord of the Javascript";
const author = "Mario";
let rating = 4.2;
let numberOfSales = 120;
/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

bookTitle = "The Lord of the Javascript";
console.log()

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/
numberOfSales++;
// --v-- write your code here --v--

// --^-- write your code here --^--

numberOfSales++;
rating++;

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
console.log("hier ist die super Funktion");
function logBookData() {
  console.log("Title");
  console.log(
    `Title = ${title} ; Author = ${author} ; Rating = ${rating} ; numberOfSales = ${numberOfSales} `
  );
}
logBookData();
