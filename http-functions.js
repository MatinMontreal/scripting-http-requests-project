// Make a new file for your module.
//You can call the file whatever you want,
//but for the purposes of the exercise we'll call it http-functions.js.
//Remember that your module needs to export the function so it is available via require.
//You can export an object with the function as a property if you prefer,
//but the example below exports the function directly for the sake of simplicty.
// You can use the template below and copy the contents of your getHTML function into it.

var https = require('https');

module.exports = function getHTML(options, callback) {
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

