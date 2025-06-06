// file: files.js
// desc: This file shows saving a text file algorith, reading a text file algorithm. writing to a text file and reading from a text file
// Author: Amina Aar
// Last modified: 20/05/2025
// version 1.0.0

// An algorithm for saving a string to a text file
// 1- BEGIN
// 2-    IMPORT 'fs' module
// 2-    DEFINE 'filePath' as the path of the file to write
// 3-    DEFINE 'data' – The data you want to save to the file.
// 4-    USE 'fs.writeFile method
// 5-       PASS 'filePath' and 'data' as arguments
// 6-       PROVIDE a callback function to handle errors
// 7-          IF error occurs
// 8-             PRINT error message
// 9-          ELSE
// 10-             PRINT success message
// 11- END

// An algorithm for reading in a text file
/*
  1- BEGIN
  2-   IMPORT 'fs' module
  3-   DEFINE 'filePath' as the path of the file to read
  4-   USE 'fs.readFile' method
  5-      PASS 'filePath' as an argument
  6-      PROVIDE a callback function to handle errors and fileText
  7-         IF error occurs
  8-            PRINT error message
  9-         ELSE
  10-           PRINT file content in string format
  11- END

*/
// Require the file system module
const fs = require("fs");
// declare filePath as the path of the file to write
const filePath = "output.txt";
// declare our data to be written
const data = "This is a string that we are going to write to file";

// output writing to file to console
console.log("Writing to file");
// writeLine function call
fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.error("Error writing to file:", error);
  } else {
    console.log("file was written successfuly!");
  }
});

// readFile function call
console.log("Reading text from a file");
fs.readFile(filePath, (err, fileText) => {
  // check for any errors
  if (err) {
    console.error("Error reading the file ", err);
    return;
  } else {
    // output the readFile contents to console
    console.log("The file contents are: ");
    console.log(fileText.toString());
  }
});
