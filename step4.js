// In another file, create a fourth function, getHTML.
// This function will look and behave almost the same as your third function, except:
// The function definition will now accept a callback as a second parameter.
// The function body will invoke (call) the callback when the data is fully received,
// in place of the original console.log.
// To simplify things for the moment, the callback function printHTML will be defined below.
// You just need to ensure it gets passed as an argument when you call getHTML.



var https = require('https');

function getHTML(options, callback) {
  var options = requestOptions;
  var appendedString = '';

  /* Add your code here */
  https.get(options, function(response) {
    response.on('data', function(data) {
      appendedString += data;
    });

    response.on('end', function(data) {
       callback(appendedString);
    });
  });
}




function printHTML (html) {
  console.log(html);
}















var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html',
};

getHTML(requestOptions, printHTML);