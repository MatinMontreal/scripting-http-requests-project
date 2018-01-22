// Don't forget to commit your work from Step 1 if you haven't already!
// In another file, create a second function, getAndPrintHTML, which will look very similar to your first function.
// This function should use a buffering technique to append each chunk of data to a variable as it is received,
// and then console.log the data once all of the data has been received.
// Buffering in this context means the technique you've used before (usually in loops or conditionals)
// of creating an empty variable and adding data to it.




var https = require('https');

function getAndPrintHTML() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html',
  };

  var appendedString = "";

  /* Add your code here */
  https.get(requestOptions, function(response) {
    response.on('data', function(data) {
      appendedString += data;
    });

    response.on('end', function (data) {
      console.log(appendedString);
    });


  });






}


console.log(getAndPrintHTML());





