// // while https is built-in to Node, it is a module, so it must be required
// var https = require('https');

// // the host can be thought of as the domain name you want to read from,
// // and the path is the resource - '/' is the root path, but if you wanted to read a
// // particular resource (like '/login/index.html'), that would be defined in the path
// var requestOptions = {
//   host: 'example.com',
//   path: '/'
// };

// // notice that https.get takes a callback with one parameter -
// // response, which is a Stream that represents the HTTP response
// https.get(requestOptions, function (response) {

//   // set encoding of received data to UTF-8
//   response.setEncoding('utf8');

//   // the callback is invoked when a `data` chunk is received
//   response.on('data', function (data) {
//     console.log('Chunk Received. Length:', data.length);
//   });

//   // the callback is invoked when all of the data has been received
//   // (the `end` of the stream)
//   response.on('end', function() {
//     console.log('Response stream complete.');
//   });

// });


// Your first function getAndPrintHTMLChunks will utilize the https library to GET a given URL.
// You can use the example above as a reference or template.
// This function should console.log each chunk of data as it is received, concatenated with a newline character ('\n') so you can visualize each chunk.
// Remember in this and each subsequent Step - you will always need to invoke (call) the function you wrote.

var https = require('https');

function getAndPrintHTMLChunks() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html',
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {
    response.on('data', function(data) {
      console.log(data + '\n');
    });
  });
}

console.log(getAndPrintHTMLChunks());