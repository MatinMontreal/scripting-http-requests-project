// Don't forget to commit your work from Step 2 if you haven't already!
// In another file, create a third function, getAndPrintHTML, which will look very similar to your second function,
// but accepts a parameter, options, which is an object that contains values for the host and path,
// exactly like requestOptions.
// Reuse whatever code you need from part 2 - we're still getting and printing the HTML.
//
//



var https = require('https');



function getAndPrintHTML(options) {
  var options = requestOptions;

  var appendedString = '';

  /* Add your code here */
  https.get(options, function(response) {
    response.on('data', function(data) {
      appendedString += data;
    });

    response.on('end', function(data) {
      console.log(appendedString);
    });
  });
}



var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html',
  };



console.log(getAndPrintHTML());